import { useState, useEffect } from "react";
import { getRandomFact } from "../facts";

//CUSTOM HOOK
export function useCatFact(){
    const [fact, setFact] = useState();

    const refreshCat = () =>{
        getRandomFact().then(newFact => setFact(newFact));
    }

    useEffect(refreshCat,[]);

    return { fact, refreshCat}
}