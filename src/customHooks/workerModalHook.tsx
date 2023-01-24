import { useEffect, useState } from "react";
import { searkWorks } from "../queries";
import { workerResponse } from "../types/types";

export function useSearchDebounce(value:string, time=250){
    const [debounceValue, setDebounce] = useState(value)
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setDebounce(value)
        }, time)
        return () => {
            clearTimeout(timeout)
        }
    },[value, time])

    return debounceValue
}

export function useSearchWorker(value: string) {
    const [workers, setWorkers] =useState<workerResponse>();
    const searchDebounce = useSearchDebounce(value)
    console.log(searchDebounce)
    useEffect(() => {
        (async()=>{
            const data = await searkWorks(searchDebounce);
            setWorkers(data)
        })()
  }, [searchDebounce]);

  return workers
}