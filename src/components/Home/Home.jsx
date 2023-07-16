import {SectionStyle} from "./style"
import bgHome2k from "../../assets/bg2k.png"
const Home = ()=>{
    return(
        <SectionStyle id="home">
            <div className="bgHome"></div>
            <div className="containerContent">
                <div className="contentHome">
                    <h1>Ketson Kersen</h1>
                    <h3>Front-End Developer</h3>
                    <div className="between">
                        <a href="https://www.linkedin.com/in/ketsonkersen/" target="_blank">Linkedin</a>
                        <a href="https://github.com/KetsonKersen" target="_blank">GitHub</a>
                    </div>
                </div>
                <img src={bgHome2k}/>
            </div>
        </SectionStyle>
    )
}
export default Home