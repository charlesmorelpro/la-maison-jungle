import CareScale from "./CareScale"

export default function PlantItem ({plant, cover}) {
    return <div className="flex items-start justify-center flex-col capitalize bg-gray-50" onClick={() => handleClick(plant.name)}>
        <img src={cover} alt="Plant illustration" />
        <div className="p-4">
            <h1 className='font-xl'>{plant.name} {plant.isBestSale && <span className=" text-white bg-gray-400 p-0.5 rounded text-xs">Best Sale</span>}</h1>
            <CareScale careType='light' scaleValue={plant.light} />
            <CareScale careType='water' scaleValue={plant.water} />
        </div>
    </div>
}

const handleClick = (plantName) => {
    console.log(`Vous avez cliqué sur ${plantName}`);
}