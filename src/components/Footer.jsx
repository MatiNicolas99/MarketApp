import styled from "styled-components";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Center = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;


const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 20px;
`;


export const Footer = () => {
  return (
    <Container>
      <Center>
        <Logo>SIGUENOS EN NUESTRAS REDES</Logo>
        <Desc>
          Dale me gusta, sube tu foto y etiquetanos o comenta.
          </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
               <FacebookOutlinedIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
                <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="3B5999">
                <TwitterIcon />
            </SocialIcon>
        </SocialContainer>
      </Center>
    </Container>
  );
};
