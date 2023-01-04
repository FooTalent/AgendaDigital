import { BrowserRouter } from "react-router-dom";
import AgendaRoutes from "./routes/AgendaRoutes";

function App() {
  return (
    <BrowserRouter>
      <AgendaRoutes />
    </BrowserRouter>
  );
}

export default App;
