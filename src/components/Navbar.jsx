import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/courses">Course Catalog</Link>
    <Link to="/dashboard">Dashboard</Link>
  </nav>
);

export default Navbar;
