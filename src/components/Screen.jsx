import { useContext } from "react";
import { CalcContext } from "../context/CalculatorContext";


const Screen = () => {
  const {calc} = useContext(CalcContext);
  return (
    <div className='screen'>012345</div>
  )
}

export default Screen