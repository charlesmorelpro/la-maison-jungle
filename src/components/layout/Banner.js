import logo from '../../assets/img/logo.png'

export default function Banner() {
    const title = 'La maison jungle'
    return <div className="z-10 fixed w-full bg-white text-black text-right p-6 border-b-2 border-black flex items-center justify-end">
        <img src={logo} alt="La maison jungle" className="h-12"></img>
        <h1 className="pl-6 text-2xl">{title}</h1>
    </div>
}