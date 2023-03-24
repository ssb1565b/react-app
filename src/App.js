import "./App.css";
import MainHeader from "./components/MainHeader";
import ImgComponent from "./components/ImgComponent";
import BtnComponent from "./components/Btn";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
function App() {
  return (
    <div className="App">
      <MainHeader />
      <ImgComponent />
      <BtnComponent />
      {/* <ClassComponent />
      <FunctionalComponent /> */}
    </div>
  );
}

export default App;
