import { useShoppingCart } from "../context/ShoppingCartContext"
import { Button, Stack } from "react-bootstrap";
import StoreItems from "../data/items.json"
import "../assets/css/CartItem.css"
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = StoreItems.find(i => i.id === id) 
    if (item == null) return null
    
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img className="cartItemImg" src={item.imgUrl} alt={item.name} />
            <div className="me-auto">
                <div>
                    {item.name} {quantity>1 && <span className="cartItemQuantity text-muted">x {quantity}</span> }
                </div>
                <div className="cartItemPrice text-muted">
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div> {formatCurrency(item.price * quantity)}</div>
            <Button variant="outline-danger" size="sm" onClick={()=> removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}
