import { SectionStyled } from "./style"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import ts from "../../assets/ts.png"
import react from "../../assets/react.png"
import next from "../../assets/next.png"
import vite from "../../assets/vite.png"
import styledcomponents from "../../assets/styledcomponent.png"
import tailwind from "../../assets/tailwind.png"
import git from "../../assets/git.png"
import github from "../../assets/github.png"

const Stacks = ()=>{
    return(
        <SectionStyled id="stacks">
            <div className="containerSkills">
                <div className="containerHard">
                    <h3>Hard Skills</h3>
                    <ul>
                        <li>
                            <img src={html} width="auto" height="100%"/>
                        </li>
                        <li>
                            <img src={css} width="auto" height="100%"/>
                        </li>
                        <li>
                            <img src={js} width="auto" height="100%"/>
                        </li>
                        <li>
                            <img src={ts} width="auto" height="100%"/>
                        </li>
                        <li>
                            <img src={react} width="auto" height="100%"/>
                        </li>
                        <li>
                            <img src={next} width="auto" height="100%"/>
                        </li>
                        <li>
                            <img src={vite} width="auto" height="100%"/>
                        </li>
                        <li>
                            <img src={styledcomponents} width="auto" height="100%"/>
                        </li>
                        <li>
                            <img src={tailwind} width="auto" height="100%"/>
                        </li>
                        <li>
                            <img src={git} width="auto" height="100%"/>
                        </li>
                    </ul>
                </div>

                <div className="containerSoft">
                    <h3>Soft Skills</h3>
                    <div>
                        <ul>
                            <li>Comunicação</li>
                            <li>Trabalho em equipe</li>
                            <li>Gestão de tempo</li>
                            <li>Adaptabilidade</li>
                            <li>Independencia</li>

                            <li>Comunicação</li>
                            <li>Trabalho em equipe</li>
                            <li>Gestão de tempo</li>
                            <li>Adaptabilidade</li>
                            <li>Independencia</li>

                            <li>Comunicação</li>
                            <li>Trabalho em equipe</li>
                            <li>Gestão de tempo</li>
                            <li>Adaptabilidade</li>
                            <li>Independencia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </SectionStyled>
    )
}
export default Stacks