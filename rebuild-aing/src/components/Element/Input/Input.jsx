function Input(props) {
    const { length, placeholder = "isi laa", gap, type, text="capitalize", height="h-8"} = props
    
    return (
        <div className={`${gap}`}>
            <input type={type} className={`${text} ${height} ${length} text-xs pl-1 border-2 rounded border-slate-500 outline-none`} placeholder={placeholder} />
        </div>
    )
}

export default Input