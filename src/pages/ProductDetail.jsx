import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useFetch } from '../hooks/useFetch';

export default function ProductDetail() {
    const { addToCart } = useCart();
    const { id } = useParams();
    const { data: product, loading, error } = useFetch(
        `https://fakestoreapi.com/products/${id}`
    );

    if (loading) {
        return (
        <main style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem', textAlign: 'center' }}>
            <p style={{ color: '#64748b' }}>Cargando información del producto...</p>
        </main>
        );
    }

    if (error || !product) {
        return (
            <main style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem', textAlign: 'center' }}>
                <p style={{ color: '#ef4444', marginBottom: '1rem' }}>
                    No fue posible cargar el producto.
                </p>
                <Link
                    to="/"
                    style={{
                        color: '#2563eb',
                        textDecoration: 'none',
                        fontWeight: '500',
                    }}
                >
                ← Volver al catálogo
                </Link>
            </main>
        );
    }

    return (
        <main style={{ maxWidth: '950px', margin: '2rem auto', padding: '0 1.5rem' }}>
            <Link
                to="/"
                style={{
                    display: 'inline-block',
                    marginBottom: '1.5rem',
                    color: '#475569',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                }}
            >
                ← Volver al catálogo
            </Link>

            <section
                style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '1rem',
                    border: '1px solid #e2e8f0',
                    padding: '2rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2.5rem',
                    alignItems: 'center',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                }}
            >
                <div style={{ textAlign: 'center' }}>
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{
                            maxHeight: '320px',
                            maxWidth: '100%',
                            objectFit: 'contain',
                        }}
                    />
                </div>

                <article>
                    <span
                        style={{
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            color: '#3b82f6',
                            letterSpacing: '0.05em',
                        }}
                    >
                        {product.category}
                    </span>

                    <h2
                        style={{
                            fontSize: '1.6rem',
                            color: '#0f172a',
                            margin: '0.5rem 0 1rem 0',
                            lineHeight: '1.3',
                        }}
                    >
                        {product.title}
                    </h2>

                    <p
                        style={{
                            fontSize: '0.95rem',
                            color: '#64748b',
                            lineHeight: '1.6',
                            marginBottom: '1.5rem',
                        }}
                    >
                        {product.description}
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            marginBottom: '1.5rem',
                        }}
                    >
                        <span
                        style={{
                            fontSize: '1.75rem',
                            fontWeight: '700',
                            color: '#0f172a',
                        }}
                        >
                            ${product.price.toFixed(2)}
                        </span>
                        {product.rating && (
                            <span
                                style={{
                                    fontSize: '0.85rem',
                                    backgroundColor: '#f1f5f9',
                                    padding: '0.25rem 0.6rem',
                                    borderRadius: '0.375rem',
                                    color: '#334155',
                                }}
                            >
                                ★ {product.rating.rate} ({product.rating.count} reseñas)
                            </span>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={() => addToCart(product)}
                        style={{
                            backgroundColor: '#2563eb',
                            color: '#ffffff',
                            border: 'none',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '0.5rem',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Añadir al Carrito
                    </button>
                </article>
            </section>
        </main>
    );
}
