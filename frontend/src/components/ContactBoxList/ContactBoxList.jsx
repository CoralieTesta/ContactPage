import s from "./style.module.css"
import { BsTelephone } from "react-icons/bs"
import { GrMailOption } from "react-icons/gr"
import { HiOutlineBuildingOffice } from "react-icons/hi2"
import { Linking } from "react-native";
import { ContactBox } from "../ContactBox/ContactBox";
import { AiOutlineClockCircle } from "react-icons/ai";



export function ContactBoxList() {
    function callHandler() {
        Linking.openURL(`tel:0472620532`)
    }
    function sendMailHandler() {
        window.open('mailto:demanez.sarah@gmail.com')
    }

    function sendMapHandler() {
        window.open("https://maps.google.com?q="+50.629812996221375+","+5.564986453890931);
    }
    return(
        <div className={s.container}>
            <ContactBox 
                logo={<BsTelephone size={22}/>}
                action={callHandler} 
                text="0472/62.05.32"
                textButton="APPELER" 
            />
            <ContactBox 
                logo={<GrMailOption size={22}/>}
                action={sendMailHandler} 
                textButton="EMAIL" 
                text="demanez.sarah@gmail.com"
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