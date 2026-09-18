import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
    const { totalItems } = useCart();

    const linkStyle = ({ isActive }) => ({
        color: isActive ? '#38bdf8' : '#ffffff',
        textDecoration: 'none',
        fontWeight: isActive ? 'bold' : 'normal',
        fontSize: '0.95rem',
    });

    return (
        <nav
            style={{
                background: '#0f172a',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem',
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

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
