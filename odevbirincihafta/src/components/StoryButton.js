import React from "react";
import {View,Text, StyleSheet, Dimensions, Image} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const StoryButton = ({resimKaynagi, username, usernameColor, my}) => {
  return (
    <View style={{display: "flex", flexDirection: "row", justifyContent: 'center'}}>

    <View style={styles.imageContainer}>

    {my == false ? <View style={styles.circle}>
    <View style={styles.InCircle}>
    
      <Image
        style={{
          width: "100%",
          height: "100%",
        }}
        source={{
          uri: resimKaynagi,
        }}
      />

    </View>
    </View>: <View style={styles.InCircle}>
    
    <Image
      style={{
        width: "100%",
        height: "100%",
      }}
      source={{
        uri: resimKaynagi,
      }}
    />

  </View> }
    
    </View>
<Text
style={{
  color: usernameColor, marginTop: 67, fontSize: 13,
}}>{username}
</Text>

{my == true ? <View style={styles.plusBck}>

    <AntDesign name="plus" size={16} color="white" />
</View>: null }

</View>
  );
};

const styles = StyleSheet.create({
  plusBck: {
    padding: 1.5,
    justifyContent: 'center',
    position: "absolute",
    left: 37,
    top: 37,
    width: 23,
    height: 23,
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: "#09A1D7",
    overflow: "hidden",
  },
  imageContainer: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "rgba(0,0,0,0.3)",
    overflow: "hidden",
  },
  circle: {
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderWidth: 2.2,
    borderColor: '#b01ba3',
    overflow: 'hidden',
  },
  InCircle: {
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    borderWidth: 2.2,
    borderColor: 'black',
    overflow: 'hidden',
  },
  
});

export default StoryButton;
