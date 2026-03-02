'use client'
import Link from 'next/link'
import { ArrowLeft, ShoppingBag, Leaf, Utensils } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Foods() {
    const { addToCart } = useCart()
    const products = [
        { title: "Pure Organic Ghee", price: "850", desc: "Hand-churned from grass-fed mountain cows using traditional Bilona method.", image: "/ghee.webp" },
        { title: "Homemade Spicy Pickle", price: "200", desc: "Sun-dried mangoes and chillies in cold-pressed mustard oil.", image: "/mangopickle.jpeg" },
        { title: "Organic Millet Laddu", price: "300", desc: "Nutrient-rich traditional sweets made with ragi and bajra.", image: "/laddu.webp" },
        { title: "Authentic Gulab Jamun", price: "200", desc: "Soft, melt-in-mouth dumplings in aromatic saffron syrup.", image: "/jamun.jpeg" },
        { title: "Homemade Beef Fry", price: "650", desc: "Slow-cooked with hand-ground spices and roasted coconut.", image: "/beeffry.png" },
        { title: "Crispy Golden Jalebi", price: "90", desc: "Freshly fried whirls of sweetness, a rural market favorite.", image: "/jalebi.png" },
        { title: "Spicy Village Samosa", price: "40", desc: "Traditional potato filling with herbs, served piping hot.", image: "/samosa.png" },
        { title: "Wild Forest Honey", price: "450", desc: "Unprocessed, raw nectar from indigenous beehives.", image: "/honey.png" }
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
                    <Utensils className="text-gold" size={32} />
                    <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.8rem', color: '#4b5563' }}>Organic & Authentic</span>
                </div>
                <h1 style={{ fontSize: '3rem', marginBottom: '15px' }}>Gourmet Rural Foods</h1>
                <p style={{ color: '#4b5563', fontSize: '1.1rem', maxWidth: '600px' }}>
                    Pure, wholesome nutrition sourced directly from rural family farms.
                    Preserving traditional flavors and artisanal processing methods.
                </p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px'
            }}>
                {products.map((product, i) => (
                    <div key={i} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ position: 'relative', height: '250px' }}>
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                                position: 'absolute',
                                top: '15px',
                                left: '15px',
                                background: 'rgba(5, 150, 105, 0.9)',
                                color: 'white',
                                padding: '4px 12px',
                                borderRadius: '15px',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                backdropFilter: 'blur(4px)'
                            }}>
                                <Leaf size={10} style={{ display: 'inline', marginRight: '5px' }} />
                                ORGANIC
                            </div>
                        </div>

                        <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{product.title}</h3>
                            <p style={{ color: '#4b5563', fontSize: '0.85rem', marginBottom: '20px', flex: 1, lineHeight: 1.6 }}>{product.desc}</p>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 'auto'
                            }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#022c22' }}>₹{product.price}</span>
                                <button
                                    onClick={() => addToCart(product)}
                                    style={{
                                        padding: '10px 20px',
                                        background: '#022c22',
                                        color: 'white',
                                        borderRadius: '30px',
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <ShoppingBag size={14} /> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
