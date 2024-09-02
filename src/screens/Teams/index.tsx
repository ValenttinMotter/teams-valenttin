import { Image, Text, View } from "react-native";
import Logo from "@assets/logo.png";
import { Container, Title } from "./styles";

export const Teams = () => {
  return (
    <Container>
      <Image source={Logo} />
      <Title>Equipes</Title>
    </Container>
  );
};
