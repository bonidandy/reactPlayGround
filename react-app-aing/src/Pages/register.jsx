import Frame from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

function PreRegister() {
    return (
        <div className="bg-slate-600 w-full h-screen flex justify-center items-center">
            <Frame type="register" teks="Register">
                <FormRegister></FormRegister>
            </Frame>
        </div>
    )
}

export default PreRegister