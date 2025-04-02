import { Colors } from "@/constants/Colors";
import { router, useRouter } from "expo-router";
import {TextInput, StyleSheet, Text, Touchable, TouchableOpacity, View, Image, Pressable} from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
// 336 x 568 
export default function Index() {
  const router = useRouter();

  return (
    <View style={{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
    }}>
        <Image source = {require('./../../App/assets/images/iftm_logo.png')}
          style={{
            width:  60,
            height: 60,
            marginTop: 50
          }}
        />

        <Text style={styles.textTitulo}>Bem vindo ao Observatório</Text>

        <TouchableOpacity style={styles.buttonOpacity}>
          <Pressable onPress={() => router.push('/autenticacao/signIn')}>
              <Text style={styles.textButton}>Entrar</Text>
          </Pressable>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonOpacity}>
          <Pressable onPress={() => router.push('/autenticacao/signUp')}>
            <Text style={styles.textButton}>Cadastrar</Text>
          </Pressable>
        </TouchableOpacity>


        <Image source = {require('./../../App/assets/images/estudantes-login.webp')}
          style={{
            position: 'absolute',
            bottom: 10,
          }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth:1,
    borderRadius: 15,
    width: '70%',
    height: 40,
    margin: '3%',
    paddingLeft: 10,
  },
  buttonOpacity: {
    padding: 5,
    width: '30%',
    borderRadius:15,
    borderColor: 'grey',
    borderWidth:1,
    marginBottom: '10%',
},
  textButton: {
    fontSize:15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.fonte
  },
  textTitulo:{
    fontSize:20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.titulo,
    paddingTop: 30,
    paddingBottom: 30
  }
})