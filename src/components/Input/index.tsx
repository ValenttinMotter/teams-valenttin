import { TextInputAndroidProps } from "react-native";
import { Container } from "./styles";

type Props = TextInputAndroidProps & {
  placeholder: string;
};

export const Input = ({ placeholder, ...rest }: Props) => {
  return <Container placeholder={placeholder} {...rest}></Container>;
};
