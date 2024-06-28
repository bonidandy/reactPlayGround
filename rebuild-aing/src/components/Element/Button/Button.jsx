function Button({ children = "isi text nya bangg", height, width, shadow, bgColor, className, onClick}) {

    const classes = `${className} ${width || "w-48"} rounded ${height || "h-8"} ${shadow} text-white ${bgColor || "bg-[#4868AD]"} text-sm`

    const renderButton = () => (
        <button onClick={onClick} className={classes}>
            {children}
        </button>
    )

    return renderButton()
}

export default Button