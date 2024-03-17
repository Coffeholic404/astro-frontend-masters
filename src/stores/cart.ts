import { computed, map } from "nanostores";
import type { CartItem, ShopItem } from "../types";

export const $cart = map<Record<number, CartItem>>({});

export function addItemToCart(item: ShopItem) {
    //* Check the store to see if we already have that particular item in the cart
    const CartItem = $cart.get()[item.id]

    const quantity = CartItem ? CartItem.quantity : 0;

    $cart.setKey(item.id, {
        item,
        quantity: quantity + 1,
    });
    //! we have either a new item gets added with the quantity of one. or we overwrite the original item that has the key of the item id with the new quantity is plus one 
    
};

export function removeItemFromCart(itemid: number) {
    //@ts-ignore
    $cart.setKey(itemid, undefined);
};

export const subtotal = computed($cart, (entries) => {
    let subtotal = 0;
    Object.values(entries).forEach((entry) => {
        if(!entry) {
            return;
        }

        subtotal += entry.quantity + entry.item.price;
    });
    return subtotal;
})