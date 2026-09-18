import { memo } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
        <article
            style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '0.75rem',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s',
            }}
        >
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: '120px', height: '120px', objectFit: 'contain' }}
                />
            </div>

            <div>
                <span
                    style={{
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        color: '#64748b',
                        letterSpacing: '0.05em',
                    }}
                >
                    {product.category}
                </span>
                <h3
                    style={{
                        fontSize: '1rem',
                        margin: '0.5rem 0',
                        color: '#0f172a',
                        lineHeight: '1.3',
                        height: '2.6em',
                        overflow: 'hidden',
                    }}
                >
                    {product.title}
                </h3>
                <p
                    style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: '#2563eb',
                        margin: '0.5rem 0 1rem 0',
                    }}
                >
                    ${product.price.toFixed(2)}
                </p>
            </div>

            <Link
                to={`/producto/${product.id}`}
                style={{
                    display: 'block',
                    textAlign: 'center',
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    padding: '0.6rem 1rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontWeight: '500',
                }}
            >
                Ver Detalle
            </Link>
        </article>
    );
}

export default memo(ProductCard);
