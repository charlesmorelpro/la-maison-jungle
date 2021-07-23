import { plantList } from "../../data/plantList"
import CareScale from "../CareScale"
import PlantItem from "../PlantItem"
import Cover from "../../assets/img/monstera.jpg"

export default function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    console.log(categories)

    return <div className="p-4">
        <ul className=" p-2 bg-gray-100">
            {categories.map((category) => (
                <li>{category}</li>
            ))}
        </ul>
        <div className="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {plantList.map((plant) => (
                <PlantItem plant={plant} cover={Cover} />
            ))}
        </div>
    </div>
}