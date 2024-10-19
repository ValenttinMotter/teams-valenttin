import { Header } from "@components/Header";
import {
  Container,
  Content,
  HeaderContainer,
  InputContainer,
  Tabs,
} from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Tab } from "@components/Tab";
import { useState } from "react";
import { FlatList } from "react-native";

export const AddMembers = () => {
  const [tab, setTab] = useState("Titular");

  return (
    <Container>
      <HeaderContainer>
        <Header showBackButton />
        <Highlight
          title="Equipe 1"
          subtitle="Adicione os titulares e reservas"
        />
      </HeaderContainer>
      <Content>
        <InputContainer>
          <Input
            style={{
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderRightWidth: 0,
            }}
            placeholder={"Adicione um membro"}
          />
          <ButtonIcon
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            icon={"add-circle-outline"}
          />
        </InputContainer>
        <Tabs>
          <FlatList
            data={["Titular", "Reserva"]}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Tab
                title={item}
                isActive={item === tab}
                onPress={() => setTab(item)}
              />
            )}
            horizontal
          />
        </Tabs>
        <Button title="Deletar equipe" type="SECONDARY"></Button>
      </Content>
    </Container>
  );
};
