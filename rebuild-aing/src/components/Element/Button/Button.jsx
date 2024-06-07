function Tombol(props) {
    const { children = "isi text nya bangg", height, width, shadow, bgColor, className} = props
    return (
        <button className={` ${className} ${width || "w-48"} rounded ${height || "h-8"} ${shadow} text-white ${bgColor ||"bg-[#4868AD]" } text-sm`}>
            {children}
        </button>
    )
}

export default Tombol