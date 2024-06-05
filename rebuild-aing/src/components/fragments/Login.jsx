import Input from "../Element/Input/Input"
import Tombol from "../Element/Button/Button"
function Login() {
    return (
        <div className="h-screen flex justify-center items-center bg-[#F9EFF0]">
            <div className="bg-white w-3/5 h-2/5 md:h-3/4 p-5 md:p-0 flex rounded">
                <div className="flex justify-center">
                    <div>
                        <p><b>Login</b></p>
                    </div>
                    <div className="hidden md:inline bg-green-500 w-3/6 rounded-r-lg">
                        <img className="h-full rounded-r-lg w-full" src="src/assets/images/ocean.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login