import { useNavigate } from "react-router-dom"
import s from "./style.module.css"

export function Nav() {
    const navigate = useNavigate()
    return(
        <nav>
            <div className={s.buttons}>
                <button 
                    onClick={() => navigate("/")} 
                    className={s.btn}
                    style={{backgroundColor: window.location.pathname==="/"  ? "rgb(148, 195, 197)":"rgb(197, 234, 235)"}}
                >
                    Contact A
                </button>
                <button 
                    onClick={() => navigate("/contactB")} 
                    className={s.btn}
                    style={{backgroundColor: window.location.pathname==="/contactB"  ? "rgb(148, 195, 197)":"rgb(197, 234, 235)"}}
                >
                    Contact B
                </button>
                <button 
                    onClick={() => navigate("/contactC")} 
                    className={s.btn}
                    style={{backgroundColor: window.location.pathname==="/contactC"  ? "rgb(148, 195, 197)":"rgb(197, 234, 235)"}}
                >
                    Contact C
                </button>
                <button 
                    onClick={() => navigate("/contactD")} 
                    className={s.btn}
                    style={{backgroundColor: window.location.pathname==="/contactD"  ? "rgb(148, 195, 197)":"rgb(197, 234, 235)"}}
                >
                    Contact D
                </button>
                <button 
                    onClick={() => navigate("/contactE")} 
                    className={s.btn}
                    style={{backgroundColor: window.location.pathname==="/contactE"  ? "rgb(148, 195, 197)":"rgb(197, 234, 235)"}}
                >
                    Contact E
                </button>
            </div>
        </nav>
    )
}