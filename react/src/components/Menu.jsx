
const menu = ({menuName,className}) => {
  return (
    <ul>
      <li className={`font-poppins font-semibold text-[24px] ${className}`}>{menuName}</li>
    </ul>
  )
}

export default menu
