import { useState } from "react"
import s from "./style.module.css"

export function ContactBoxD({logo, title, text, action, color}) {
    return(
        <div 
            className={s.container}
            onClick={action}
            style={{
                border: `3px solid ${color}`,
                color: `${color}`
            }}
        >
            <div className={s.insideContainer}>
                <div className={s.logo}>
                    {logo}
                </div>
                <div className={s.title}>
                    {title}
                </div>
                <div className={s.text}>
                    {text}
                </div>
            </div>
        </div>
    )
}