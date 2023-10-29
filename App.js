import { Text, View } from "react-native";
import styled from "styled-components";
import SvgComponent from "./components/svg/svgPattern.jsx";
import SvgButton from "./components/svg/svgButton.jsx";
import { useEffect, useState } from "react";
import adviceApi from "./api/base.api.js";


export default function App() {
 
  const Container = styled.SafeAreaView`
    background-color: #202632;
    height: 100%;
    align-items: center;
    justify-content: center;
  `;

  const Card = styled.View`
    width: 85%;
    height: 50%;
    background-color: #313a49;
    border-radius: 14px;
    justify-content: space-around;
    align-items: center;
  `;

  const Phrase = styled.Text`
    color: #cfe4e9;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin: 10px;
    padding-bottom: 15px;
    ${(props) =>
      props.Green &&
      `
        color: #4feba0;
        font-size: 15px;
        padding-top: 15px;
        padding-bottom: 0px;
        width: 50%;
      `}
  `;

  const Boton = styled.TouchableOpacity`
    background-color: #53ffab;
    display: flex;
    bottom: -35px;
    border-radius: 50px;
  `;
  const BotonContainer = styled.View`
    height: 60px;
    width: 60px;
    justify-content: center;
    align-items: center;
  `;

  const [adviceData, setAdviceData] = useState({id:"", advice: ""});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRandomAdvice();   
  }, []);

  const fetchRandomAdvice = async () => {
    setLoading(true);
    try{
      const response = await adviceApi.get("advice");
      const data = response.data.slip;
      setAdviceData(data)
    }catch(error){
      console.error("error", error)
    }finally{
      setLoading(false);
    }
  };

  const handleAdviceChange = () =>{
    if(!loading){
      fetchRandomAdvice();
    }
  };

  return (
    <Container>
      <Card>
        <Phrase Green>ADVICE #{adviceData.id}</Phrase>
       {loading ? (
          <Phrase Green>Loading...</Phrase>
        ) : (
          <Phrase>
          {adviceData.advice}
          </Phrase>
        )
        }
        
        <SvgComponent width={295} height={16} fill="#cfe4e9" />
        <Boton onPress={handleAdviceChange}>
          <BotonContainer>
            <SvgButton width={25} height={25} />
          </BotonContainer>
        </Boton>
      </Card>
    </Container>
  );
}
