import Input from "../Element/Input/Input"
import Button from "../Element/Button/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Google from '/icons8-google.svg'
import Facebook from '/icons8-facebook.svg'
import { Link } from "react-router-dom"
function Login() {
    function account(event) {
        event.preventDefault()
        localStorage.setItem("email", event.target.Inputemail.value)
        localStorage.setItem("password", event.target.Inputpassword.value);
        console.log(localStorage.event.target.email.value)
        console.log(localStorage.event.target.password.value)
        window.location.href = "/product"
    }
    return (
        <div className="h-screen flex justify-center items-center bg-[#F9EFF0]">
            <div className="bg-white w-3/5 h-fit md:h-3/4 p-5 md:p-0 flex rounded">
                <div className="w-full flex justify-center">
                    <div className="md:pt-10">
                        <p className="text-lg"><b>Log in</b></p>
                        <div className="text-sm pt-2 cursor-default">
                            <p>Log in to your account to upload or download</p>
                            <p> pictures, videos, or music</p>
                        </div>
                        <form action="" onSubmit={account}>
                            <div className="pt-10 gap-2 flex flex-col">
                                <Input id="Inputemail" height="h-10" length="w-full" type="email" placeholder="Enter your email address"></Input>
                                <Input id="Inputpassword" height="h-10" length="w-full" type="password" placeholder="Enter your Password"></Input>
                            </div>
                            <div className="flex pt-4 items-center justify-between">
                                <p className="text-[#397893] text-sm cursor-pointer">forgot password ?</p>
                                <div>
                                    <Button className="shadow-md shadow-[#0E7975] flex items-center justify-center" bgColor="bg-[#0E7975] hover:bg-[#2b9c98]" width="w-16 md:w-20" height="h-[2.31rem] md:h-10">
                                        <Link to={"/product"}>Next</Link>
                                        <div className="pl-2">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </form>
                        <hr className="mt-7" />
                        <p className="font-light flex justify-center text-xs md:text-sm pt-2 md:pt-5 cursor-default">or login with</p>
                        <div className=" gap-3 flex items-center flex-col md:flex-row md:justify-between pt-2">
                            <Button className="text-blue-500 border font-medium  border-slate-400" width="w-24 md:w-[8.43rem]" bgColor="bg-white hover:bg-slate-100" >
                                <div className="flex items-center justify-center">
                                    <img src={Google} alt="" className="w-6 pr-1" />
                                    <p>Google</p>
                                </div>
                            </Button>
                            <Button className=" text-blue-500 border font-medium border-slate-400" width="w-24 md:w-[8.43rem]" bgColor="bg- hover:bg-slate-100">
                                <div className="flex items-center justify-center">
                                    <img src={Facebook} alt="" className="w-6 pr-1" />
                                    <p>Facebook</p>
                                </div>
                            </Button>
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