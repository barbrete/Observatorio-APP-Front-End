import { Colors } from "@/constants/Colors";
import { router, useRouter } from "expo-router";
import {TextInput, StyleSheet, Text, Touchable, TouchableOpacity, View, Image} from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function Index() {
  const router=useRouter();

  return (
    <View style={{
        display: 'flex',
        alignItems: 'center',
        paddingTop: 60,
        flex: 1,
        padding:25
    }}>
    <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        flex: 1,
    }}></View>
      <Image source = {require('./../../App/assets/images/iftm_logo.png')}
        style={{
          width:  80,
          height: 80
        }}
      />

      <Text>Bem vindo ao Observatório IFTM</Text>

      <TextInput placeholder='Email' style={styles.textInput}/>
      <TextInput placeholder='Senha' secureTextEntry={true} style={styles.textInput}/>

        <TouchableOpacity
        style={{
            padding: 15,
            //borderColor: Colors.GREY?
            width: '100%',
            marginTop: 25,
            borderRadius:10


        }}>
          <Text style={{
            fontFamily: 'bold',
            fontSize:15,
            textAlign: 'center'
          }}>Entrar</Text>
        </TouchableOpacity>

      <Image source = {require('./../../App/assets/images/estudantes-login.webp')}
        style={{
          width:  120,
          height: 120
        }}
      />


     </View>
   );
 }

const styles = StyleSheet.create({
  textInput: {
    borderWidth:1,
    borderRadius: 15,
    width: '70%',
    height: 40,
    margin: '3%',
    paddingLeft: 10
  }
})

// </TouchableOpacity style=(styles.button)
//   onPress=(() => router.push('/auth/signIn'))
// 