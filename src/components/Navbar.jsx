import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
    const { totalItems } = useCart();

    const linkStyle = ({ isActive }) => ({
        color: isActive ? '#38bdf8' : '#ffffff',
        textDecoration: 'none',
        fontWeight: isActive ? 'bold' : 'normal',
        marginLeft: '1.5rem',
    });

    return (
        <nav
            style={{
                background: '#0f172a',
                padding: '1rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'sticky',
                top: 0,
                zIndex: 10,
            }}
        >
            <NavLink
                to="/"
                style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                }}
            >
                🛍️ FakeStore
            </NavLink>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <NavLink to="/" style={linkStyle}>
                    Inicio
                </NavLink>
                <NavLink to="/checkout" style={linkStyle}>
                    Carrito {totalItems > 0 && `(${totalItems})`}
                </NavLink>
            </div>
        </nav>
    );
}
