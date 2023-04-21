import "./App.css";
import { SideBar } from "./components/SideBar/SideBar";
import { Main } from "./components/Main/Main";
import { ContactForm } from "./components/ContactForm/ContactForm";


const App = () => {
  return (
    <div className="App">
      <SideBar />
      <Main />
      {/* <ContactForm/> */}
    </div>
  );
};

export default App;
