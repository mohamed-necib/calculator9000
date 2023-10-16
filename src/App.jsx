import BeautifulScreen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Calculator from "./components/Calculator";
import Title from "./components/Title";

const buttonValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];  

function App() {
  return (
    <div>
      <Calculator>
        <BeautifulScreen />
        <ButtonBox />
        <Title />
      </Calculator>
    </div>
  );
}

export default App;
