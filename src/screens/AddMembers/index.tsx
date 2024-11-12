import { useState } from "react";
import { Alert, FlatList } from "react-native";

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
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createMemberOnTeam } from "@storage/member/createMemberOnTeam";
import { AppError } from "@utils/AppError";

type RouteParams = {
  team: string;
};

export function AddMembers() {
  const [tab, setTab] = useState("Titular");
  const [members, setMembers] = useState([]);
  const [newMemberName, setNewMemberName] = useState("");

  const insets = useSafeAreaInsets();

  const route = useRoute();
  const { team } = route.params as RouteParams;

  async function handleAddMember() {
    if (newMemberName.trim().length === 0) {
      return Alert.alert(
        "Novo membro",
        "Informe o nome do membro para adicionar"
      );
    }

    const newMember = {
      name: newMemberName,
      team: team,
      type: tab,
    };

    try {
      await createMemberOnTeam(newMember, team);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo membro", error.message);
      } else {
        Alert.alert(
          "Novo membro",
          "Não foi possível adicionar um novo membro."
        );
      }
    }
  }

  return (
    <Container style={{ paddingBottom: insets.bottom }}>
      <HeaderContainer style={{ paddingTop: insets.top }}>
        <Header showBackButton />

        <Highlight title={team} subtitle="Adicione os titulares e reservas" />
      </HeaderContainer>

      <Content>
        <InputContainer>
          <Input
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            placeholder="Adicione um membro"
            value={newMemberName}
            onChangeText={setNewMemberName}
          />

          <ButtonIcon
            borderRadius="RIGHT"
            icon="add-circle-outline"
            onPress={handleAddMember}
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
