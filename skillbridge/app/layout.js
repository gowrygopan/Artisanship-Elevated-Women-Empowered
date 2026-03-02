'use client'
import Link from 'next/link'
import './globals.css'
import { CartProvider, useCart } from './context/CartContext'
import { ShoppingCart } from 'lucide-react'

function Header() {
  const { cartCount } = useCart()

  return (
    <header style={{
      padding: '20px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      background: 'rgba(249, 250, 251, 0.7)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(2, 44, 34, 0.08)',
      boxShadow: '0 4px 20px rgba(2, 44, 34, 0.02)'
    }}>
      <Link href="/" style={{
        fontSize: '1.5rem',
        fontWeight: 900,
        fontFamily: 'Playfair Display, serif',
        color: '#022c22',
        letterSpacing: '-0.5px'
      }}>
        Skill<span style={{ color: '#fbbf24' }}>Bridge</span>
      </Link>
      <nav style={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
        <Link href="/" style={{ fontWeight: 600, fontSize: '0.9rem', color: '#022c22' }}>Home</Link>
        <Link href="/tailoring" style={{ fontWeight: 600, fontSize: '0.9rem', color: '#4b5563' }}>Tailoring</Link>
        <Link href="/foods" style={{ fontWeight: 600, fontSize: '0.9rem', color: '#4b5563' }}>Foods</Link>
        <Link href="/handicrafts" style={{ fontWeight: 600, fontSize: '0.9rem', color: '#4b5563' }}>Handicrafts</Link>
        <Link href="/login" style={{ fontWeight: 600, fontSize: '0.9rem', color: '#4b5563' }}>Sign In</Link>
        <Link href="/cart" style={{
          fontWeight: 700,
          fontSize: '0.85rem',
          color: '#022c22',
          background: '#fbbf24',
          padding: '8px 20px',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          position: 'relative',
          boxShadow: '0 4px 15px rgba(251, 191, 36, 0.2)'
        }}>
          <ShoppingCart size={16} />
          Cart
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: '#022c22',
              color: 'white',
              borderRadius: '50%',
              width: '18px',
              height: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.65rem'
            }}>{cartCount}</span>
          )}
        </Link>
      </nav>
    </header>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main style={{ paddingTop: '80px' }}>
            {children}
          </main>
          <footer style={{
            padding: '80px 5% 40px',
            background: '#022c22',
            color: '#f9fafb',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 900,
              fontFamily: 'Playfair Display, serif',
              color: '#fbbf24',
              marginBottom: '20px'
            }}>
              SkillBridge
            </div>
            <p style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.8 }}>
              Bridging the gap between rural talent and global opportunities.
              Empowering women through sustainable economic growth and digital inclusion.
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '30px',
              marginBottom: '40px',
              fontSize: '0.9rem',
              fontWeight: 600
            }}>
              <Link href="/tailoring" style={{ color: 'rgba(255,255,255,0.6)' }}>Tailoring</Link>
              <Link href="/foods" style={{ color: 'rgba(255,255,255,0.6)' }}>Foods</Link>
              <Link href="/handicrafts" style={{ color: 'rgba(255,255,255,0.6)' }}>Handicrafts</Link>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', fontSize: '0.8rem', opacity: 0.4 }}>
              © 2026 SkillBridge Premium. Dedicated to Artisanal Excellence.
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}
