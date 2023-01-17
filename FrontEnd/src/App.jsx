import { BrowserRouter } from "react-router-dom";
import Home from "../src/pages/home/Home";
import { GlobalContextProvider } from "./Context/GlobalContext";
import AgendaRoutes from "./routes/AgendaRoutes";

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <AgendaRoutes />
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
