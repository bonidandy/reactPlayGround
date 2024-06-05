function Tombol(props) {
    const { children = "isi text nya bangg", color="bg-[#4868AD]", height="h-8", width="w-48", shadow} = props
    return (
        <button className={`${width} rounded ${height} ${shadow} text-white ${color} text-sm`}>
            {children}
        </button>
    )
}

export default Tombol