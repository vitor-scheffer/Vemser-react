import cogumelo from '../img/cogumelo.jpg'

const Logo = ({titleLogo}) => {
  return(
    <>
      <img src={cogumelo} alt="" />
      <small>{titleLogo}</small>
    </>
  )
  
}

export default Logo