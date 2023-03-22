import s from "./style.module.css"
import { BsTelephone } from "react-icons/bs"
import { GrMailOption } from "react-icons/gr"
import { HiOutlineBuildingOffice } from "react-icons/hi2"
import { Linking } from "react-native";
import { ContactBox } from "../ContactBox/ContactBox";
import { AiOutlineClockCircle } from "react-icons/ai";



export function ContactBoxList() {
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
            <ContactBox 
                logo={<BsTelephone size={22}/>}
                action={callHandler} 
                text="0498/48.43.93"
                textButton="APPELER" 
            />
            <ContactBox 
                logo={<GrMailOption size={22}/>}
                action={sendMailHandler} 
                textButton="EMAIL" 
                text="coralie.testa@hotmail.com"
            />
            <ContactBox 
                logo={<HiOutlineBuildingOffice size={24}/>}
                action={sendMapHandler} 
                text="Rue de Chestret 4-6, 4000 Liège"
                textButton="ITINERAIRE" 
            />
            <ContactBox
                logo={<AiOutlineClockCircle size={24}/>}
                text="Lundi - Vendredi, 9h00 - 16h00"
                textButton="HORAIRE" 
            />
        </div>
    )
}