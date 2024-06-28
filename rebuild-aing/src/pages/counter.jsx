import { useState, useReducer } from "react"
import Button from "../components/Element/Button/Button"
import { text } from "@fortawesome/fontawesome-svg-core"

function Counter() {
    const ACTION = {
        INCREMENT : "increment",
        DECREMENT : "decrement",
        CHANGE : "change"
    }
    function reducer(state, action) {
        switch (action.type) {
            case ACTION.INCREMENT: {
                return {
                    ...state,
                    count: state.count + 1
                }
            }
            case ACTION.DECREMENT: {
                return {
                    ...state,
                    count: state.count - 1
                }
            }
            case ACTION.CHANGE:{
                return {
                    ...state,
                    text : action.payload
                }
            }
        }
        throw console.error("unknown");
    }
    const initialState = { count: 0, text : "change this word" }

    const [state, dispatch] = useReducer(reducer, initialState)

    const [inc, setInc] = useState(0)

    const addHandler = () => {
        dispatch({ type: ACTION.INCREMENT })
    }

    const minHandler = () => {
        dispatch({ type: ACTION.DECREMENT})
    }

    const [ubah, setUbah] = useState("Change this text")

    const ganti = (e) => {
        dispatch({type :ACTION.CHANGE, payload : e.target.value})
    }

    return (
        <>
            <div className="h-screen flex justify-center items-center gap-4">
                <Button onClick={addHandler}>Increment</Button>
                <p>{state.count}</p>
                <Button onClick={minHandler}>Decrement</Button>

                {/* for useState */}
                <div>
                    <input onChange={ganti} className="bg-blue-500" />
                    <div>{state.text}</div>
                    {/* <button onClick={ganti}>click disini</button> */}
                </div>

                {/* for useReducer */}
                {/* <div>
                    <input type="text" />
                    <div>{state}</div>
                    <button></button>
                </div> */}
            </div>
        </>
    )
}

export default Counter