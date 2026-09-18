import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
        const [cart, setCart] = useState([]);

        const addToCart = (product) => {
            setCart((prevCart) => {
                const existingItem = prevCart.find((item) => item.id === product.id);
                if (existingItem) {
                    return prevCart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                }
                return [...prevCart, { ...product, quantity: 1 }];
            });
        };

        const removeFromCart = (productId) => {
            setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
        };

        const clearCart = () => setCart([]);

        // Optimización de cálculos derivados evitando recalcular en renders ajenos
        const totalItems = useMemo(() => {
            return cart.reduce((acc, item) => acc + item.quantity, 0);
        }, [cart]);

        const totalPrice = useMemo(() => {
            return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        }, [cart]);

        return (
            <CartContext.Provider
                value={{
                    cart,
                    addToCart,
                    removeFromCart,
                    clearCart,
                    totalItems,
                    totalPrice,
                }}
            >
                {children}
            </CartContext.Provider>
        );
    }

    // Hook personalizado para consumir el contexto de forma segura
    export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser utilizado dentro de un CartProvider');
    }
    return context;
}
