import { useState } from "react";
import Container from "./components/general/Container";
import Greeting from "./components/greeting/Greeting";
import "./styles/globals.css";
import Form from "./components/form/Form";
import { Toaster } from "react-hot-toast";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />
      <Container>
        {isFormShown ? <Form /> : <Greeting onClick={() => setIsFormShown(true)} />}
      </Container>
    </>
  );
}

export default App;
