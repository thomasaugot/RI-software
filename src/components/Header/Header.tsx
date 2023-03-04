import './Header.scss'
import { Link } from "react-router-dom";
import { basicUserAvatar } from '../../assets/Icons';

function Header() {
  const avatar = localStorage.getItem("avatar");
  const id = localStorage.getItem("id");
  
  return (
    <div className='header-container'>
      <Link className="navbar-link" to={`/profile/${id}`}> 
      {
        avatar && avatar != 'null' ? <img className='img' src={avatar} alt="" /> : basicUserAvatar
      }
        
      </Link>
    </div>
  )
}

export default Header
