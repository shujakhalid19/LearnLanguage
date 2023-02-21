import React, { useRef } from "react";
import {View,Dimensions,Text, ScrollView, TouchableOpacity} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import s from '../styles/main.style';
const {width,height}=Dimensions.get('window');
const CONVERSATION=[
            "A. Hello FIliz.",
            "B. Hey John, How are you ?",
            "A. Im good, How about you Filiz ?",
            "B. Im good as well, just moving apartments today.",
            "A. Oh! where are you moving to?",
            "B. Im moving to a new apartment near the city center.",
            "A. Is everything okay ? why are you moving out from your old apartment.",
            "B. Yeah everything is alright mate, thanks for asking, the old place was not spacious.",
            "A. Ah okay I wish good luck brother, see you soon.",
            "B. See you soon brother.",
]

const Dialogue=({navigation})=>{
    const refRBSheet = useRef();

    return(
        <View style={[s.fl1,s.column,s.mdtp20]}>
            <View style={[{backgroundColor:'#F5F5F5',width:'100%',height:80},s.jCenter]}>
                <Text style={[s.textCenter,s.f22,s.b]}>A call with Dede</Text>
            </View>
            <ScrollView>
                <View style={[s.fl1,s.mdtp20,s.jCenter,{alignItems:'center'}]}>
                    <View style={{backgroundColor:'#F5F5F5',width:'95%',padding:10,borderRadius:14}}>
                            {
                                CONVERSATION.map((data,i)=>{
                                    return(
                                        <TouchableOpacity key={i} onPress={()=>refRBSheet.current.open()}>
                                            <Text style={{fontSize:18,marginBottom:15}}>
                                                {data}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                    </View>
                </View>
                <View style={[s.fl1,s.jCenter,{alignItems:'center',marginTop:50}]}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('Assessment');
                        //console.log("OK")
                    }}  style={{width:'93%',height:60,justifyContent:'center',paddingLeft:10,backgroundColor:'#6d00c1',borderRadius:14}}>
                        <Text style={[s.f18,s.b,s.cllight]}>Did you understand the text ?</Text>
                        <Text style={[s.f16,s.cllight]}>Test your progress</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={[s.fl1,s.mdtp20,s.jCenter,s.pdlt20]}>
                    <View style={s.mdbt25}>
                        <View>
                            <Text style={[s.f22,s.b]}>1. What was Filiz doing ?</Text>
                        </View>
                        <View style={s.mdtp10}>
                                <Text style={[s.f18,s.mdtp10]}>A. Meeting new friends.</Text>
                                <Text style={[s.f18,s.mdtp10]}>B. Having Dinner.</Text>
                                <Text style={[s.f18,s.mdtp10]}>C. Going to the Park.</Text>
                                <Text style={[s.f18,s.mdtp10]}>D. Moving Apartment..</Text>
                        </View>
                    </View>

                    <View style={s.mdbt25}>
                        <View>
                            <Text style={[s.f22,s.b]}>2. Where was Filiz's new apartment ?</Text>
                        </View>
                        <View style={s.mdtp10}>
                                <Text style={[s.f18,s.mdtp10]}>A. New York.</Text>
                                <Text style={[s.f18,s.mdtp10]}>B. Next to cafe.</Text>
                                <Text style={[s.f18,s.mdtp10]}>C. Near the Park.</Text>
                                <Text style={[s.f18,s.mdtp10]}>D. Near to city center.</Text>
                        </View>
                    </View>
                </View> */}
            </ScrollView>
            <RBSheet
          ref={refRBSheet}
          height={400}
          openDuration={250}
          customStyles={{
            wrapper: {
              backgroundColor: "#00000034"
            },
            draggableIcon: {
              backgroundColor: "#000"
            }
          }}
        >
            <View style={[s.pdlt10,s.pdrt10,s.mdtp10]}>
                <Text style={[s.f22,s.b,s.pdbt10,{borderBottomWidth:1,borderColor:"#a3a3a3"}]}>Translation</Text>
                <View style={s.mdtp30}>
                    <Text style={[s.f22,s.pdbt20,{fontStyle:'normal',lineHeight:32}]}>"Evet, her şey yolunda, sorduğun için teşekkürler, eski yer yeterince geniş değildi."</Text>
                    <Text style={[s.f22,s.pdbt20,s.pdtp20,s.clBl]}>English</Text>
                    <Text style={[s.f22,{fontStyle:'normal',lineHeight:32}]}>"Yeah everything is alright thanks for asking , the old place was just not spacious enough"</Text>
                </View>
            </View>
        </RBSheet>
        </View>
    )
}
export default Dialogue;