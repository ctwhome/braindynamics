import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-360";

export default class frontend_vr extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>BrainDynamics</Text>
          <Text style={styles.subtitle}>PTSD Treatments EEG + VR</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greeting: {
    textAlign: "center",
    fontSize: 30
  },
  subtitle: {
    textAlign: "center",
    fontSize: 20
  }
});

AppRegistry.registerComponent("frontend_vr", () => frontend_vr);
