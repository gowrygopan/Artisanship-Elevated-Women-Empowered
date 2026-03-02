'use client'
import Link from 'next/link'
import { ArrowLeft, Trash2, CreditCard, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Cart() {
    const { cart, removeFromCart, cartTotal } = useCart()

    if (cart.length === 0) {
        return (
            <div style={{ padding: '100px 5%', textAlign: 'center', minHeight: '60vh' }}>
                <ShoppingBag size={64} style={{ margin: '0 auto 20px', opacity: 0.2 }} />
                <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Your cart is empty</h1>
                <p style={{ color: '#4b5563', marginBottom: '40px' }}>Discover our premium rural collections to fill it up.</p>
                <Link href="/" style={{
                    padding: '15px 40px',
                    background: '#022c22',
                    color: 'white',
                    borderRadius: '30px',
                    fontWeight: 700,
                    display: 'inline-block'
                }}>
                    Start Shopping
                </Link>
            </div>
        )
    }

    return (
        <div style={{ padding: '60px 10%', minHeight: '80vh' }}>
            <Link href="/" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#4b5563',
                marginBottom: '40px',
                fontWeight: 600
            }}>
                <ArrowLeft size={18} /> Continue Shopping
            </Link>

            <header style={{ marginBottom: '60px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                    <ShoppingBag className="text-gold" size={32} />
                    <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.8rem', color: '#4b5563' }}>Your Selection</span>
                </div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Your Shopping Bag</h1>
                <p style={{ color: '#4b5563' }}>Review your selection of rural excellence before checkout.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '60px' }}>
                <div>
                    {cart.map((item, i) => (
                        <div key={i} className="glass-card" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '30px',
                            padding: '25px',
                            marginBottom: '20px'
                        }}>
                            <img src={item.image} style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '16px' }} />
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '5px' }}>{item.title}</h3>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <p style={{ color: '#4b5563', fontSize: '0.9rem' }}>Qty: {item.qty}</p>
                                    {item.size && (
                                        <p style={{ color: '#022c22', fontSize: '0.9rem', fontWeight: 600 }}>
                                            Size: <span style={{ color: '#fbbf24' }}>{item.size}</span>
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '12px', color: '#022c22' }}>₹{(parseFloat(item.price.replace(/,/g, '')) * item.qty).toLocaleString()}</div>
                                <button
                                    onClick={() => removeFromCart(item.title, item.size)}
                                    style={{
                                        color: '#ef4444',
                                        background: 'rgba(239, 68, 68, 0.05)',
                                        border: '1px solid rgba(239, 68, 68, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        fontSize: '0.75rem',
                                        padding: '6px 12px',
                                        borderRadius: '8px',
                                        fontWeight: 700,
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Trash2 size={14} /> Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="glass-card" style={{ padding: '40px', background: '#022c22', height: 'fit-content' }}>
                    <h3 style={{ color: 'white', marginBottom: '30px', fontSize: '1.7rem' }}>Order Summary</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.6)', marginBottom: '15px', fontSize: '0.95rem' }}>
                        <span>Subtotal</span>
                        <span>₹{cartTotal.toLocaleString()}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.6)', marginBottom: '40px', fontSize: '0.95rem' }}>
                        <span>Premium Shipping</span>
                        <span style={{ color: '#059669', fontWeight: 600 }}>FREE</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', fontWeight: 800, fontSize: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '25px', marginBottom: '40px' }}>
                        <span>Total</span>
                        <span style={{ color: '#fbbf24' }}>₹{cartTotal.toLocaleString()}</span>
                    </div>
                    <Link href="/payment" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        width: '100%',
                        padding: '20px',
                        background: '#fbbf24',
                        color: '#022c22',
                        borderRadius: '40px',
                        fontWeight: 800,
                        fontSize: '1.1rem',
                        textAlign: 'center',
                        boxShadow: '0 10px 30px rgba(251, 191, 36, 0.25)'
                    }}>
                        <CreditCard size={22} /> Proceed to Secure Payment
                    </Link>
                </div>
            </div>
        </div>
    )
}
