import CalcProvider from "./context/CalculatorContext";
import Screen from "./components/Screen";
import Calculator from "./components/Calculator";
import Title from "./components/Title";
import ButtonContainer from "./components/ButtonContainer";
import Button from "./components/Button";

const buttonValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <CalcProvider>
      <Calculator>
        <Title />
        <Screen />
        <ButtonContainer>
          {buttonValues.flat().map((btn, i) => (
            <Button value={btn} key={i} />
          ))}
        </ButtonContainer>
      </Calculator>
    </CalcProvider>
  );
}

export default App;
