import { useGlobalContext } from '../utils/context';
import { FaBars } from 'react-icons/fa';
import NavLinks from './NavLinks';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
