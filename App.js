
import React, {useEffect, useState} from 'react';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Pagina = styled.View`
  flex: 1;
  margin-top: 20px;
`
const Cabecalho = styled.View`
  height: 60px;
  background-color: #1827AC;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
`
const Informacoes = styled.View`
  flex: 3;
`;
const Titulo = styled.Text`
  font-size: 20px;
`;
const AreaTitulo = styled.View`
  align-items: center;
`;
const AreaConteudo = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;
const Busca = styled.TextInput`
  color: #fff;
  font-size: 20px;
`
const Botao = styled.TouchableOpacity``;

const Iconebuscar = styled.Image`
  width: 30px;
  height: 30px;
`
const AreaAvatar = styled.View`
  align-items: center;
  justify-content: center;
  flex: 7;
`;

const Imagem = styled.Image`
  width: 80%;
  height: 80%;
  border-radius: 10px;
`;

const App = () => {

  const [username, alteraUsername] = useState('');
  const [user, alteraUser] = useState({});

  const buscarUser = async () =>{
    const requisicao = await fetch(`https://api.github.com/users/${username}`, );
    const perfil = await requisicao.json();
    console.log(perfil);
    alteraUser(perfil);
    await AsyncStorage.setItem('@img', perfil.avatar_url);
    alteraUsername('');
  }
  const getUsername = async () => {
    alteraUser({avatar_url: await AsyncStorage.getItem('@img')});
  };
  useEffect(() =>{
    getUsername();
  }, []
)

  return (
      <Pagina>
      <Cabecalho>
        <Busca
          placeholder="username...."
          value={username}
          placeholderTextColor="#ccc"
          onChangeText={(login) => alteraUsername(login)}
        />
      <Botao activeOpacity ={0.3} onPress={buscarUser}>
        <Iconebuscar source={require('./src/imagens/img01.png')}/>
      </Botao>
      </Cabecalho>
      <AreaAvatar>
        <Imagem source = {{uri:user.avatar_url}}/>
      </AreaAvatar>
      <Informacoes>
        <AreaTitulo>
          <Titulo>{user.login}</Titulo>
        </AreaTitulo>
        <AreaConteudo>
          <Text>Link: {user.html_url}</Text>
          <Text>Public_repos: {user.public_repos}</Text>
        </AreaConteudo>
      </Informacoes>
      </Pagina>
  );
}
export default App;