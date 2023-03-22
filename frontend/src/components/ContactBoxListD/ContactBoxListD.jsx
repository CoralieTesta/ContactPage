import s from "./style.module.css"
import { BsTelephone } from "react-icons/bs"
import { AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai"
import { HiOutlineBuildingOffice } from "react-icons/hi2"
import { Linking } from "react-native";
import { ContactBoxC } from "../ContactBoxC/ContactBoxC";
import { ContactBoxD } from "../ContactBoxD/ContactBoxD";



export function ContactBoxListD() {
    function callHandler() {
        Linking.openURL(`tel:0498/48.43.93`)
    }
    function sendMailHandler() {
        window.open('mailto:coralie.testa@hotmail.com')
    }

    function sendMapHandler() {
        window.open("https://maps.google.com?q="+50.629812996221375+","+5.564986453890931);
    }
    return(
        <div className={s.container}>
            <ContactBoxD
                logo={<BsTelephone size={50}/>}
                action={callHandler} 
                text="0498/48.43.93"
                title="Téléphone" 
                color="#3F87A3"
            />
            <ContactBoxD
                logo={<AiOutlineMail size={50}/>}
                action={sendMailHandler} 
                text="coralie.testa@hotmail.com"
                title="E-mail" 
                color="#A33D9A"
            />
            <ContactBoxD
                logo={<HiOutlineBuildingOffice size={50}/>}
                action={sendMapHandler} 
                text="Rue de Chestret 4-6, 4000 Liège"
                title="Itinéraire" 
                color="#A39F35"
            />
            <ContactBoxD
                logo={<AiOutlineClockCircle size={50}/>}
                text="Lundi - Vendredi, 9h00 - 16h00"
                title="Horaire" 
                color="#A33A3A"
            />
        </div>
    )
}