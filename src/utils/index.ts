import { useEffect } from "react"

export const resetRoute = () => window.location.href = window.location.origin

export const useDocumentTitle = (title:string) => {
    useEffect(() => {
        document.title=title
    },[title])
}