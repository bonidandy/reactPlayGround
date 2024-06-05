import Input from "./Input"
import Label from "./Label"


function InputFormulir(props) {
    const { children, type, htmlfor, placeholder, id} = props
    return (
        <div className="flex flex-col text-black pt-5 w-full">
            <Label htmlfor={htmlfor}>{children}</Label>
            <Input id={id} type={type} placeholder={placeholder}></Input>
        </div>
    )
}

export default InputFormulir