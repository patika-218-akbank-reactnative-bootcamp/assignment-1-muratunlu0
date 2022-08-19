import React from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

const topBar = () => {
  return (
    <View style={{display: "flex", flexDirection: "row", padding:16, backgroundColor:"black", justifyContent: 'space-between'}}>
        <View style={{display: "flex", flexDirection: "row"}}>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 19,
              color: "white"
            }}>{`Instagram`}</Text>
        </View>
        <View style={{display: "flex", flexDirection: "row"}}>
        <View style={{marginLeft: 17}}>
        <AntDesign name="pluscircleo" size={25} color="white" />
        </View>
        <View style={{marginLeft: 17}}>
        <AntDesign name="hearto" size={25} color="white" />
        </View>
        <View style={{marginLeft: 17}}>
        <AntDesign name="message1" size={25} color="white" />
        </View>
      </View>
      </View>
  );
};

export default topBar;
