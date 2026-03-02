'use client'
import { CheckCircle, ShieldCheck, Lock, CreditCard } from 'lucide-react'
import { useCart } from '../context/CartContext'
import Link from 'next/link'

export default function Payment() {
    const { cart, cartTotal } = useCart()

    return (
        <div style={{ padding: '60px 5%', minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', background: '#f9fafb' }}>
            <div className="animate-fade-up" style={{ width: '100%', maxWidth: '1000px', display: 'grid', gridTemplateColumns: '1fr 400px', gap: '40px' }}>

                {/* Payment Form Area */}
                <div>
                    <div style={{ marginBottom: '40px' }}>
                        <h1 style={{ fontSize: '2.5rem', color: '#022c22', marginBottom: '10px' }}>Secure Checkout</h1>
                        <p style={{ color: '#4b5563' }}>Complete your transaction safely and support rural artisans.</p>
                    </div>

                    <form className="glass-card" style={{ padding: '40px', borderRadius: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px', color: '#022c22' }}>
                            <CreditCard size={24} />
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Payment Method</h2>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', color: '#6b7280' }}>Cardholder Name</label>
                                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px 15px', border: '1px solid #e5e7eb', borderRadius: '12px', outline: 'none' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', color: '#6b7280' }}>Card Details</label>
                                <div style={{ position: 'relative' }}>
                                    <input type="text" placeholder="0000 0000 0000 0000" style={{ width: '100%', padding: '12px 15px', border: '1px solid #e5e7eb', borderRadius: '12px', outline: 'none' }} />
                                    <ShieldCheck size={18} style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: '#059669' }} />
                                </div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', color: '#6b7280' }}>Expiry Date</label>
                                    <input type="text" placeholder="MM/YY" style={{ width: '100%', padding: '12px 15px', border: '1px solid #e5e7eb', borderRadius: '12px', outline: 'none' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', color: '#6b7280' }}>CVV</label>
                                    <input type="password" placeholder="•••" style={{ width: '100%', padding: '12px 15px', border: '1px solid #e5e7eb', borderRadius: '12px', outline: 'none' }} />
                                </div>
                            </div>
                        </div>

                        <button type="submit" style={{
                            width: '100%',
                            marginTop: '40px',
                            padding: '18px',
                            background: '#022c22',
                            color: 'white',
                            borderRadius: '40px',
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            boxShadow: '0 10px 30px rgba(2, 44, 34, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            cursor: 'pointer'
                        }}>
                            <Lock size={18} /> Pay ₹{cartTotal.toLocaleString()}
                        </button>
                    </form>
                </div>

                {/* Sidebar Order Summary */}
                <div style={{ position: 'sticky', top: '100px' }}>
                    <div className="glass-card" style={{ padding: '30px', borderRadius: '24px', background: '#022c22', color: 'white' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '25px', color: '#fbbf24' }}>Order Summary</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '25px', maxHeight: '300px', overflowY: 'auto', paddingRight: '10px' }}>
                            {cart.map((item, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ fontSize: '0.9rem' }}>
                                        <div style={{ fontWeight: 600 }}>{item.title}</div>
                                        <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                                            Qty: {item.qty} {item.size ? `| Size: ${item.size}` : ''}
                                        </div>
                                    </div>
                                    <div style={{ fontWeight: 700 }}>₹{(parseFloat(item.price.replace(/,/g, '')) * item.qty).toLocaleString()}</div>
                                </div>
                            ))}
                        </div>

                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <span style={{ opacity: 0.6 }}>Subtotal</span>
                                <span>₹{cartTotal.toLocaleString()}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                <span style={{ opacity: 0.6 }}>Shipping</span>
                                <span style={{ color: '#059669', fontWeight: 600 }}>FREE</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '1.4rem', color: '#fbbf24' }}>
                                <span>Total</span>
                                <span>₹{cartTotal.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px', color: '#4b5563', fontSize: '0.8rem', padding: '0 10px' }}>
                        <ShieldCheck size={16} className="text-gold" />
                        <span>Trusted by 10,000+ happy customers</span>
                    </div>
                </div>

            </div>
        </div >
    )
}
