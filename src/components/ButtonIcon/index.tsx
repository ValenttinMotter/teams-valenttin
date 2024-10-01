import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

export const ButtonIcon = ({ type = "PRIMARY", ...rest }: Props) => {
  return (
    <Container type={type} {...rest}>
      <Icon name="add-circle-outline" />
    </Container>
  );
};
