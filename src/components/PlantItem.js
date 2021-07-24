import CareScale from "./CareScale"
import {FaCartPlus} from "react-icons/fa"

export default function PlantItem ({plant, cover}) {
    const handleCartClick = (plant) => {
        
    }

    return <div className="flex items-start justify-center flex-col capitalize mb-4">
        <img className="rounded-2xl" src={cover} alt="Plant illustration" />
        <div className="pt-2 flex justify-space-between w-full">
            <div className="flex flex-col flex-grow">
                <h1 className='font-semibold text-lg'>{plant.name} {plant.isBestSale && <span className=" text-white bg-gray-400 p-0.5 rounded text-xs">Best Sale</span>}</h1>
                <CareScale careType='water' scaleValue={plant.water} />
                <CareScale careType='light' scaleValue={plant.light} />
            </div>
            <div className="flex-shrink-0">
                <FaCartPlus className="m-2 text-green-500" size={24} onClick={() => handleCartClick(plant)} />
            </div>
        </div>
    </div>
}