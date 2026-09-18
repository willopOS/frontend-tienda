import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
    const { cart, removeFromCart, clearCart, totalPrice, totalItems } = useCart();
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [customerName, setCustomerName] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        setCustomerName(data.fullName);
        setOrderPlaced(true);
        clearCart();
        reset();
    };

    if (orderPlaced) {
        return (
        <main style={{ maxWidth: '600px', margin: '3rem auto', padding: '2rem', textAlign: 'center', backgroundColor: '#fff', borderRadius: '8px' }}>
            <h2 style={{ color: '#16a34a' }}>🎉 ¡Pedido confirmado!</h2>
            <p>Gracias por tu compra, <strong>{customerName}</strong>.</p>
            <Link to="/" onClick={() => setOrderPlaced(false)} style={{ display: 'inline-block', marginTop: '1rem', color: '#2563eb' }}>
                Volver a la tienda
            </Link>
        </main>
        );
    }

    if (cart.length === 0) {
        return (
        <main style={{ maxWidth: '600px', margin: '3rem auto', padding: '2rem', textAlign: 'center' }}>
            <h2>Tu carrito está vacío 🛒</h2>
            <Link to="/" style={{ color: '#2563eb', display: 'inline-block', marginTop: '1rem' }}>
                Explorar productos
            </Link>
        </main>
        );
    }

    return (
        <main style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
            <h2>Finalizar Compra</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
                <section>
                    <h3>Resumen ({totalItems} productos)</h3>
                    {cart.map((item) => (
                        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0' }}>
                            <span>{item.title.substring(0, 20)}... (x{item.quantity})</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                            <button onClick={() => removeFromCart(item.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>✕</button>
                        </div>
                    ))}
                    <h4>Total: ${totalPrice.toFixed(2)}</h4>
                </section>

                <section>
                    <h3>Datos de Envío 📝</h3>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <input
                            placeholder="Nombre completo"
                            {...register('fullName', { required: 'El nombre es obligatorio' })}
                        />
                        {errors.fullName && <span style={{ color: 'red' }}>{errors.fullName.message}</span>}

                        <input
                            placeholder="Correo electrónico"
                            {...register('email', { required: 'El correo es obligatorio' })}
                        />
                        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}

                        <button type="submit" style={{ padding: '0.6rem', background: '#16a34a', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                            Pagar ${totalPrice.toFixed(2)}
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}
