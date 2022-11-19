

export function Counter({arrRecords}){

    if(arrRecords.length == 0){
        return(
            <div>

            </div>
        )
    }else{

        return(
            <div className="balanceAndSpan">
                <div className="balance">
                    <h3 className="title3">Valor total:</h3>
                    <p className="title3 textColorPrimary">${arrRecords.reduce((a , b) =>{

                        if(b.typeValue === 'Entrada' ){

                            return a +  b.money 
                        
                        } else{
                            return  a -b.money
                        }

                    },0)}</p>

                </div>
                <span className="text2">O valor se refere ao saldo</span>
            </div>
        )

    }

}