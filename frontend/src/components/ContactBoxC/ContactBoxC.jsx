import { useState } from "react"
import s from "./style.module.css"

export function ContactBoxC({logo, title, text, action}) {
    const [isHovered, setIsHovered] = useState(false)
    function onMouseEnterHandler() {
        setIsHovered(true)
    }
    function onMouseLeaveHandler() {
        setIsHovered(false)
    }
    return(
        <div 
            className={s.container}
            onClick={action}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
        >
            {isHovered ?
            (<div className={s.roundedContainer}>
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
            )
            :
            (<>
                <div className={s.logo}>
                    {logo}
                </div>
                <div className={s.title}>
                    {title}
                </div>
                <div className={s.text}>
                    {text}
                </div>
            </>
            )
            }
        </div>
    )
}