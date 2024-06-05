function Trombol(props) {
    const {children, warna ="bg-yellow-500", atas, lebar="w-full", onClick, type = "button"} = props //kita bisa destructuring untuk memberi nilai default
    return (
      <button className={`${atas} hover:bg-cyan-500 ${lebar} h-8 px-6 font-semibold rounded-md ${warna} text-white"`} type={type} onClick={onClick}>
        {children}
      </button>
    )
  }

  export default Trombol
  