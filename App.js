
import React, {useState} from 'react';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components';

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
  width: 80px;
  height: 80px%;
  border-radius: 10px;
`;

const App = () => {

  const [nome, alteraNome] = useState('');
  const [usuario, alteraUsuario] = useState({});

  const buscarUsuario = async () =>{
    const requisicao = await fetch(`https://docs.github.com/rest/reference/users#get-a-user"= ${nome}`, );
    const resultado = await requisicao.json();
    console.log(resultado);
    alteraUsuario(resultado);
  }

  return (
      <Pagina>
      <Cabecalho>
        <Busca
          placeholder="Dig o username...."
          value={nome}
          placeholderTextColor="#ccc"
          onChangeText={(titulo) => alteraNome(titulo)}
        />
      <Botao activeOpacity ={0.3} onPress={buscarUsuario}>
        <Iconebuscar source={require('./src/imagens/img01.png')}/>
      </Botao>
      </Cabecalho>
      <AreaAvatar>
        <Imagem source = {{uri:usuario.avatar_url}}/>
      </AreaAvatar>
      <Informacoes>
        <AreaTitulo>
          <Titulo>{usuario.login}</Titulo>
        </AreaTitulo>
        <AreaConteudo>
          <Text>Link: {usuario.html_url}</Text>
          <Text>Repositorio: {usuario.repos_url}</Text>
          <Text>Qtd Repositorios público: {usuario.public_repos}</Text>
        </AreaConteudo>
      </Informacoes>
      </Pagina>
  );
}
export default App;