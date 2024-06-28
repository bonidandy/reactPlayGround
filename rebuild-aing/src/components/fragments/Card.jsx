import Button from "../Element/Button/Button"
function Card({ text, harga, gambar, handleClick, id }) {
    return (
        <div className="w-44 bg-green-500 flex flex-col items-center rounded text-white">
            <img className="w-40  pt-2" src={gambar} alt="" />
            <p>{text}</p>
            <p>{harga}</p>
            <Button width="w-32" id={id} onClick={handleClick}>Buy Now</Button>
            <span className="pb-2"></span>
            
        </div>
        
    )
}

export default Card