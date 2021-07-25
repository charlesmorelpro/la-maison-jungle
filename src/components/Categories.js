import { plantList } from "../data/plantList"

export default function Categories ({filteredCategory, updateFilter}) {
    const categories = plantList.reduce((acc, plant) => {
        return !acc.includes(plant.category) ? acc.concat(plant.category) : acc
    }, [])

    const handleChange = (e) => {
        updateFilter(e.target.value)
    }

    const onReinitialize = () => {
        updateFilter("")
    }

    return <div className="mb-6">
        <select className="align-center border-green-500 border-2" onChange={handleChange}>
            <option></option>
            {categories.map((category) => (
                <option key={category}>{category}</option>
            ))}
        </select>
    <button className="mx-2 jungle-button" onClick={onReinitialize}>Réinitialiser</button>
</div>
}