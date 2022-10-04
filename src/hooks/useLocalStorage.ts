import { useEffect, useState } from "react";

// custom hook allowing me to refresh the page without loosing the shopping cart content

export function useLocalStorage<T> (key: string, initialValue: T | (() => T)) {
    const [value, setValue] = useState<T>(()=>{
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === "function") {
            return (initialValue as () => T)()
        } else {
            return initialValue
        }
    })
    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue] as [typeof value, typeof setValue]
}