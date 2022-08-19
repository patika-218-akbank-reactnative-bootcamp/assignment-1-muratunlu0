import React from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

const Post = ({user, tweetText, tweetDate}) => {
  return (
    <Pressable
      style={{
        display: "flex",
        flexDirection: "column",
        borderBottomColor: "rgba(0,0,0,0.3)",
      }}>
      <View
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}>
        <View style={{display: "flex", flexDirection: "row", padding: 14 , marginHorizontal: 2, justifyContent: 'space-between'}}>
        <View style={{display: "flex", flexDirection: "row", }}>
        
        <View style={{ justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    borderWidth: 1.5,
    borderColor: '#b01ba3',
    overflow: 'hidden',}}>
<View style={{ justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    borderWidth: 1.5,
    borderColor: 'black',
    overflow: 'hidden',}}>
        <Image
        style={{
          alignSelf: "center",
          width: 31,
          height: 31,
          borderRadius: 32,
          backgroundColor: "rgba(0,0,0,0.3)",
          marginRight: 8,
          // borderWidth: 2,
          // borderColor:"#b01ba3"
        }}
        source={{
          uri: user.imageUrl,
        }}
      />
      </View>
      </View>
          <Text
            style={{
              marginLeft: 12,
              alignSelf: "center",
              fontWeight: "600",
              fontSize: 14,
            }}>{`${user.username}`}</Text>
            
            </View >
            <View style={{
          transform: [{ rotate: '90deg'}]
        }}>
              <AntDesign name="ellipsis1" size={20} color="white" />
            </View>

        </View>
        <Image
        style={{
          width: "100%",
          height: 300,
          marginRight: 8,
        }}
        source={{
          uri: "https://i.pinimg.com/originals/39/09/05/39090559bdd941de4feacf2e8849ec61.jpg",
        }}
      />
          <View style={{display: "flex", flexDirection: "column"}}>
          <View style={{display: "flex", flexDirection: "row", padding: 15 , marginHorizontal: 2, justifyContent: 'space-between'}}>
          <View style={{display: "flex", flexDirection: "row"}}>
        
        <View style={{marginRight: 17}}>
        <AntDesign name="hearto" size={20} color="white" />
        </View>
        <View style={{marginRight: 17}}>
        <AntDesign name="message1" size={20} color="white" />
        </View>
        <View style={{marginRight: 17}}>
        <AntDesign name="man" size={20} color="white" />
        </View>
      </View>
      <View style={{marginLeft: 17}}>
        <AntDesign name="minussquareo" size={20} color="white" />
        </View>
      </View>
      <View style={{display: "flex", flexDirection: "row", paddingHorizontal: 13, paddingVertical: 2}}>
          <View style={{display: "flex", flexDirection: "row-reverse"}}>
        
          <Image
        style={{
          alignSelf: "center",
          width: 25,
          height: 25,
          borderRadius: 32,
          backgroundColor: "rgba(0,0,0,0.3)",
          marginRight: -10,
          borderWidth: 2,
          borderColor:"black"
        }}
        source={{
          uri: "https://foto.haberler.com/galeri/2017/11/01/instagram-in-siradisi-fenomenleri-710426_4267_70_b.jpg",
        }}
      />
      <Image
        style={{
          alignSelf: "center",
          width: 25,
          height: 25,
          borderRadius: 32,
          backgroundColor: "rgba(0,0,0,0.3)",
          marginRight: -10,
          borderWidth: 2,
          borderColor:"black"
        }}
        source={{
          uri: "https://cdn1.ntv.com.tr/gorsel/uMpPdC6mtUCHkXgRrBY7jA.jpg?width=1000&mode=crop&scale=both",
        }}
      />
      <Image
        style={{
          alignSelf: "center",
          width: 25,
          height: 25,
          borderRadius: 32,
          backgroundColor: "rgba(0,0,0,0.3)",
          marginRight: -10,
          borderWidth: 2,
          borderColor:"black"
        }}
        source={{
          uri: "https://i.pinimg.com/736x/bf/f1/1d/bff11de83086515bdf280818ec8c3458.jpg",
        }}
      />
      
      </View>
      <Text style={{marginLeft: 18, fontSize: 11, alignSelf: "center", color: "white"}}>{"Liked by muratunlu0 and 244 others"}</Text>
      
      </View>
      <View style={{display: "flex", flexDirection: "row", paddingHorizontal: 13, paddingVertical: 4}}>
          
      <Text style={{ color: "white"}}>{user.username}</Text>
      <Text style={{marginLeft: 6, color: "#ADADAD"}}>{"Yeni manzaralar aramak yerine"}</Text>
      <Text style={{color: "white"}}>{"... more"}</Text>
      </View>
      <View style={{display: "flex", flexDirection: "row", paddingHorizontal: 13, paddingVertical: 4}}>
          
      <Text style={{fontSize: 12,color: "gray"}}>{"View all 5 comments"}</Text>
      </View>
      <View style={{display: "flex", flexDirection: "row", paddingHorizontal: 13, paddingVertical: 2}}>
          <View style={{display: "flex", flexDirection: "row-reverse"}}>
        
          <Image
        style={{
          alignSelf: "center",
          width: 25,
          height: 25,
          borderRadius: 32,
          backgroundColor: "rgba(0,0,0,0.3)",
          marginRight: -10,
          borderWidth: 2,
          borderColor:"black"
        }}
        source={{
          uri: "https://pbs.twimg.com/profile_images/1407682940881059844/xy_-4i_0_400x400.jpg",
        }}
      />
      
      </View>
      <Text style={{marginLeft: 18, fontSize: 13, paddingVertical:6, alignSelf: "center", color: "#ADADAD"}}>{"Add a comment..."}</Text>
      
      </View>
      <View style={{display: "flex", flexDirection: "row", paddingHorizontal: 13, paddingVertical: 4}}>
          
      <Text style={{fontSize: 11, marginRight: 16, color: "gray"}}>{tweetDate}</Text>
      </View>
          
        </View>
      </View>
      
    </Pressable>
  );
};

