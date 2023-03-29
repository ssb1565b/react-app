import "./App.css";
import ChangeObj from "./components/ChangeObj";
import ClassProps from "./components/ClassProps";
import CustomList from "./components/CustomList";
import CustomObj from "./components/CustomObj";
import ExMap from "./components/ExMap";
import List from "./components/List";
import MultiProps from "./components/MultiProps";
function App() {
  const pororoObjArr = [
    {
      name: "뽀로로",
      age: "5",
      nickName: "사고뭉치",
    },
    {
      name: "루피",
      age: "4",
      nickName: "공주님",
    },
    {
      name: "크롱이",
      age: "5",
      nickName: "장난꾸러기",
    },
  ];
  return (
    <div className="App">
      <ChangeObj objArr={pororoObjArr} />
    </div>
  );
}

export default App;
