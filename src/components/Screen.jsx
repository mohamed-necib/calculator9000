import { useContext } from "react";
import { CalcContext } from "../context/CalculatorContext";
import { Textfit } from "react-textfit";



const Screen = () => {
  const {calc} = useContext(CalcContext);

  return (
    <Textfit className='screen' max={60} mode="single">{calc.num ? calc.num : calc.result}</Textfit>
  )
}

export default Screen