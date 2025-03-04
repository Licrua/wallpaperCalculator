import { useState } from "react";
import Container from "./components/general/Container";
import Greeting from "./components/greeting/Greeting";
import "./styles/globals.css";
import Form from "./components/form/Form";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  return (
    <>
      <Container>{isFormShown ? <Form /> : <Greeting onClick={() => setIsFormShown(true)} />}</Container>
    </>
  );
}

export default App;
