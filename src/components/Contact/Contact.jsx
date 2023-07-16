import {SectionStyle} from "./style"
import imgContact from "../../assets/profileContact.png"
import bgContact from "../../assets/bg2k.png"

const Contact = ()=>{
    return(
        <SectionStyle id="contact">
            <div className="containerContact"> 
                <h3>CONTATO</h3>
                <div className="containerImg">
                    <img src={imgContact} width="100%" height="100%"/>
                </div>

                <div className="containerInf">
                    <p>@k_kersen</p>
                    <p>k.kersen@hotmail.com</p>
                    <p>(31) 9 7307-5968</p>
                    <div className="containerBtn">
                        <a href="https://www.linkedin.com/in/ketsonkersen/" target="_blank">Linkedin</a>
                        <a href="https://github.com/KetsonKersen" target="_blank">GitHub</a>
                    </div>
                </div>
                <img className="bgContact" src={bgContact}/>
            </div>
        </SectionStyle>
    )
}
export default Contact