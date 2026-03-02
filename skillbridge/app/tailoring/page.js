'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ShoppingBag, Scissors, Check } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Tailoring() {
    const { addToCart } = useCart()
    const [selectedSizes, setSelectedSizes] = useState({})

    const products = [
        { title: "Embroidered Silk Saree", price: "1500", desc: "Hand-threaded intricate patterns on pure silk, perfect for festive occasions.", image: "/silk_saree.png" },
        { title: "Regal Wedding Gowns", price: "7000", desc: "Custom-fit elegance for your special day, meticulously designed by rural masters.", image: "/wedding_gown.png" },
        { title: "Designer Ethnic Lehenga", price: "4500", desc: "Vibrant colors and traditional flair with modern comfort.", image: "/lehenga.png" },
        { title: "Custom Blouse Stitching", price: "500", desc: "Perfect fit guaranteed by master artisans with decades of experience.", image: "/blouse.png" },
        { title: "Short Designer Kurthies", price: "350", desc: "Modern cuts with traditional block prints, ideal for daily premium wear.", image: "/short_kurti.jpg" },
    ]

    const sizes = ['S', 'M', 'L', 'XL', 'Custom']

    const handleSizeSelect = (productTitle, size) => {
        setSelectedSizes(prev => ({ ...prev, [productTitle]: size }))
    }

    return (
        <div style={{ padding: '60px 5%' }}>
            <Link href="/" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#4b5563',
                marginBottom: '40px',
                fontWeight: 600
            }}>
                <ArrowLeft size={18} /> Back to Categories
            </Link>

            <header style={{ marginBottom: '60px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                    <Scissors className="text-gold" size={32} />
                    <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.8rem', color: '#4b5563' }}>Bespoke & Custom</span>
                </div>
                <h1 style={{ fontSize: '3rem', marginBottom: '15px' }}>Bespoke Tailoring</h1>
                <p style={{ color: '#4b5563', fontSize: '1.1rem', maxWidth: '600px' }}>
                    Experience the luxury of custom-fit clothing, meticulously crafted by
                    skilled rural artisans using traditional techniques and heirloom fabrics.
                </p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px'
            }}>
                {products.map((product, i) => (
                    <div key={i} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ position: 'relative', height: '350px' }}>
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                background: '#fbbf24',
                                color: '#022c22',
                                padding: '6px 16px',
                                borderRadius: '25px',
                                fontSize: '0.75rem',
                                fontWeight: 800,
                                boxShadow: '0 4px 10px rgba(251, 191, 36, 0.3)'
                            }}>
                                PREMIUM
                            </div>
                        </div>

                        <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>{product.title}</h3>
                            <p style={{ color: '#4b5563', fontSize: '0.9rem', marginBottom: '25px', flex: 1, lineHeight: 1.6 }}>{product.desc}</p>

                            <div style={{ marginBottom: '25px' }}>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', color: '#9ca3af' }}>Select Size</label>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {sizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => handleSizeSelect(product.title, size)}
                                            style={{
                                                padding: '8px 12px',
                                                borderRadius: '10px',
                                                fontSize: '0.8rem',
                                                fontWeight: 600,
                                                border: '1px solid',
                                                borderColor: selectedSizes[product.title] === size ? '#fbbf24' : '#e5e7eb',
                                                background: selectedSizes[product.title] === size ? 'rgba(251, 191, 36, 0.1)' : 'transparent',
                                                color: selectedSizes[product.title] === size ? '#022c22' : '#6b7280',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '5px'
                                            }}
                                        >
                                            {selectedSizes[product.title] === size && <Check size={12} />}
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 'auto'
                            }}>
                                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#022c22' }}>₹{product.price}</span>
                                <button
                                    onClick={() => addToCart(product, selectedSizes[product.title] || 'M')}
                                    style={{
                                        padding: '12px 25px',
                                        background: '#022c22',
                                        color: 'white',
                                        borderRadius: '35px',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}
                                >
                                    <ShoppingBag size={18} /> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
