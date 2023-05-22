import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Status } from "./components/Status";

function App() {
  return (
    <div className="App">
      <Status status={"error"}></Status>
      <Heading> Placeholder text</Heading>
      <Oscar>
        <Heading> Oscar goes to Leonardo Dicaprio.</Heading>
      </Oscar>
      <Greet name="Timmy" messageCount={10} isLoggedIn={true}></Greet>
      <Button
        handleClick={( event, id) => {
          console.log("Button Clicked.", event,id);
        }}
      ></Button>
      <Input value='' handleChange = {(event) => console.log(event)}></Input>
      <Container styles={{ border: "1px solid black", padding: "1rem" }}></Container>
    </div>
  );
}

export default App;
