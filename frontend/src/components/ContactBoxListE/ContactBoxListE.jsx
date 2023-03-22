import s from "./style.module.css"
import { BsTelephone } from "react-icons/bs"
import { HiOutlineBuildingOffice } from "react-icons/hi2"
import { Linking } from "react-native";
import { AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai";
import { ContactBoxE } from "../ContactBoxE/ContactBoxE";



export function ContactBoxListE() {
    function callHandler() {
        Linking.openURL(`tel:0498484393`)
    }
    function sendMailHandler() {
        window.open('mailto:coralie.testa@hotmail.com')
    }

    function sendMapHandler() {
        window.open("https://maps.google.com?q="+50.629812996221375+","+5.564986453890931);
    }
    return(
        <div className={s.container}>
            <ContactBoxE 
                logo={<BsTelephone size={35}/>}
                action={callHandler} 
                text="0498/48.43.93"
            />
            <ContactBoxE 
                logo={<AiOutlineMail size={35}/>}
                action={sendMailHandler} 
                text="coralie.testa@hotmail.com"
            />
            <ContactBoxE 
                logo={<HiOutlineBuildingOffice size={37}/>}
                action={sendMapHandler} 
                text="Rue de Chestret 4-6, 4000 Liège"
            />
            <ContactBoxE
                logo={<AiOutlineClockCircle size={35}/>}
                text="Lundi - Vendredi, 9h00 - 16h00"
            />
        </div>
    )
}