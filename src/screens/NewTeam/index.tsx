import { Header } from "@components/Header";
import { Container, Content, HeaderContainer } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createTeam } from "@storage/team/createTeam";
import { Alert } from "react-native";
import { AppError } from "@utils/AppError";

export const NewTeam = () => {
  const [team, setTeam] = useState("");

  const insets = useSafeAreaInsets();

  const navigation = useNavigation();

  async function handleAddTeam() {
    try {
      if (team.trim().length == 0) {
        return Alert.alert("Nova Equipe", "Informe o nome da equipe.");
      }

      await createTeam(team);
      navigation.navigate("addMembers", { team });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova equipe", error.message);
      } else {
        Alert.alert("Nova equipe", "Não foi possível criar uma nova equipe");
      }
    }
  }

  return (
    <Container style={{ paddingBottom: insets.bottom }}>
      <HeaderContainer style={{ paddingTop: insets.top }}>
        <Header showBackButton />
        <Highlight
          title="Nova Equipe"
          subtitle="Crie uma equipe e adicione membros"
        />
      </HeaderContainer>
      <Content>
        <Input placeholder={"Nome da equipe"} onChangeText={setTeam} />
        <Button title="Criar equipe" onPress={handleAddTeam}></Button>
      </Content>
    </Container>
  );
};
