import { Container } from "@mui/material";

const Header = () => {
  return (
    <Container maxWidth="md">
      <h1>Hello World</h1>
    </Container>
  );
};

function App() {
  return (
    <Container maxWidth="md">
      <Header />
    </Container>
  );
}

export default App;
