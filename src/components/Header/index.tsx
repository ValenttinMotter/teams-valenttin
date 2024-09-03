import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton = false }: Props) => {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon name="arrow-back-ios" />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
};
