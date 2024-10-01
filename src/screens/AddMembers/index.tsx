import { Header } from "@components/Header";
import { Container, Content, HeaderContainer } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export const AddMembers = () => {
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
        <Input placeholder={"Adicione um membro"} />
        <Button title="Deletar equipe" type="SECONDARY"></Button>
      </Content>
    </Container>
  );
};
