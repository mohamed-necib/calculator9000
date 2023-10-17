const getStyle = (btn) => {

  const className = {
    "=": "equal",
    "+": "operator",
    "-": "operator",
    x: "operator",
    "/": "operator",
  };
  return className[btn.value];
};

const Button = ({ value }) => {
  const handlebtnClick = () => {
    
    const results = {
      ".": commaClick,
    } 
    return results[value];
    };
  return (
    <button onClick={handlebtnClick} className={`${getStyle({ value })} button`}>
      {value}
    </button>
  );
};

export default Button;
