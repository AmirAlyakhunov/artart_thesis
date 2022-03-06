import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Router/appRouter";
import Header from "./Pages/GeneralParts/Header/header";

function App() {
  return (
      <BrowserRouter>
          <Header/>
            <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
