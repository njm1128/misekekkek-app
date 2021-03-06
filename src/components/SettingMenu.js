import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";

const { width } = Dimensions.get("window");

class SettingMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  _handleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
      <View style={styles.box}>
        {this.props.alerm ? (
          <TouchableOpacity
            onPressOut={() => this.props.navi.navigate({ routeName: "Alerm" })}
          >
            <Text>{this.props.set}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPressOut={() => this.props.navi.navigate({ routeName: "Agree" })}
          >
            <Text>{this.props.set}</Text>
          </TouchableOpacity>
        )}

        {this.props.agree ? (
          <TouchableOpacity
            onPressOut={() => this.props.navi.navigate({ routeName: "Agree" })}
          >
            <Text>{this.props.val}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPressOut={() => this.props.navi.navigate({ routeName: "Alerm" })}
          >
            <Text>{this.props.val}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width,
    paddingHorizontal: 20,
    paddingVertical: 20
  }
});

export default SettingMenu;
