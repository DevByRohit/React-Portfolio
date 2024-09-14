import HomePage from "./Components/HomePage";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <>
      <MantineProvider>
        <HomePage></HomePage>
      </MantineProvider>
    </>
  );
}

export default App;
