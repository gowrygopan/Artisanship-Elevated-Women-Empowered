'use client'
import Link from 'next/link'

export default function Home() {
    return (
        <div style={{ minHeight: '100vh' }}>
            {/* Hero Section */}
            <section style={{
                padding: '120px 10%',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #022c22 0%, #064e3b 100%)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'relative', zIndex: 1 }} className="animate-fade-up">
                    <h1 style={{ fontSize: '4rem', color: '#fbbf24', marginBottom: '20px', lineHeight: 1.1 }}>
                        Artisanship Elevated. <br /> Women Empowered.
                    </h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 40px' }}>
                        Discover the elegance of rural craftsmanship. We bring you premium,
                        handcrafted excellence directly from the heart of rural India.
                    </p>
                    <Link href="/tailoring" style={{
                        display: 'inline-block',
                        padding: '18px 40px',
                        background: '#fbbf24',
                        color: '#022c22',
                        borderRadius: '40px',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)'
                    }}>
                        Explore Collections
                    </Link>
                </div>

                {/* Subtle Decorative Element */}
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '500px',
                    height: '500px',
                    background: 'rgba(251, 191, 36, 0.05)',
                    borderRadius: '50%',
                    filter: 'blur(80px)'
                }}></div>
            </section>

            {/* Categories Section */}
            <section style={{ padding: '100px 5%' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '10px' }}>Our Curated Categories</h2>
                <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '60px' }}>Refined selection of rural excellence.</p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '40px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <CategoryCard
                        emoji="🧵"
                        title="Bespoke Tailoring"
                        desc="Intricate embroidery and hand-stitched garments that tell a story of heritage."
                        link="/tailoring"
                    />
                    <CategoryCard
                        emoji="🍲"
                        title="Gourmet Rural Foods"
                        desc="Organic, traditional recipes passed down through generations, prepared with love."
                        link="/foods"
                    />
                    <CategoryCard
                        emoji="🎨"
                        title="Artisanal Handicrafts"
                        desc="Luxurious home decor and accessories handcrafted with precision and ancient techniques."
                        link="/handicrafts"
                    />
                </div>
            </section>
        </div>
    )
}

function CategoryCard({ emoji, title, desc, link }) {
    return (
        <Link href={link} className="glass-card" style={{
            display: 'block',
            padding: '50px 40px',
            textAlign: 'center',
            transition: 'all 0.4s ease'
        }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '25px' }}>{emoji}</div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{title}</h3>
            <p style={{ color: '#4b5563', fontSize: '0.95rem', marginBottom: '30px' }}>{desc}</p>
            <div style={{
                display: 'inline-block',
                color: '#fbbf24',
                fontWeight: 700,
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}>
                View Collection →
            </div>
        </Link>
    )
}
