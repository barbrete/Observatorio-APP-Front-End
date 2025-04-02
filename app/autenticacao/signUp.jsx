import { Colors } from "@/constants/Colors";
import { router, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import {TextInput, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View, Image, Pressable} from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { axios } from 'axios';

export default function signUp() {
  const router=useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numeroCelular, setNumeroCelular] = useState("");
  const [cpf, setCpf] = useState("");
  const [curriculoLattes, setCurriculoLattes] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = async() => {

    try{ 
      //envio dos dados para a API de cadastro
      const dadosCadastro = { nome, email, numeroCelular, cpf, curriculoLattes, dataNascimento, senha };

      //substitua a URL e método conforme sua API
      const response = await axios.post('https://seu-servidor.com/api/cadastro', dadosCadastro, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) 
      {
        alert('Cadastro realizado com sucesso!');
        router.push('/autenticacao/signIn');
      } 
      else 
      {
        alert('Erro ao cadastrar: ' + response.data.message);
      }
    }
    catch (error) 
    {
        alert('Erro ao enviar os dados: ' + error.message);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
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

        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/autenticacao/signIn')}>
          <Ionicons name="arrow-back" size={30} color="grey" />
        </TouchableOpacity>

      <Image source = {require('./../../../App/assets/images/iftm_logo.png')}
          style={{
            width:  60,
            height: 60,
            marginTop: 50
          }}
      />

      <Text style={styles.textTitulo}>Nova Conta</Text>

        <Text style = {styles.legenda}>Nome Completo</Text>
        <TextInput
          style={styles.textInput}
          value={nome}
          onChangeText={setNome}
        />

        <Text style = {styles.legenda}>Email</Text>
        <TextInput style={styles.textInput}/>

        <Text style = {styles.legenda}>Número do Celular</Text>
        <TextInput 
          style={styles.textInput}
          keyboardType="numeric"
          value={numeroCelular}
          onChangeText={(text) => setNumeroCelular(formatNumeroCelular(text))}
          maxLength={14}
        />

        <Text style = {styles.legenda}>CPF</Text>
        <TextInput 
          style={styles.textInput}
          keyboardType="numeric"
          value={cpf}
          onChangeText={(text) => setCpf(formatCPF(text))}
          maxLength={14}
        />

        <Text style = {styles.legenda} >Data de Nascimento</Text>
        <TextInput  placeholder='DD/MM/AAAA'
          style={styles.textInput}
          keyboardType="numeric"
          value={dataNascimento}
          onChangeText={(text) => setDataNascimento(formatDate(text))}
          maxLength={14}
        />
            

        <Text style = {styles.legenda}>Curriculo Lattes</Text>
        <TextInput
          style={styles.textInput}
          value={curriculoLattes}
          onChangeText={setCurriculoLattes}
        />

        <Text style = {styles.legenda}>Senha</Text>
        <TextInput 
          secureTextEntry={true} 
          style={styles.textInput}
          value={senha}
          onChangeText={setSenha}  
        />

        <Text style = {styles.legenda}>Confirmar senha</Text>
        <TextInput 
          secureTextEntry={true} 
          style={styles.textInput}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
      
          <Text style={styles.textoPadrao}>
            Ao se cadastrar, você concorda com os{' '} <br/>
            <Text style={styles.link}>Termos de Uso</Text> e a{' '}
            <Text style={styles.link}>Política de Privacidade</Text>.
          </Text>

    
        <TouchableOpacity style={styles.buttons} onPress={handleSubmit}>
                <Text style={styles.textButton}>Cadastrar</Text>
                <Pressable onPress={() => router.push('/autenticacao/signIn')}/>
        </TouchableOpacity>

        <Text style={styles.textoPadrao}>
          Ou cadastre-se com
        </Text>
        
        <Image source = {require('./../../../App/assets/images/virtualIF.png')}
          style={{
            width:  40,
            height: 40,
            marginTop: 10
          }}
        />

        <View style= {{
          display: 'flex',
          flexDirection: 'row', gap: 5,
          marginTop: 20,
          marginBottom: 50
        }}>
          <Text style={styles.textoPadrao}>Já tem uma conta?{' '}
            <Pressable onPress={() => router.push('/autenticacao/signIn')}>
              <Text style={styles.link}>Entrar</Text>
            </Pressable>
            </Text>
        </View>

     </View>
     </ScrollView>
   );
 }

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
  },
  legenda: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'left',        
    width: '70%',
  }, 
  textInput: {
    borderRadius: 15,
    width: '70%',
    height: 34,
    margin: '2%',
    marginBottom: '2%',
    paddingLeft: 10,
    backgroundColor: Colors.backgroundTextInput,
    fontSize: 11,
    fontWeight: 'bold',
  },
  buttons: {
    padding: 5,
    width: 100,
    borderRadius:15,
    backgroundColor: 'green',
    borderColor: 'green',
    margin:10
  },
  textButton: {
    fontSize:15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  backButton: {
    position: 'absolute',
    top: 20, 
    left: 20,
    padding: 10,
  },
    textTitulo:{
      fontSize:20,
      textAlign: 'center',
      fontWeight: 'bold',
      color: Colors.titulo,
      paddingTop: 30,
      paddingBottom: 30
    },
    textoPadrao: {
      fontSize: 10,
      textAlign: 'center',
    },
    link: {
      color: Colors.titulo 
    },
    ultimoInput:{
      marginBottom: '5%'
    }
})

const formatCPF = (text) => {
  return text
    .replace(/\D/g, '') // Remove tudo que não for número
    .replace(/(\d{3})(\d)/, '$1.$2') // Coloca o primeiro ponto
    .replace(/(\d{3})(\d)/, '$1.$2') // Coloca o segundo ponto
    .replace(/(\d{3})(\d{1,2})/, '$1-$2') // Coloca o traço
    .replace(/(-\d{2})\d+?$/, '$1'); // Limita os números
};

const formatNumeroCelular = (text) => {
  return text
    .replace(/\D/g, '') // Remove tudo que não for número
    .replace(/(\d{2})(\d)/, '($1)$2') // Coloca o primeiro ponto
    .replace(/(\d{5})(\d)/, '$1-$2') // Coloca o traço
    .replace(/(-\d{6})\d+?$/, '$1'); // Limita os números
};

const formatDate = (text) => {
  return text
    .replace(/\D/g, '') // Remove tudo que não for número
    .replace(/(\d{2})(\d)/, '$1/$2') // Coloca a primeira barra
    .replace(/(\d{2})(\d)/, '$1/$2') // Coloca a segunda barra
    .replace(/(\d{4})\d+?$/, '$1'); // Limita o ano a 4 dígitos
};