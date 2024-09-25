
const container = ({children,className}) => {
  return (
    <div className={`max-w-mainContainer m-auto ${className}`}>{children}</div>
  )
}

export default container
