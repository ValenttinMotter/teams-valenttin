import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: #31c667;
  justify-content: center;
  align-items: center;
  height: 55px;
  max-width: 100%;
  border-radius: 8px;
`;

export const Text = styled.Text`
  color: #f2f2f2;
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
