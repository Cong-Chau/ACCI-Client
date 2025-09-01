import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import TitleManager from "./routes/TitleManager";
function App() {
  return (
    <BrowserRouter>
      <TitleManager />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
