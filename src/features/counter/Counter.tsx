import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import { MyRootState } from "../../app/store";
import { decrement, increment } from "./counterSlice";

export function Counter() {
    const count = useSelector((state: MyRootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button aria-label="Increment value"
                    onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
        </div>
    )
}