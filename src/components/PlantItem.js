import CareScale from "./CareScale"

export default function PlantItem ({plant, cart, updateCart}) {
    const handleCartClick = (plant) => {
        const plantInCart = cart.find((item) => item.plant.name === plant.name)

        if (plantInCart) {
            const currentPlantFiltered = cart.filter((item) => item.plant.name !== plant.name)
            updateCart([
                {plant, amount: plantInCart.amount + 1},
                ...currentPlantFiltered
            ])
        } else {
            updateCart([
                {plant, amount: 1},
                ...cart
            ])
        }
        localStorage.setItem("cart", JSON.stringify(cart))
    }

    return <div className="flex items-start justify-center flex-col capitalize mb-4">
        <div style={{paddingTop: '100%'}} className="relative w-52">
            <img className="rounded-2xl object-cover absolute top-0 w-full h-full" src={plant.cover} alt="Plant illustration" />
            <div className="absolute top-0 right-0 py-2 px-3 bg-green-500 rounded-2xl rounded-bl-none text-white">
                {plant.price}€
            </div>
        </div>
        <div className="pt-2 flex justify-space-between w-full">
            <div className="flex flex-col flex-grow">
                <h1 className='font-semibold text-lg'>{plant.name} {plant.isBestSale && <span className=" text-white bg-gray-400 p-0.5 rounded text-xs">Best Sale</span>}</h1>
                <CareScale careType='water' scaleValue={plant.water} />
                <CareScale careType='light' scaleValue={plant.light} />
            </div>
            <div className="flex-shrink-0">
                <button className="my-0.5 text-green-600 hover:text-green-800" onClick={() => handleCartClick(plant)}>Ajouter</button>
            </div>
        </div>
    </div>
}