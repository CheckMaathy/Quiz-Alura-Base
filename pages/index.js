import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'


//const BackgroundImage = styled.div`
//  background-image: url(${db.bg});
//  flex: 1;
//  background-size: cover;
//  background-position: center;
//
//`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;

  }
`;

export default function Home() {
  return (
  <QuizBackground backgroundImage={db.bg}>
    <QuizContainer>
      <Widget>
        <Widget.Header>
          <h1> Pokémon </h1>
        </Widget.Header>
          <Widget.Content>            

            <p>Loren ipson dolor sit amet...</p>
          </Widget.Content>
      </Widget>

      <Widget>
        <Widget.Header>
          <h1> Quizes da Galera </h1>
        </Widget.Header>
        <Widget.Content>

          <p>Loren ipson dolor sit amet...</p> 
        </Widget.Content>               
      </Widget>
      <Footer />
    </QuizContainer>
    <GitHubCorner projectUrl="https://github.com/CheckMaathy" />
  </QuizBackground>
  
  );
}

//export default function Home() {
//  return <Title> Um Teste aqui para ver como fica</Title>
//}