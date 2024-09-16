import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export const TeamCard = ({ title, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Icon name="groups" />
      <Title>{title}</Title>
    </Container>
  );
};
