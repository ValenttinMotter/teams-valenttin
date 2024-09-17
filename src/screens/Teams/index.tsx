import { Highlight } from "@components/Highlight";
import { Container, Content, HeaderContainer } from "./styles";
import { Header } from "@components/Header";
import { TeamCard } from "@components/TeamCard";
import { Button } from "@components/Button";
import { useState } from "react";
import { FlatList } from "react-native";

export const Teams = () => {
  const [teams, setTeams] = useState<string[]>(["a", "b", "c"]);

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
        />
        <Button />
      </Content>
    </Container>
  );
};
