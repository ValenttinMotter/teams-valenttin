import styled from "styled-components/native";

export const Container = styled.TextInput`
  height: 54px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;
