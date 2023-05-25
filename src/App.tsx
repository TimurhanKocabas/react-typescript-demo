import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import "./App.css";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
