import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image, StatusBar, TouchableOpacity } from 'react-native';
import s from '../styles/main.style';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'A friendly meeting with Feliz',
      image:"https://images.unsplash.com/photo-1670272499232-d6c55af87386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZnJpZW5kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'A call with Dede',
      image:"https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Semester',
      image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbGxlZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'This Fall',
        image:"https://images.unsplash.com/photo-1505510023666-a29c05a258ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0dW1uJTIwbGVhZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
  ];
  
  const Item = ({title,image,fun}) => (
    <TouchableOpacity onPress={fun} style={styles.item}>
        <Image source={{
            uri:image
        }} style={s.cardimg} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );

const Header=()=>{
    return(
        <View style={[s.fl1,s.row,s.spacedBw]}>
            <View style={[s.fl2,s.mdtp20,s.pdlt10]}>
                <Text style={[s.f28,s.b]}>Merhaba Shuja</Text>
                <Text style={[s.f18,s.cl666]}>Beginner</Text>
            </View>
            <View style={[s.fl1,{alignItems:'flex-end'},s.mdtp20,s.pdlt10,s.pdrt10]}>
                    <Image source={{uri:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}} 
                    style={{
                        width:50,height:50,
                        borderRadius:25
                    }} />
            </View>
        </View>
    )
}

const Banner=()=>{
    return(
        <View style={[s.fl1,s.mdtp20,s.mdbt25,{alignItems:'center'}]}>
                <View style={
                    {backgroundColor:"#a3a3a3",borderRadius:14,height:80,width:'95%'}
                }></View>
        </View>
    )
}

export default function Home({navigation}) {

    const openTest=()=>{
        navigation.navigate("Dialogue")
    }

  return (
    <View style={[s.fl1,s.column,s.mdtp30]}>
        <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} image={item.image} fun={openTest} />}
        numColumns={2}
        ListHeaderComponent={()=>{
            return(
                <>
                    <Header />
                    <Banner />
                    <View style={[s.pdlt10,s.mdbt10]}>
                        <Text style={[s.f22]}>Dialogues</Text>
                        <Text style={s.cl666}>Beginner</Text>
                    </View>
                </>
            )
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#F2F2F2',
      width:'45%',
      marginVertical: 8,
      marginHorizontal:8,
      borderRadius:14,
      borderWidth:0.5,
      borderColor:"#808080"
    },
    title: {
      fontSize:18,
      marginTop:10,
      paddingHorizontal:10,
      marginBottom:10,
      textAlign:'center',
      fontWeight:'500'
    },
  });
  