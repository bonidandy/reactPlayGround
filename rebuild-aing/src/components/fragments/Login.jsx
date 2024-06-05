import Input from "../Element/Input/Input"
import Tombol from "../Element/Button/Button"
function Login() {
    return (
        <div className="h-screen flex justify-center items-center bg-[#F9EFF0]">
            <div className="bg-white w-3/5 h-2/5 md:h-3/4 p-5 md:p-0 flex rounded">
                <div className="w-full flex justify-center">
                    <div className="pt-10">
                        <p className="text-lg"><b>Log in</b></p>
                        <div className="text-sm pt-2">
                            <p>Log in to your account to upload or download</p>
                            <p> pictures, videos, or music</p>
                        </div>
                        <Input height="h-10" gap="pt-10" length="w-full" type="text" placeholder="Enter your email address"></Input>
                        <div className="flex pt-4 items-center justify-between">
                            <p className="text-[#397893] ">forgot password ?</p>
                            <Tombol color="bg-[#0E7975] shadow-lg shadow-[#0E7975]" width="w-16 md:w-20" height="h-10">Next</Tombol>
                        </div>
                    </div>
                </div>

                <div className="hidden md:inline bg-green-500 w-3/6 rounded-r-lg">
                    <img className="h-full rounded-r-lg w-full" src="src/assets/images/ocean.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Login