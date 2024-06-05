import Frame from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

function PreLogin() {
    return (
        <div className="bg-slate-600 w-full h-screen flex justify-center items-center">
            <Frame type="login" teks="Login">
                <FormLogin></FormLogin>
            </Frame>
        </div>
    )
}

export default PreLogin