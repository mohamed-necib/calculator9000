import React from "react";
import { useContext, useEffect } from "react";
import { CalcContext } from "../context/CalculatorContext";
import toast, { Toaster } from "react-hot-toast";

const Calculator = ({ children }) => {
 
  const { calc } = useContext(CalcContext);
  const notify = () =>
    toast("It's Over 9000 DUDE !", {
      duration: 5000,
      position: "top-left",
      style: {
        background: "#363636",
        color: "#fff",
      },
      icon: "🚀",
    });
  useEffect(() => {
    if (calc.result > 9000 ) {
      notify();
    }
  }, [calc.result]);

  return (
    <>
      <div className="wrapper">{children}</div>
      <Toaster />
    </>
  );
};

export default Calculator;
