import { Header } from "@components/Header";
import { Container, Content, HeaderContainer } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";

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
        <ButtonIcon icon={"add-circle-outline"} />
        <Button title="Deletar equipe" type="SECONDARY"></Button>
      </Content>
    </Container>
  );
};
