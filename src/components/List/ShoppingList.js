import { plantList } from "../../data/plantList"
import PlantItem from "../PlantItem"
import Cover from "../../assets/img/monstera.jpg"

export default function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return <div className="p-4 flex flex-col items-center flex-grow">
        <div className="mb-6">
            <select className="align-center">
                {categories.map((category) => (
                    <option>{category}</option>
                ))}
            </select>
            <button className="mx-2 jungle-button">Réinitialiser</button>
        </div>
        <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {plantList.map((plant) => (
                <PlantItem plant={plant} cover={Cover} />
            ))}
        </div>
    </div>
}