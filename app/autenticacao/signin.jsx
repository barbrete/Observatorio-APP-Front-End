import { Colors } from "@/constants/Colors";
import { router, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import {TextInput, StyleSheet, Text, Touchable, TouchableOpacity, View, Image, Pressable} from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

export default function signIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      const dadosCadastro = { email, senha };

      const response = await axios.post('http://localhost:5000/api/login',  dadosCadastro , {
        headers: {
          'Content-Type': 'application/json',
        }, 
      });

      if (response.data.success) {
        await AsyncStorage.setItem('token', response.data.token); // Salva o token localmente
        alert("Login realizado com sucesso!");
        router.push('/home'); // Redireciona para a tela principal
      } else {
        alert("Erro: " + response.data.message);
      }
    } catch (error) {
      alert("Erro ao fazer login: " + error.response?.data?.message || error.message);
      if (!error.response) {
        alert("Erro de conexão: Verifique se o servidor está acessível.");
      } else {
        alert("Erro ao fazer login: " + error.response.data.message);
      }
    }
    
  };

  return (
    <View style={{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
    }}>
      <View style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 0,
          flex: 1,
      }}></View>

        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
          <Ionicons name="arrow-back" size={30} color="grey" />
        </TouchableOpacity>
        

        <Image source = {require('./../../../App/assets/images/iftm_logo.png')}
          style={{
            width:  60,
            height: 60,
            marginTop: 50
          }}
        />

        <Text style={styles.textTitulo}>Bem vindo ao Observatório</Text>

        <TextInput 
          placeholder='Email' 
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}  
        />

        <TextInput 
          placeholder='Senha' 
          secureTextEntry={true} 
          style={styles.textInput}
          value={senha} 
          onChangeText={setSenha}
        />

          <TouchableOpacity onPress={handleLogin}
          style={{
              padding: 5,
              //borderColor: Colors.GREY?
              width: '30%',
              marginTop: '10%',
              borderRadius:15,
              borderColor: 'grey',
              borderWidth:1,
              marginBottom: '20%',
          }}>
            <Text style={{
              fontSize:15,
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'light'
            }}>Entrar</Text>
          </TouchableOpacity>

        <View style= {{
          display: 'flex',
          flexDirection: 'row', gap: 5,
          marginTop: 20,
          marginBottom: 50
        }}>

          <Text>Não tem uma conta?</Text>
          <Pressable onPress={() => router.push('/autenticacao/SignUpSimplificado')}>
            <Text style={{
              color: 'green',
            }}>Criar Conta</Text>

          </Pressable>
          
        </View>          

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
    color: 'light'
  },
  textTitulo:{
    fontSize:20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.titulo,
    marginLeft: '8%',
    paddingTop: 30,
    paddingBottom: 50
  }, 
  backButton: {
    position: 'absolute',
    top: 20, 
    left: 20,
    padding: 10,
  }
})