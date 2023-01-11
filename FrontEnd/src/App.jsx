import { BrowserRouter } from "react-router-dom";
import Home from "../src/pages/home/Home";
import AgendaRoutes from "./routes/AgendaRoutes";

function App() {
  return (
    <BrowserRouter>
      <AgendaRoutes />
    </BrowserRouter>
  );
}

export default App;
