import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useFetch } from '../hooks/useFetch';

export default function Home() {
    const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');
    const [searchTerm, setSearchTerm] = useState('');

    if (loading) {
        return <p style={{ padding: '2rem', textAlign: 'center' }}>Cargando catálogo...</p>;
    }

    if (error) {
        return <p style={{ padding: '2rem', color: '#ef4444', textAlign: 'center' }}>Error: {error}</p>;
    }

    const filteredProducts = products?.filter((prod) =>
        prod.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
            <header style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2 style={{ fontSize: '1.75rem', color: '#0f172a' }}>Catálogo de Productos</h2>
                    <p style={{ color: '#64748b' }}>Explora los artículos disponibles en la tienda</p>
                </div>

                <input
                    type="text"
                    placeholder="Buscar producto..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: '0.6rem 1rem',
                        border: '1px solid #cbd5e1',
                        borderRadius: '0.5rem',
                        width: '280px',
                        fontSize: '0.95rem',
                    }}
                />
            </header>

            <section
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                    gap: '1.5rem',
                }}
            >
                {filteredProducts && filteredProducts.length > 0 ? (
                    filteredProducts.map((prod) => (
                        <ProductCard key={prod.id} product={prod} />
                    ))
                ) : (
                    <p style={{ color: '#64748b' }}>No se encontraron productos coincidentes.</p>
                )}
            </section>
        </main>
    );
}
