import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  return (
    <header className='header center'>
      <h3>
        <a href="www.catherine-siller.com" className='link'>
        CS.
        </a>
      </h3>
      <Navbar />
    </header>
  )
}

export default Header