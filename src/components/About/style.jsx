import styled from "styled-components"
import profile from "../../assets/profile.jpg"

export const SectionStyle = styled.section`
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    .containerAbout{
        width: 100%;
        max-width: 124rem;
        display: grid;
        align-items: end;
        grid-template-columns: 1fr 25%;
        gap: 2rem; 
    }
    
    .containerImage{
        width: 100%;
       
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
        border-radius: 2rem;
        overflow: hidden;
        display: flex;
        align-items: start;
        justify-content: center;
    }
    .about{
        width: 100%;
        height: 100%;
        background-color: var(--bg400);
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
        border-radius: 2rem;
        padding:  5rem;
        text-align: center;
        display: flex;
        align-items: center;
        
        h3{
            font-size: 3rem;
            font-weight: 200;
            margin-bottom: 5rem;
        }
        p{
            font-size: 1.8rem;
            font-weight: 200;
        }
    }
    @media (max-width: 960px){
        min-height: 100%;
        .containerAbout{
            display: flex;
            flex-direction: column-reverse;

            gap: 0rem;
            .about{
                padding:  2rem;
            }
            .about p {
                text-align: center;
              
            }
        }
        .containerImage{
            width: 40rem;
            height: 40rem;
            border-radius: 60rem;
            margin: 2rem auto;
        }
    }
    
    @media screen and (max-width: 620px){
        .containerAbout{
            display: flex;
            flex-direction: column-reverse;
            gap: 0rem;
            
        }

        .containerImage{
            width: 40rem;
            height: 40rem;
        }

    }
    @media screen and (max-width: 560px){
        .containerImage{
            width: 35rem;
            height: 35rem;
        }

    }
    @media screen and (max-width: 400px){
        .containerImage{
            width: 20rem;
            height: 20rem;
      
        }
    }
    @media screen and (max-width: 358px){
        .containerImage{
            width: 15rem;
            height: 15rem;
        }
    }
`;