import InputFormulir from "../Elements/Input"
import Trombol from "../Elements/Button/Button"

function FormLogin() {
    function LoginHandle(event) {
        event.preventDefault()
        localStorage.setItem("email", event.target.InputEmail.value)
        localStorage.setItem("password", event.target.InputPassword.value)
        console.log(event.target.InputEmail.value)
        console.log(event.target.InputPassword.value)
        window.location.href="/kartu"
    }
    return (
        <div>
            <form onSubmit={LoginHandle} className="w-[27.438rem]">
                <InputFormulir type="email" id="InputEmail" htmlfor="InputEmail" placeholder="example@gmail.com">Email</InputFormulir>
                <InputFormulir type="password" id="InputPassword" htmlfor="InputPassword" placeholder="******">Password</InputFormulir>
                <Trombol atas="mt-5" warna="bg-cyan-400" type="submit">Login</Trombol>
            </form>
        </div>
    )
}


export default FormLogin