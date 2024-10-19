import { TouchableOpacityProps } from "react-native";
import {
  ButtonIconBorderRadiusStyleProps,
  ButtonIconSizeStyleProps,
  ButtonIconTypeStyleProps,
  Container,
  Icon,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
  size?: ButtonIconSizeStyleProps;
  borderRadius?: ButtonIconBorderRadiusStyleProps;
};

export const ButtonIcon = ({
  icon,
  type = "PRIMARY",
  size = "MD",
  borderRadius = "RIGHT",
  ...rest
}: Props) => {
  return (
    <Container type={type} size={size} borderRadius={borderRadius} {...rest}>
      <Icon name={icon} />
    </Container>
  );
};