const Posts = () => {
  return (
    <View  style={{
      fontWeight: "600",
      fontSize: 19,
      backgroundColor: "black"
    }}>
      <Post
        user={{
          username: "esraxln_",
          imageUrl: "https://img.wattpad.com/04ad7d37f06664571ea6476267ec0fe74e0346da/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f64774f52477064625072726b35673d3d2d38362e313537376134323366373833383934343531323432303631373430342e6a7067?s=fit&w=720&h=720",
        }}
        tweetDate="1 hour ago"
        tweetText="Kodluyoruz React Native Bootcamp :)"
      />
      <Post
        user={{
          username: "esraxln_",
          imageUrl: "https://img.wattpad.com/04ad7d37f06664571ea6476267ec0fe74e0346da/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f64774f52477064625072726b35673d3d2d38362e313537376134323366373833383934343531323432303631373430342e6a7067?s=fit&w=720&h=720",
        }}
        tweetDate="1 hour ago"
        tweetText="Hello!! :p :)"
      />
      <Post
        user={{
          username: "esraxln_",
          imageUrl: "https://img.wattpad.com/04ad7d37f06664571ea6476267ec0fe74e0346da/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f64774f52477064625072726b35673d3d2d38362e313537376134323366373833383934343531323432303631373430342e6a7067?s=fit&w=720&h=720",
        }}
        tweetDate="1 hour ago"
        tweetText="Kodluyoruz React Native Bootcamp :)"
      />
      <Post
        user={{
          username: "esraxln_",
          imageUrl: "https://img.wattpad.com/04ad7d37f06664571ea6476267ec0fe74e0346da/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f64774f52477064625072726b35673d3d2d38362e313537376134323366373833383934343531323432303631373430342e6a7067?s=fit&w=720&h=720",
        }}
        tweetDate="1 hour ago"
        tweetText="Hello!! :p :)"
      />
      <View style={{height: 100}}></View>
    </View>
  );
};

export default Posts;
