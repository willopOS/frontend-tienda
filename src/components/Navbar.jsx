import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const linkStyle = ({ isActive }) => ({
        color: isActive ? '#38bdf8' : '#ffffff',
        textDecoration: 'none',
        fontWeight: isActive ? 'bold' : 'normal',
        marginRight: '1.5rem'
    });

    return (
        <nav style={{ background: '#0f172a', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h1 style={{ color: '#ffffff', fontSize: '1.25rem' }}>🛍️ Videojuegos Store</h1>
            <div>
                <NavLink to="/" style={linkStyle}>Inicio</NavLink>
                <NavLink to="/checkout" style={linkStyle}>Carrito / Checkout</NavLink>
            </div>
        </nav>
    );
}
