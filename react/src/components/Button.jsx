
const Button = ({btnText,className}) => {
  return (
    <button className={`font-semibold font-poppins text-[24px] ${className}`}>{btnText}</button>
  )
}

export default Button
