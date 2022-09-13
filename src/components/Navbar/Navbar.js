import { useContext, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav>
      <ul className='nav-list'>
        <li className='nav-item'>
          <a
            href='#projects'
          >
            Projects
          </a>
        </li>

        <li className='nav-item'>
          <a
            href='#skills'
            onClick={toggleNavList}
          >
            Skills
          </a>
        </li>

        <li className='nav-item'>
          <a
            href='#contact'
            onClick={toggleNavList}
          >
            Contact
          </a>
        </li>

        <button
          type='button'
          aria-label='toggle theme'
        >
          {/*themeName === 'dark' ? <SunIcon /> : <DarknessIcon />*/}
        </button>
      </ul>
    </nav>
  )
}

export default Navbar