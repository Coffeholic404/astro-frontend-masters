import { Show, createSignal } from "solid-js";
import { useStore } from "@nanostores/react";
import { $cart, removeItemFromCart, subtotal } from "../stores/cart";
import styles from './cart.module.css'

function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {
        currency: 'usd',
        style: 'currency',
    }).format(amount)
}