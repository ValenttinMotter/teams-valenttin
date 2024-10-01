import { Header } from "@components/Header";
import { Container, Content, HeaderContainer } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export const NewTeam = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header showBackButton />
        <Highlight
          title="Nova Equipe"
          subtitle="Crie uma equipe e adicione membros"
        />
      </HeaderContainer>
      <Content>
        <Input placeholder={"Nome da equipe"} />
        <Button title="Criar equipe"></Button>
      </Content>
    </Container>
  );
};
