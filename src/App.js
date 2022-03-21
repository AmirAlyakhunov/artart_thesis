import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Router/appRouter";
import Header from "./Pages/GeneralParts/Header/header";
import Footer from "./Pages/GeneralParts/Footer/footer";

function App() {
  return (
      <BrowserRouter>
          <Header/>
            <AppRouter/>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
