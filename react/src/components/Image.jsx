
const image = ({imgSrc,imgAlt,className}) => {
  return (
    <img className={`${className}`} src={imgSrc} alt={imgAlt} />
  )
}

export default image
