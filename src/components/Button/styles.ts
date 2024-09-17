import { TouchableOpacity } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

type Props = {
  type: "PRIMARY" | "SECONDARY";
};

export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, type }) =>
    type == "PRIMARY" ? theme.COLORS.GREEN_500 : theme.COLORS.RED};
  justify-content: center;
  align-items: center;
  min-height: 55px;
  max-height: 55px;
  border-radius: 8px;
  padding: 18px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;
