import InputFormulir from "../Elements/Input"
import Trombol from "../Elements/Button/Button"

function FormRegister() {
    return (
        <>
            <form action="" className="w-[27.438rem]">
                <InputFormulir type="text" id="InputEmail" htmlfor="InputEmail" placeholder="Bonifasius Dandy">Full Name</InputFormulir>
                <InputFormulir type="email" id="InputEmail" htmlfor="InputEmail" placeholder="example@gmail.com">Email</InputFormulir>
                <InputFormulir type="password" id="InputEmail" htmlfor="InputPassword" placeholder="******">Password</InputFormulir>
                <InputFormulir type="password" id="InputEmail" htmlfor="InputPassword" placeholder="******">Confirm Password</InputFormulir>
                <Trombol atas="mt-5" warna="bg-cyan-400">Sign up</Trombol>
            </form>
        </>
    )
}

export default FormRegister