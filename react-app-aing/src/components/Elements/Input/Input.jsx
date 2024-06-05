function Input(props) {
    const { type, placeholder, id} = props
    return (
        <input id={id} placeholder={placeholder} type={type} className="pr-3 w-50 rounded bg-white text-black mt-1 border-2 outline-none border-slate-400 hover:border-slate-700" />
    )
}

export default Input