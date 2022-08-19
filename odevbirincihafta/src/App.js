/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";

// JS exports/imports
import Banner from "./components/Banner";
import Stories from "./components/Stories";
import TopBar from "./components/TopBar"; 
import ProfileBio from "./components/ProfileBio";
import Tweets from "./components/Tweets";

const App = () => {
  return (
    <View>

    <ScrollView
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <Stories />
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "transparent",
    height: "100%",
    width: "100%",
    display: "flex",
  },
  innerContainer: {
    backgroundColor: "gray",
    padding: 8,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
  plusIcon: {
    position: "absolute",
    left: 37,
    top: 37,
    width: 23,
    height: 23,
    borderRadius: 50,
    backgroundColor: "blue",
    overflow: "hidden",
  },
});

export default App;
