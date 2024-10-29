import { Highlight } from "@components/Highlight";
import { Container, Content, HeaderContainer } from "./styles";
import { Header } from "@components/Header";
import { TeamCard } from "@components/TeamCard";
import { Button } from "@components/Button";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { useNavigation } from "@react-navigation/native";

export const Teams = () => {
  const [teams, setTeams] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewTeam() {
    navigation.navigate("newTeam");
  }

  return (
    <Container>
      <HeaderContainer>
        <Header />
        <Highlight title="Equipes" subtitle="Preparem suas equipes" />
      </HeaderContainer>
      <Content>
        <FlatList
          data={teams}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <TeamCard title={item} />}
          ListEmptyComponent={() => (
            <ListEmpty message="Comece criando uma equipe!" />
          )}
          contentContainerStyle={teams.length === 0 && { flex: 1 }}
        />
        <Button title="Criar uma nova equipe" onPress={handleNewTeam} />
      </Content>
    </Container>
  );
};
