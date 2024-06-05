import { Link } from "react-router-dom"

function Frame(props) {
    const { children, teks, type } = props
    return (
        <div className="text-black bg-white py-10 px-8 rounded-lg ">
            <p className="text-xl font-bold text-center">{teks}</p>
            {children}
            {/* <p type={type}>
                {type === "login" ? "Don't have an account? " : "Have an account?"}
                {type === "login" && (<Link className="text-blue-400" to="/register"> Register</Link>)}
                {type === "register" && (<Link className="text-blue-400" to="/login"> Login</Link>)}
            </p> */}
            <Conditional type={type}></Conditional>
        </div>
    )
}

function Conditional(props) {
    const {type} = props
    if (type === "login") {
        return (
            <p>
                Don't have an account?
                <Link to="/register"> Register</Link>
            </p>
        )
    } else {
        return (
            <p>
                Have an account?
                <Link to="/login"> Login</Link>
            </p>
        )
    }
}

export default Frame

