import { TouchableOpacityProps } from "react-native";
import { Container, Text } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type: "PRIMARY" | "SECONDARY";
};

export const Button = ({ title, type, ...rest }: Props) => {
  return (
    <Container type="PRIMARY" {...rest}>
      <Text>{title}</Text>
    </Container>
  );
};
