'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Lock, User, ArrowLeft, AlertCircle } from 'lucide-react'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleLogin = (e) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        // Simulating the user's requested logic
        // "admin" / "1234"
        setTimeout(() => {
            if (username === 'admin' && password === '1234') {
                router.push('/')
            } else {
                setError('Invalid credentials. Please try again.')
                setIsLoading(false)
            }
        }, 800)
    }

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #022c22 0%, #064e3b 100%)',
            padding: '20px'
        }}>
            <div className="animate-fade-up" style={{ width: '100%', maxWidth: '450px' }}>
                <Link href="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'white',
                    opacity: 0.7,
                    marginBottom: '30px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 600
                }}>
                    <ArrowLeft size={16} /> Back to Store
                </Link>

                <div className="glass-card" style={{ padding: '50px', borderRadius: '30px', position: 'relative', overflow: 'hidden' }}>
                    {/* Decorative Background Element */}
                    <div style={{
                        position: 'absolute',
                        top: '-50px',
                        right: '-50px',
                        width: '150px',
                        height: '150px',
                        background: 'rgba(251, 191, 36, 0.05)',
                        borderRadius: '50%',
                        zIndex: 0
                    }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: '#fbbf24',
                                borderRadius: '18px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 20px',
                                color: '#022c22'
                            }}>
                                <Lock size={28} />
                            </div>
                            <h1 style={{ fontSize: '2rem', color: '#022c22', marginBottom: '10px' }}>Welcome Back</h1>
                            <p style={{ color: '#4b5563', fontSize: '0.9rem' }}>Secure access to rural excellence</p>
                        </div>

                        {error && (
                            <div style={{
                                background: 'rgba(239, 68, 68, 0.1)',
                                color: '#ef4444',
                                padding: '12px 16px',
                                borderRadius: '12px',
                                marginBottom: '25px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                border: '1px solid rgba(239, 68, 68, 0.2)'
                            }}>
                                <AlertCircle size={16} />
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleLogin}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', color: '#4b5563' }}>Username</label>
                                <div style={{ position: 'relative' }}>
                                    <User size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Enter your username"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '14px 15px 14px 45px',
                                            background: '#f9fafb',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '15px',
                                            fontSize: '0.95rem',
                                            outline: 'none',
                                            transition: 'border-color 0.2s ease'
                                        }}
                                        autoFocus
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '30px' }}>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', color: '#4b5563' }}>Password</label>
                                <div style={{ position: 'relative' }}>
                                    <Lock size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '14px 15px 14px 45px',
                                            background: '#f9fafb',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '15px',
                                            fontSize: '0.95rem',
                                            outline: 'none',
                                            transition: 'border-color 0.2s ease'
                                        }}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                style={{
                                    width: '100%',
                                    padding: '16px',
                                    background: '#022c22',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '15px',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                    boxShadow: '0 4px 15px rgba(2, 44, 34, 0.15)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px'
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                            >
                                {isLoading ? (
                                    <div className="animate-spin" style={{ width: '20px', height: '20px', border: '3px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%' }}></div>
                                ) : (
                                    'Sign In Securely'
                                )}
                            </button>
                        </form>

                        <div style={{ textAlign: 'center', marginTop: '30px' }}>
                            <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                                Don't have an account? <Link href="#" style={{ color: '#059669', fontWeight: 700, textDecoration: 'none' }}>Join SkillBridge</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
