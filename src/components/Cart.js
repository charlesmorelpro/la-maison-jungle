import { useState } from "react"

export default function Cart() {
	const monsteraPrice = 8
	const [isOpen, setIsOpen] = useState(false)
	const [cart, updateCart] = useState(0) // Crée le state 'cart' et la méthode 'updateCart'
	// La valeur par défaut du panier est de 0

	const emptyCart = () => {
		updateCart(0)
	}

	return isOpen ? (
		<div className='text-white bg-green-400 w-full sm:w-60 p-4 flex-shrink-0'>
			<button className="w-full text-right hover:cursor-pointer" onClick={() => setIsOpen(false)}>Fermer</button>
			<h2 className="font-semibold text-xl border-white border-b-2 mb-4">Panier</h2>
			{cart === 0 ? 
				<div>Votre panier est vide.</div> : 
				<ul>
					<li>({cart}) Monstera : {monsteraPrice}€</li>
				</ul>}
			<div className="flex justify-between my-4">
				<button className="jungle-button" onClick={() => updateCart(cart+1)}>Ajouter</button>
				<div>Total : {monsteraPrice*cart}€</div>
			</div>
			{cart > 0 && <div className="text-center"><button className="jungle-button" onClick={emptyCart}>Vider le panier</button></div>}
		</div>
	) : (<div className="w-full sm:w-44 p-4 text-right sm:text-center flex-shrink-0">
		<button className="mt-4 p-4 flex-shrink-0 self-start jungle-button" onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
	</div>)
}
