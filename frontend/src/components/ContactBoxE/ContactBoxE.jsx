import s from "./style.module.css"

export function ContactBoxE({logo, text, action}) {
    return(
        <div className={s.container} onClick={action}>
            <div className={s.logo}>
                {logo}
            </div>
            <div className={s.text}>
                {text}
            </div>
        </div>
    )
}