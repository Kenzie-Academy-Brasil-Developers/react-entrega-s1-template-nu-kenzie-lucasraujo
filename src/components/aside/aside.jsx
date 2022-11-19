import { Cards } from "./cards/cards";
import React, { useState } from 'react';
import { CardsDefault } from "./cards/cardsDefault";


export function AsideAndCards({setArrRecords,arrRecords}){

    const [filter,setFilter] = useState("Todos")

    const filtered = arrRecords.filter(rec => filter === "Todos" ? true: rec.typeValue === filter) 



    return(
        <aside>

            <div className="divTitleAndButton">
                
                <h3 className="title3">Resumo financeiro</h3>

                <div>

                    <button className="button3 text1" onClick={() => setFilter("Todos")  }>Todos   </button>
                    <button className="button3 text1" onClick={() => setFilter("Entrada")}>Entradas</button>
                    <button className="button3 text1" onClick={() => setFilter("Despesa")}>Despesas</button>

                </div>

            </div>

            <div>

                <ul>

                    {arrRecords.length === 0 ?<CardsDefault /> : filtered.map((transaction, index)=>{return <Cards arrRecords={arrRecords} setArrRecords={setArrRecords} transaction={transaction}  key={index}  />},)}

                </ul>

            </div>

        </aside>
    )
}