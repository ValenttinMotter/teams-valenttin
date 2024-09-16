import { Highlight } from "@components/Highlight";
import { Container, Content, HeaderContainer } from "./styles";
import { Header } from "@components/Header";
import { TeamCard } from "@components/TeamCard";
import { Button } from "@components/Button";

export const Teams = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header />
        <Highlight title="Equipes" subtitle="Preparem suas equipes" />
      </HeaderContainer>
      <Content>
        <TeamCard title="Equipe 1" />
        <TeamCard title="Equipe 2" />
        <Button />
      </Content>
    </Container>
  );
};
