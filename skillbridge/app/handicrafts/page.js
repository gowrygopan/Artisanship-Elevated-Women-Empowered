'use client'
import Link from 'next/link'
import { ArrowLeft, ShoppingBag, Palette, Sparkles, Hammer } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Handicrafts() {
    const { addToCart } = useCart()
    const products = [
        { title: "Hand-Painted Clay Pottery", price: "1200", desc: "Museum-quality terracotta with tribal motifs, hand-painted by master potter Lakshmi.", image: "/clay.png" },
        { title: "Rajasthani Wooden Artwork", price: "311", desc: "Finely carved Sheesham wood pieces reflecting vibrant desert culture.", image: "/wooden.png" },
        { title: "Handmade Wall Hanging", price: "800", desc: "Traditional macrame and beadwork to bring life to your living space.", image: "/wall_hanging.png" },
        { title: "Handmade Ethnic Jewelry", price: "250", desc: "Unique neckpieces and earrings crafted from eco-friendly materials.", image: "/ethnic_jewelry.png" },
        { title: "Sustainable Jute Craft", price: "1110", desc: "Premium handcrafted jute bags and decor for a minimalist lifestyle.", image: "/jute.png" },
    ]

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
                    <Hammer className="text-gold" size={32} />
                    <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.8rem', color: '#4b5563' }}>Artefacts & Decor</span>
                </div>
                <h1 style={{ fontSize: '3rem', marginBottom: '15px' }}>Artisanal Handicrafts</h1>
                <p style={{ color: '#4b5563', fontSize: '1.1rem', maxWidth: '600px' }}>
                    Exquisite decorative pieces that celebrate timeless craftsmanship.
                    Each item is a unique masterpiece, carrying the soul of its creator.
                </p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px'
            }}>
                {products.map((product, i) => (
                    <div key={i} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ position: 'relative', height: '300px' }}>
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '20px',
                                background: 'rgba(2, 44, 34, 0.85)',
                                color: 'white',
                                padding: '6px 14px',
                                borderRadius: '10px',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                backdropFilter: 'blur(8px)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                            }}>
                                <Sparkles size={14} className="text-gold" />
                                HANDMADE
                            </div>
                        </div>

                        <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>{product.title}</h3>
                            <p style={{ color: '#4b5563', fontSize: '0.9rem', marginBottom: '25px', flex: 1, lineHeight: 1.6 }}>{product.desc}</p>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 'auto'
                            }}>
                                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#022c22' }}>₹{product.price}</span>
                                <button
                                    onClick={() => addToCart(product)}
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
