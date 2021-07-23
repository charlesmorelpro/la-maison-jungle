import { useState } from 'react'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(inputValue)
    }

    const handleBlur = () => {
        if(!inputValue.includes('@'))
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
    }

	return (
		<footer className='text-black p-8 border-black border-t-2 flex flex-col items-center font-medium justify-start'>
			<div className='mb-2'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
            <div className="flex flex-col sm:flex-row justify-center items-center">
                <div className='mb-2'>Laissez-nous votre mail : </div>
                    <input className="mb-2 text-green-500 align-text-top px-1" type="email" placeholder="mr.dupont@societe.com" value={inputValue} onBlur={handleBlur} onChange={handleChange}></input>
            </div>
            <button className="p-1 px-3 text-white bg-green-500 rounded-md" type="submit" onClick={submit}>Valider</button>
		</footer>
	)
}

export default Footer