import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  height: 96px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 32px 24px;
  max-width: 100%;
  margin-bottom: 12px;
  border-radius: 6px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GRAY_500,
}))``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
