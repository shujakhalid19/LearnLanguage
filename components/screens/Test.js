import React,{useState} from "react";
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import s from '../styles/main.style';

const QNA=[
    {
        q:"What was Filiz doing ?",
        options:[
            "Meeting new friends",
            "Having Dinner",
            "Going to the Park",
            "Moving Apartment"
        ],
        correct:3
    },
    {
        q:"Where was Filiz's new apartment ?",
        options:[
            "New York",
            "Next to cafe",
            "Near the Park",
            "Near to city center"
        ],
        correct:3
    }
    
]
const ANSWERS=[3,3];

const Test = () =>{
    const [selected,setselected]=useState([]);
    const [showAnswers,setshowAnswers]=useState(false);
    const [ip,setip]=useState(false);

    const selectAnswer=(val,i,section)=>{
        setip(!ip);
        var a={answer:i,section};
        var s=selected;
        s[section]=i;
        setselected(s);
       
        //s.push(a);
        //var x=s.map((data,i)=>{return data.section}).indexOf(section);
        //if(x==-1){
          //  s.push(a);
        //}else{
            //s[x].section=section;
        //}
        
        //setselected(s);
        
        //console.log(selected);
    }

    return(
        <View style={[s.fl1,s.column,s.mdtp20]}>
            <View style={[{backgroundColor:'#F5F5F5',width:'100%',height:80},s.jCenter]}>
                <Text style={[s.textCenter,s.f22,s.b]}>A call with Dede</Text>
            </View>
            <ScrollView>
                <View style={[s.fl1,s.mdtp20,s.jCenter,s.pdlt20]}>
                    {QNA.map((data,x)=>{
                        return(
                            <View key={x} style={s.mdbt35}>
                                <View>
                                    <Text style={[s.f22,s.b]}>{data.q}</Text>
                                    <Text>
                                        {JSON.stringify(selected)}
                                    </Text>
                                </View>
                                <View style={s.mdtp10}>
                                    
                                    {
                                         data.options.map((val,i)=>{
                                            
                                            return(
                                                <TouchableOpacity key={i} onPress={()=>{
                                                    selectAnswer(val,i,x)
                                                }} style={{
                                                    flexDirection:'row'
                                                }}>
                                                    <Text key={ip} style={[s.f18,s.mdtp10,s.pdrt20]}>
                                                        {
                                                                selected.length!=0 && 
                                                                    selected[x]==i ?
                                                                        <Ionicons name={"radio-button-on-sharp"} color={showAnswers && ANSWERS[x]===i ? 'green' : "black"} size={22}/>
                                                                    : showAnswers ? 
                                                                            ANSWERS[x]===i ? <Ionicons name={"radio-button-on-sharp"} color="green" size={22}/> 
                                                                                :
                                                                            <Ionicons name={"radio-button-off-sharp"} color="black" size={22}/> 
                                                                :
                                                                <Ionicons name={"radio-button-off-sharp"} size={22}/>
                                                        }
                                                    </Text>
                                                    <Text style={[s.f18,s.mdtp10]}>{val}</Text>
                                                </TouchableOpacity>
                                            )
                                         }) 
                                        
                                    }
                                </View>
                            </View>
                        )
                    })

                    }
                </View>
            </ScrollView>
            <View style={[s.fl1,s.jCenter,{alignItems:'center',marginTop:50}]}>
                    <TouchableOpacity onPress={()=>{
                        setshowAnswers(true)
                        console.log("OK")
                    }}  style={{width:'93%',height:60,justifyContent:'center',paddingLeft:10,backgroundColor:'#6d00c1',borderRadius:14}}>
                        <Text style={[s.f18,s.b,s.cllight]}>Check Answers</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default Test;