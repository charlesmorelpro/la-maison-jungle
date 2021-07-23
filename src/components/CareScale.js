export default function CareScale ({ careType, scaleValue }) {
    const range = [1, 2, 3]
    return <span onClick={() => handleClick(careType, scaleValue)}>
        {range.map((rangeElem) => 
            scaleValue >= rangeElem && <span key={rangeElem.toString()}>{careType === 'light' ? '☀️' : '💧'}</span>
        )}
    </span>
}

const handleClick = (careType, scaleValue) => {
    const needs = {
        1: 'faible',
        2: 'moyen',
        3: 'fort'
    }
    alert(`Cette plante a un ${needs[scaleValue]} besoin en ${careType === 'water' ? 'eau' : 'lumière'}`)
}