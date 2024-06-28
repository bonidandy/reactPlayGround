function Input(props) {
    const { length, placeholder = "isi laa", gap, type, height="h-8", id} = props
    
    return (
        <div className={`${gap}`}>
            <input id={id} type={type} className={`${height} ${length} text-xs pl-1 border-2 rounded border-slate-500 outline-none`} placeholder={placeholder} />
        </div>
    )
}

export default Input