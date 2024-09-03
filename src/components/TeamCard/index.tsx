import { Container, Icon, Title } from "./styles";

type Props = {
  title: string;
};

export const TeamCard = ({ title }: Props) => {
  return (
    <Container>
      <Icon name="groups" />
      <Title>{title}</Title>
    </Container>
  );
};
