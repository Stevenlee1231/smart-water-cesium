import { useState } from "react"

interface D {
    data:D|null
}

export const useAsync = () => {
    const [data, setData] = useState<D>()

    const run = (promise: Promise<D>) => {
        promise.then(data => {
           setData(data)
           return data
       })
    }
    return {data,run}
}


   