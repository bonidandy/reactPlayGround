import Trombol from "../Elements/Button/Button"

function CardProducts(props) {
    const { children } = props
    return (

        <div className=" rounded-lg  w-72 mx-3 my-3 py-2 bg-stone-600 text-white">
            {children}
        </div>

    )
}

function Header(props) {
    const { gambar } = props
    return (
        <div className="flex justify-center py-1">
            <img className="h-56 rounded-sm" src={gambar} alt="" />
        </div>
    )
}

function Body(props) {
    const { text, title } = props
    return (
        <div className="h-[43%] px-2">
            <h2 className="text-lg font-bold">{title}</h2>
            <p>{text}</p>
        </div>
    )
}

function Footer({ price, id, handleBarang}) {
    return (
        <div className="flex justify-between items-center px-2">
            <p className="font-bold">{price.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}</p>
            <div className="pl-2">
                <Trombol lebar="w-32" id={id} onClick={()=>handleBarang(id)}>Buy</Trombol>
            </div>
        </div>
    )
}

CardProducts.Header = Header
CardProducts.Body = Body
CardProducts.Footer = Footer


export default CardProducts