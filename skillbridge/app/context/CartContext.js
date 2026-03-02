'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('skillbridge_cart')
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart))
            } catch (e) {
                console.error("Failed to parse cart", e)
            }
        }
    }, [])

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('skillbridge_cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product, size = null) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item =>
                item.title === product.title && item.size === size
            )
            if (existingItem) {
                return prevCart.map(item =>
                    item.title === product.title && item.size === size
                        ? { ...item, qty: item.qty + 1 }
                        : item
                )
            }
            return [...prevCart, { ...product, qty: 1, size }]
        })
    }

    const removeFromCart = (productTitle, size = null) => {
        setCart(prevCart => prevCart.filter(item =>
            !(item.title === productTitle && item.size === size)
        ))
    }

    const updateQty = (productTitle, delta, size = null) => {
        setCart(prevCart => prevCart.map(item => {
            if (item.title === productTitle && item.size === size) {
                const newQty = Math.max(1, item.qty + delta)
                return { ...item, qty: newQty }
            }
            return item
        }))
    }

    const cartCount = cart.reduce((acc, item) => acc + item.qty, 0)
    const cartTotal = cart.reduce((acc, item) => acc + (parseFloat(String(item.price).replace(/,/g, '')) * item.qty), 0)

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, cartCount, cartTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}
