import logo from '../../assets/img/logo.png'

export default function Banner() {
    const title = 'La maison jungle'
    return <div className="text-black text-right p-6 border-b-2 border-black flex items-center justify-end">
        <img src={logo} alt="La maison jungle" className="h-12"></img>
        <h1 className="pl-6">{title}</h1>
    </div>
}