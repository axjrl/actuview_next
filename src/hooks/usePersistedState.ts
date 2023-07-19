import {useEffect, useState} from "react";

export function usePersistedState(zustand_state: any) {
    const [state, setState] = useState(zustand_state);

    useEffect(()=>{
        setState(zustand_state)
    }, [zustand_state])

    return state;
}