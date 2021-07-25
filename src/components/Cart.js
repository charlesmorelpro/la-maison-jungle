import { useState, useEffect } from "react"

export default function Cart({cart, updateCart}) {
	const [isOpen, setIsOpen] = useState(false)
	const totalPrice = cart.reduce((acc, item) => acc + item.amount*item.plant.price, 0)

	const emptyCart = () => {
		updateCart([])
		localStorage.setItem("cart", [])
	}

	useEffect(() => {
		document.title = `LMJ: ${totalPrice}€ d'achats`
	}, [totalPrice])

	return isOpen ? (
		<div className='text-white bg-green-400 w-full sm:w-60 p-4 flex-shrink-0'>
			<button className="w-full text-right hover:cursor-pointer" onClick={() => setIsOpen(false)}>Fermer</button>
			<h2 className="font-semibold text-xl border-white border-b-2 mb-4">Panier</h2>
			{cart === 0 ? 
				<div>Votre panier est vide.</div> : 
				<ul>
					{cart.map((item) => <li>{item.amount} {item.plant.name} : {item.plant.price}€</li>)}
				</ul>}
			<div className="flex justify-between my-4">
				<div>Total : {totalPrice}€</div>
			</div>
			{cart.length > 0 && <div className="text-center"><button className="jungle-button" onClick={emptyCart}>Vider le panier</button></div>}
		</div>
	) : (<div className="w-full sm:w-44 p-4 text-right sm:text-center flex-shrink-0">
		<button className="mt-4 p-4 flex-shrink-0 self-start jungle-button" onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
	</div>)
}
