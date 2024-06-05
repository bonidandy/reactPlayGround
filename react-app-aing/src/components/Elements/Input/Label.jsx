function Label (props) {
    const {htmlfor, children} = props
    return (
        <label className="pr-3 font-bold" htmlFor={htmlfor}>{children}</label>
    )
}

export default Label