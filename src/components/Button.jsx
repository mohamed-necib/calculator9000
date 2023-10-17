
const getStyle = btn => {
  const className = {
    "=": "equal",
    "+": "operator",
    "-": "operator",
    "x": "operator",
    "/": "operator",
  }
  return className[btn.value]
}

const Button = ({ value }) => {
  return <button className={`${getStyle({value})} button`}>{value}</button>;
};

export default Button;
