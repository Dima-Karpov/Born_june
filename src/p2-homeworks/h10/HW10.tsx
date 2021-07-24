import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { loadingAC } from "./bll/loadingReducer";
import { RootState } from "./bll/store";
import { Preloader } from "./preloader/preloader";

function HW10() {
    const isLoading = useSelector((state: RootState) => state.loading.isLoading);
    const dispatch = useDispatch()
    // useSelector, useDispatch
    // const isloading = false;

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(() => dispatch(loadingAC()), 4000)
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            homeworks 10

         
            {isLoading
                ? (
                    <div>{<Preloader/>}</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>look loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
