import {SectionStyle} from "./style"
import profile from "../../assets/profile.jpg"
const About = ()=>{
    return(
        <SectionStyle id="about">
            <div className="containerAbout">
                <div className="about">
                    <div>
                        <h3>Sobre mim</h3>
                        <p>
                            Me chamo Ketson Kersen, tenho 25 anos.
                            Sou de Contagem - MG.
                        </p>

                        <p> 
                            Apaixonado por desenvolvimento web e bastante curioso no mundo da tecnologia.
                            Experiência em React.js, utilizando Vite e Styled-components.
                            E também possuo conhecimentos sólidos em desenvolvimento com Next.js e TailwindCSS.
                        </p>
                        <p>
                            Atualmente sou um desenvolvedor Front-end, mas os estudos não param e logo me tornarei
                            um dev Full-Stack. 
                        </p>
                    </div> 
                </div>
                <div className="containerImage">
                   <img src={profile} width="100%" height="auto"/>
                </div>
            </div>
        </SectionStyle>
    )
}
export default About
