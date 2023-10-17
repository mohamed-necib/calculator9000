import { useContext } from "react";

export const CalcContext = useContext();
const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    result: 0,
  });

  const providerValue = {
    calc,
    setCalc,
  };
  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
