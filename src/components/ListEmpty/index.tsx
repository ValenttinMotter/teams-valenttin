import { Text, View } from "react-native";
import { Container, Message } from "./styles";

type Props = {
  message: string;
};

export const ListEmpty = ({ message }: Props) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};
