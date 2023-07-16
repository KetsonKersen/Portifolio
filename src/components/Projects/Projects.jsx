import { useEffect, useState } from "react"
import { SectionStyle } from "./style"

import BGacademia2k from "../../assets/Academia2k.png"
import CardapioOnline from "../../assets/CardapioOnline.png"
import Starmovie from "../../assets/Starmovie.png"

import VideoAcadenia from "../../assets/VideoAcademia2k.mp4"
import VideoCardapioOnline from "../../assets/VideoCardapioOnline.mp4"
import VideoStarMovie from "../../assets/VideoStarMovie.mp4"

import {BsCodeSlash} from "react-icons/bs"
import {AiOutlinePlayCircle , AiOutlineClose} from "react-icons/ai"

const ListProjects = [
    {
        img:BGacademia2k,
        video: VideoAcadenia,
        name:'Academia 2K',
        linkGit:"https://github.com/KetsonKersen/academia2k",
        linkDemo:"https://academia2k.vercel.app/",
        inf: "Primeiro projeto desenvolvido com React. Landing page para uma academia, dando ao usuário uma boa experiência de navegação, podendo ainda realizar um cálculo de IMC diretamente no site da academia. Projeto desenvolvido em React e Styled-Components."
    },
    {
        img:CardapioOnline,
        video: VideoCardapioOnline,
        name:'Cardapio Online',
        linkGit:"https://github.com/KetsonKersen/2kcardapio-online",
        linkDemo:"https://2kcardapio-online.vercel.app/",
        inf: "2kCardapio-Online é um site de pedidos online, o usuário pode navegar pelo sistema de categorias para para escolher o seu pedido, confirmar carrinho, adicionar endereço para entrega, escolher a forma de pagamento e confirmar pedido. Aplicação desenvolvida com React.js , TypeScript e Next.js utilizando Tailwind. Consumindo a API do VIACEP para realizar a busca de CEP do usuário e preencher os campos de endereço necessários"
    },
    {
        img:Starmovie,
        video: VideoStarMovie,
        name:'Star Movie',
        linkGit:"https://github.com/KetsonKersen/StarMovie",
        linkDemo:"https://star-movie-ten.vercel.app/",
        inf: "StarMovie é uma aplicação que reúne informações sobre produções, permitindo que os usuários pesquisem seus filmes favoritos, além de poder assitir ao trailer. Podendo também encontrar novos filmes através dos filtros de categorias ou realizando uma busca pelo nome do filme. A aplicação foi desenvolvida em React, utilizando Vite.js. Consumindo a API do themoviedb."
    },
]



const Projects = ()=>{
    const [state,setState] = useState(ListProjects[0])
    const [stateActive,setStateActive] = useState(false)
    useEffect(()=>{
        if(window.innerWidth > 720){
            setStateActive(!stateActive)
        }
    },[])
    
    const Active = (element,Product)=>{
        const divElements = document.querySelectorAll(".containerImg img")
        divElements.forEach((div)=>{
            div.style.transform = "scale(100%)"
        })
        element.children[0].style.transform = "scale(110%)"
        setState(Product)
    }

    const ToggleModal = ()=>{
        if(window.innerWidth < 720){
            setStateActive(!stateActive)
        }
    }
    window.addEventListener("resize",()=>{
        if(window.innerWidth < 720){
            setStateActive(false)
        }else{
            setStateActive(true)
        }
    })
    return(
        <SectionStyle id="projects">
            <div className="container containerProjects">
                <div className="containerOptions">
                    <h3>Projetos</h3>
                    {ListProjects.map((Project)=>{
                        return(
                            <div onClick={()=>ToggleModal()} className="containerImg" onMouseEnter={(e)=>Active(e.currentTarget,Project)}>
                                <img src={Project.img} width="100%" height="auto"/>
                                <p>{Project.name}</p>
                            </div>
                        )
                    })}       
                </div>
                
                {stateActive && 
                    <div className="containerPreview">
                        <button className="close" onClick={()=>ToggleModal()}><AiOutlineClose color="white" size={35}/></button>
                        <h2>{state.name}</h2>
                        {/* <img src={state.img} width="100%" height="auto"/> */}
                        <video src={state.video} controls autoPlay loop width="100%" height="auto"/>
                        <p>{state.inf}</p>
                        <div className="containerBtn">
                            <a href={state.linkGit} target="_blank">Code <BsCodeSlash size={25}/></a>
                            <a href={state.linkDemo} target="_blank">Demo <AiOutlinePlayCircle size={25}/></a>
                        </div>
                    </div>
                }
            </div>
       </SectionStyle>
    )
}
export default Projects
