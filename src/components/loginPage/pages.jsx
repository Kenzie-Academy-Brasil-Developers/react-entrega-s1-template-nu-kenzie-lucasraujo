
import {useState} from "react"
import './page1.css'
import './page2.css'
import '../styles/texts.css'
import '../styles/globalStyles.css'
import '../styles/buttons.css'
import'../styles/inputs.css'

import illustration from "../../imgs/illustration.svg"
import { CreateForm } from "../form/form"
import{Counter} from "../counter/counter"
import { AsideAndCards } from "../aside/aside"


function LoginPages(){

    const [arrRecords, setArrRecords ] = useState([])



    
    const [estado , setEstado ] = useState(true) 
    if (estado){

        return (
            <div className="pages1">

                <section className="sectionContent">

                

                <h1 className="title2 textColorGrey1">
                    <span className="textColorPrimary">Nu</span> Kenzie
                </h1>
                <h2 className="title1 textColorGrey1">
                    Centralize o controle das suas finanças
                </h2>
                <p className="text1 textColorGrey1">
                    de forma rápida e segura
                </p>

                <button className="button1 text1" onClick={()=> setEstado(false)}>Iniciar</button>

                

                </section>

                <section className="sectionAsside">

                    <img src={illustration} alt="illustration" className="illustration" />

                </section>


            </div>

        )


    }else{

        return (
            <div>
                <header>
                    <div className="contentHeader">

                        <div className="DivtitleHeader">
                            <h1 className="title2 textColorGrey4">
                                <span className="textColorPrimary">Nu</span> Kenzie
                            </h1>
                            
                        </div>

                        <div className="divButtonHeader">

                            <button className="button2 text1" onClick={()=>setEstado(true)}>Inicio</button>

                        </div>

                    </div>

                </header>


                <div className="divSectionAndAsside">

                    <section className="sectionForm">

                        <div className="divForm">

                          <CreateForm  setArrRecords={setArrRecords} arrRecords={arrRecords} />
                          

                        </div>   

                        <div className="divCounter">

                          <Counter arrRecords={arrRecords} />


                        </div>

                    </section>


                    <AsideAndCards setArrRecords={setArrRecords} arrRecords={arrRecords} />


                    
                </div>


            </div>
        )

    }
}


export default LoginPages