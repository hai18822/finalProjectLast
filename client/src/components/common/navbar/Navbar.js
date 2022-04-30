import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <section className="navbar">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/" className="navbar-item">Find Room</Link>
            <Link to="/" className="navbar-item">Find Roomate</Link>
            <Link to="/login" className="navbar-item">Login</Link>
            <Link to="/" className="navbar-item">Register</Link>
            
      
        </section>
    )
}

export default Navbar