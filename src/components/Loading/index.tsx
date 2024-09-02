import { ActivityIndicator, View } from "react-native";
import { Container, LoadIndicator } from "./styles";

export const Loading = () => {
  return (
    <Container>
      <LoadIndicator />
    </Container>
  );
};
