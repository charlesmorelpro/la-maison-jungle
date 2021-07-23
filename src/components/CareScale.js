export default function CareScale ({ careType, scaleValue }) {
    const range = [1, 2, 3]
    return <span>
        {range.map((rangeElem) => 
            scaleValue >= rangeElem && <span key={rangeElem.toString()}>{careType === 'light' ? '☀️' : '💧'}</span>
        )}
    </span>
}