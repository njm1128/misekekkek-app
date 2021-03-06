/**
 * FILENAME : kakaoApi.js
 * DESCRIPTION : connect kakaoREST API then use REST API
 * CREATE DATE : 2020-01-12
 * CREATOR : YUN SANGHO
 *
 * UPDATE DATE : 2020-01-22
 * UPDATOR : NOH JAEMIN
 * UPDATE DESCRIPTION : geoAddress function kakaoREST API URL changed :: coord2address -> coord2regioncode
 */

import axios from "axios";
import { K_REST_API_KEY } from "react-native-dotenv";

const kakaoREST = axios.create({
  baseURL: "https://dapi.kakao.com/"
});

/**
 * FUNC NAME : geoAddress
 * DESCRIPTION : get Current Address with (log,lat)
 * CREATEOR : YUN SANGHO
 * TEST : COMPLATE
 * API PARAMS
 * - lon : 경도
 * - lat : 위도
 * RETURN : Object (address data)
 */
export const geoAddress = async (log, lat) => {
  let geoData = null;

  try {
    await kakaoREST
      .get(
        `v2/local/geo/coord2regioncode.json?x=${log}&y=${lat}&input_coord=WGS84`,
        {
          headers: {
            Authorization: `KakaoAK ${K_REST_API_KEY}`
          }
        }
      )
      .then(res => {
        // console.log(res.data.documents[0]);
        geoData = res.data.documents[0];
      });
  } catch (error) {
    console.log(error);
    console.log("Can't Get Address Current Position");
  } finally {
    return geoData;
  }
};
