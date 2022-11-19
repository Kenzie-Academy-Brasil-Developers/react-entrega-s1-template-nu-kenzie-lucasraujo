import React from 'react';





export function Cards({arrRecords,setArrRecords,transaction}){
    
    function Excluir(arrRecords,setArrRecords,objTransaction){

      setArrRecords ( arrRecords.filter((elem)=> elem.id !== objTransaction.id) )
        
    
    }


    if(transaction.typeValue === "Entrada"){

        return (

            
    
            <li className="card">
    
                <div className="tipCard">
    
                </div>
                <div className="contentCard">
                    <div className="titleAndDivButon">
                        <h2 className="title3">{transaction.description}</h2>
                        <div className="divMoneyAndTrash">
                            <span className="text2">R$ {transaction.money},00</span>
                            <button className="buttonTrash" onClick={()=> Excluir(arrRecords,setArrRecords,transaction)}></button>
                        </div>
                    </div>
                    <span className="text2">{transaction.typeValue}</span>
                </div>


            </li>
           
        )

    }else{

        return (
    
            <li className="card">
    
                <div className="tipCard2">
    
                </div>
                <div className="contentCard">
                    <div className="titleAndDivButon">
                        <h2 className="title3">{transaction.description}</h2>
                        <div className="divMoneyAndTrash">
                            <span className="text2">R$ {transaction.money},00</span>
                            <button className="buttonTrash" onClick={()=> Excluir(arrRecords,setArrRecords,transaction)}></button>
                        </div>
                    </div>
                    <span className="text2">{transaction.typeValue}</span>
                </div>
    
            </li>
        )


    }




}