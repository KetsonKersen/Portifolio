import { useEffect , useState } from "react"
import { HeaderStyle } from "./style"
import { Link } from "react-scroll"
import logo from "../../assets/logo.png"

import {AiOutlineClose} from "react-icons/ai"
import {HiOutlineMenuAlt3} from "react-icons/hi"

const Header = ()=>{
    const [stateMenu,setStateMenu] = useState(false)

    useEffect(()=>{
        if(window.innerWidth < 720){
            document.querySelector("header ul").style.transform = "translate(0,-125%)"
            document.querySelector("#btnModal").style.display = "block"
        }else{
            document.querySelector("header ul").style.transform = "translate(0,0)"
            document.querySelector("#btnModal").style.display = "none"
        }
        const ListBtn = document.querySelectorAll("header div ul li")
        ListBtn.forEach((btn)=>{
            btn.addEventListener("click",()=>{
                RemoveClass()
                AddClass(btn)
            })
    
        })

    },[])
    const RemoveClass =()=>{
        const ListBtn = document.querySelectorAll("header div ul li")
        ListBtn.forEach((btn)=>{
            btn.classList.remove("active")
        })
    }
    const AddClass = (btn)=>{
        btn.classList.add("active")
    }

    window.addEventListener("scroll",()=>{
        const home = document.querySelector('#home')
            if((scrollY + 100 > home.offsetTop) && (scrollY + 100   < home.offsetTop+home.clientHeight / 2)){
                const ListBtn = document.querySelectorAll("header div ul li")
                ListBtn.forEach((btn)=>{
                    if(btn.classList.contains("active")){
                        btn.classList.remove("active")
                    }
                })
                ListBtn[0].classList.add("active")
            }

            const stacks = document.querySelector('#stacks')
            if((scrollY + 100 > stacks.offsetTop - stacks.offsetTop / 2) && (scrollY + 100 < stacks.offsetTop+stacks.clientHeight - 250)){
                const ListBtn = document.querySelectorAll("header div ul li")
                ListBtn.forEach((btn)=>{
                    if(btn.classList.contains("active")){
                        btn.classList.remove("active")
                    }
                })
                ListBtn[1].classList.add("active")
            }
            
            const about = document.querySelector('#about')
            if((scrollY + 100 > about.offsetTop - 150) && (scrollY < about.offsetTop+about.clientHeight)){
                const ListBtn = document.querySelectorAll("header div ul li")
                ListBtn.forEach((btn)=>{
                    if(btn.classList.contains("active")){
                        btn.classList.remove("active")
                    }
                })
                ListBtn[2].classList.add("active")
            }

            const projects = document.querySelector('#projects')
            if((scrollY + 100 > projects.offsetTop - 200) && (scrollY + 100 < projects.offsetTop+projects.clientHeight / 2)){
                const ListBtn = document.querySelectorAll("header div ul li")
                ListBtn.forEach((btn)=>{
                    if(btn.classList.contains("active")){
                        btn.classList.remove("active")
                    }
                })
                ListBtn[3].classList.add("active")
            }
            const contact = document.querySelector('#contact')
            if(scrollY  > contact.offsetTop - 500){
                const ListBtn = document.querySelectorAll("header div ul li")
                ListBtn.forEach((btn)=>{
                    if(btn.classList.contains("active")){
                        btn.classList.remove("active")
                    }
                })
                ListBtn[4].classList.add("active")
            }

    })
    const ModalMenu = ()=>{
        if(window.innerWidth < 720){
            setStateMenu(!stateMenu)
            if(stateMenu){
                document.querySelector("header ul").style.transform = "translate(0,-125%)"
            }else{
                document.querySelector("header ul").style.transform = "translate(0,0%)"
            }
        }

    }
    window.addEventListener("resize",()=>{
        if(window.innerWidth < 720){
            document.querySelector("header ul").style.transform = "translate(0,-125%)"
            document.querySelector("#btnModal").style.display = "block"
        }else{
            document.querySelector("header ul").style.transform = "translate(0,0%)"
            document.querySelector("#btnModal").style.display = "none"
        }
    })
    
    

    return(
        <HeaderStyle className="contaienr center">
            <div className="container between">
                <div>
                    <img src={logo} width="100%" height="70rem" alt="Logo Kersen"/>
                </div>
                <ul>
                    <Link onClick={()=>ModalMenu()} to="home" spy={true} smooth={true} offset={-100} duration={500}><li className="active">Inicio</li></Link>
                    <Link onClick={()=>ModalMenu()} to="stacks" spy={true} smooth={true} offset={-150} duration={500}><li>Stacks</li></Link>
                    <Link onClick={()=>ModalMenu()} to="about" spy={true} smooth={true} offset={-150} duration={500}><li>Sobre</li></Link>
                    <Link onClick={()=>ModalMenu()} to="projects" spy={true} smooth={true} offset={-50} duration={500}><li>Projetos</li></Link>
                    <Link onClick={()=>ModalMenu()} to="contact" spy={true} smooth={true} offset={80} duration={500}><li>Contato</li></Link>
                </ul>
                <button id="btnModal" onClick={()=>ModalMenu()}>{stateMenu ? <AiOutlineClose color="white" size={35}/> : <HiOutlineMenuAlt3 size={35}/>}</button>
            </div>
        </HeaderStyle>
    )
}
export default Header