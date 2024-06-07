import Input from "../Element/Input/Input"
import Tombol from "../Element/Button/Button"
function SignUp() {
    return (
        <>
            <div className="flex justify-center items-center h-screen bg-[#F3F9FE]">
                <div className="bg-[#E8F1FE] p-4 rounded-lg">
                    <div className="h-[30rem] bg-[#FFFFFF] w-80 rounded-lg flex flex-col items-center">
                        <p className="text-lg pt-5"><b>Join the </b></p>
                        <p className="text-lg"><b>community</b></p>
                        <p className="pt-2 text-sm">Take your art to the next level. Get it</p>
                        <p className="text-sm">seen by millions of people</p>
                        <div className="pt-4">
                            <Tombol>Join with facebook</Tombol>
                        </div>
                        <p className="pt-4">or</p>
                        <div className="flex gap-3 pt-2">
                            <Input type="text" length="w-20" placeholder="First name" />
                            <Input type="text" length="w-20" placeholder="Last name" />
                        </div>
                        <div>
                            <Input text="lowercase" type="email" length="w-44" placeholder="Email" className="pt-10" gap="pt-4" />
                            <Input text="lowercase" type="password" length="w-44" placeholder="Password" gap="pt-4" />
                        </div>
                        <div className="pt-4">
                            <Tombol bgColor="bg-[#1E2B4B]">Create new account</Tombol>
                        </div>
                        <div className="pt-5">
                            <p className="text-xs">By joining, you agree to our Terms of</p>
                            <p className="text-xs">Service and Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp