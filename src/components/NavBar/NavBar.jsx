import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            {/* <li><Link to="/profiles">Profiles</Link></li> */}
            {/* <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li> */}
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            {/* <li><Link to="/profiles">Profiles</Link></li> */}
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
