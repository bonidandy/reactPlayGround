import { useState } from "react";

function Hitung() {
    const [hitung, setHitung] = useState(0)

    function ngitung() {
        setHitung(
            hitung + 1
        )
    }

    return (
        <>
            {/* <input className="border border-blue-500" type="text" value={hitung} /> */}
            <p>{hitung}</p>
            <button onClick={ngitung}>Click me</button>
        </>
    )
}

export default Hitung