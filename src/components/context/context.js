"use client"

import { createContext , useState} from "react"

export const LangContext = createContext()

export const LangProvider = ({children})=>{

    const [lang , setLang] = useState('ar')
    
    const toggle = ()=>{
        setLang(prev => (prev === "ar" ? "en" : "ar"))
    }

    return(
        <LangContext.Provider value={{toggle , lang}}>
        <div>
            {children}
        </div>
        </LangContext.Provider>
    )

}