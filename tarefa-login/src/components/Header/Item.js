import { Link } from "react-router-dom"

const Item = ({name, url}) => {
  return (
    <>
      <Link to={url}><li>{name}</li></Link>
    </>
  )
}
export default Item