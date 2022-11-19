import { useState } from "react";



export function CreateForm({setArrRecords, arrRecords}){

    const [desc, setDesc]= useState('');

    const [money, setMoney ]= useState('');

    const [typeValue, setTypeValue] = useState('Entrada');



    function submitForm(event){
        event.preventDefault();


        let objRecord = {

            description:desc,
            money:money,
            typeValue:typeValue,
            id:Math.random()

        }

        setArrRecords( [...arrRecords, objRecord] )

        setDesc("")
        setMoney("")
        setTypeValue('Entrada')

    }

    return(


        <form onSubmit={submitForm}>
                <label htmlFor="inputDesc " className="text2">Descrição</label>

                <input value={desc} className="input1" type="text" id="inputDesc" placeholder="Digite aqui sua descrição" onChange={event => setDesc(event.target.value)} />
                <span className="text2">Ex: Compra de roupas</span>

                <div className="divMoneyAndType ">
                    <div className="divMoney">
                        <label htmlFor="money " className="text2">Valor</label>
                        <input value={money} className="input2" id="money" type="Number" onChange={event => setMoney(Number(event.target.value))} placeholder="R$" />
                    </div>

                    <div className="divType">
                        <label htmlFor="TypeValue " className="text2">Tipo de valor</label>
                        <select value={typeValue} className="input2" name="" id="TypeValue" onChange={event => setTypeValue(event.target.value)}>
                            <option value="Entrada">Entrada</option>
                            <option value="Despesa">Despesa</option>
                        </select>
                    </div>

                </div>

            <button type="Submit" className="button1 text1"  >Inserir valor</button>

        </form>

    )
    
}