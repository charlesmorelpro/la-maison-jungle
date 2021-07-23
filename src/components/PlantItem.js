import CareScale from "./CareScale"

export default function PlantItem ({plant, cover}) {
    return <div className="flex items-start justify-center flex-col capitalize mb-4" onClick={() => handleClick(plant.name)}>
        <img className="rounded-2xl" src={cover} alt="Plant illustration" />
        <div className="pt-2 flex flex-col">
            <h1 className='font-semibold text-lg'>{plant.name} {plant.isBestSale && <span className=" text-white bg-gray-400 p-0.5 rounded text-xs">Best Sale</span>}</h1>
            <CareScale careType='water' scaleValue={plant.water} />
            <CareScale careType='light' scaleValue={plant.light} />
        </div>
    </div>
}

const handleClick = (plantName) => {
    console.log(`Vous avez cliqué sur ${plantName}`);
}