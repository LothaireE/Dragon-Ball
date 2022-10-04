// import { useState } from "react"
import { Card, Button } from "react-bootstrap"
import "../assets/css/StoreItem.css"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}


export function StoreItem({ id, name, price, imgUrl}: StoreItemProps) {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)
    // const [quantity, setQuantity] = useState(1);
    return (
        <Card className="mb-4">
            <Card.Img className="cardImg" variant="top" src={imgUrl} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline ">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto w-100">
                    {quantity === 0 ?(
                        <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
                            Add To Cart
                        </Button>
                    ): <div className="altBtn d-flex align-items-center flex-column">
                        <div className="d-flex align-items-center justify-content-center">
                            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                            <div>
                            <span className="fs-3">{quantity} in cart</span>
                            </div>
                            <Button onClick={() => increaseCartQuantity(id)}>+</Button> 
                        </div>
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                    </div> }
                </div>
            </Card.Body>
        </Card>
    )
};