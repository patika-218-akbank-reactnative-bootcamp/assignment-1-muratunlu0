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
import TopBar from "./components/TopBar"; 
import ProfileBio from "./components/ProfileBio";
import Tweets from "./components/Tweets";

const App = () => {
  return (
    <View>
    <TopBar />
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
});

export default App;
