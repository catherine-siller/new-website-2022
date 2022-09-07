const Navbar = () => {
  return (
    <nav className='center nav'>
      <ul
      >
        <li className='nav__list-item'>
        <a
          href='#projects'
        >
            Projects
        </a>
        </li>

        <li className='nav__list-item'>
          <a
            href='#skills'
          >
            Skills
          </a>
        </li>

          <li className='nav__list-item'>
            <a
              href='#contact'
            >
              Contact
            </a>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar