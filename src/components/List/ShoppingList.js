import { plantList } from "../../data/plantList"
import PlantItem from "../PlantItem"
import Categories from "../Categories"
import { useState } from "react"

export default function ShoppingList({cart, updateCart}) {
    const [filteredCategory, updateFilter] = useState("")

    const filteredPlantList = filteredCategory.length > 0 ? plantList.reduce((acc, plant) => {
        return plant.category === filteredCategory ? acc.concat(plant) : acc
    }, []) : plantList

    return <div className="p-4 flex flex-col items-center flex-grow">
        <Categories filteredCategory={filteredCategory} updateFilter={updateFilter} />
        <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {filteredPlantList.map((plant) => (
                <PlantItem key={plant.id} cart={cart} updateCart={updateCart} plant={plant} />
            ))}
        </div>
    </div>
}