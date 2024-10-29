import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Tab } from "@components/Tab";
import { Tag } from "@components/Tag";
import { MemberCard } from "@components/MemberCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import {
  Container,
  HeaderContainer,
  Content,
  InputContainer,
  Tabs,
} from "./styles";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
  team: string;
};

export function AddMembers() {
  const [tab, setTab] = useState("Titular");
  const [members, setMembers] = useState([]);

  const route = useRoute();
  const { team } = route.params as RouteParams;

  return (
    <Container>
      <HeaderContainer>
        <Header showBackButton />

        <Highlight title={team} subtitle="Adicione os titulares e reservas" />
      </HeaderContainer>

      <Content>
        <InputContainer>
          <Input
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            placeholder="Adicione um membro"
          />

          <ButtonIcon borderRadius="RIGHT" icon="add-circle-outline" />
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

          <Tag text={0} />
        </Tabs>

        <FlatList
          data={members}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <MemberCard name={item} onRemove={() => {}} />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Não há membros adicionados." />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100 },
            members.length === 0 && { flex: 1 },
          ]}
        />
        <Button title="Deletar equipe" type="SECONDARY" />
      </Content>
    </Container>
  );
}
