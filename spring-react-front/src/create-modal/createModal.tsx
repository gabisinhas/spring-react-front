import React, { use, useState } from 'react'
import { useFoodDataMutate } from '../hooks/useDataFoodDataMutate'
import { FoodData } from '../interface/FoodData'
import './createModal.css'

interface InputProps {
    label: string,
    value: string|number,
    updateValue(value:any):void
}

const Input = ({label,value,updateValue} : InputProps) => {
    return(
        <>
            <label><b>{label}</b></label>
            <input className='inputNewItem' value={value} onChange={(e) => updateValue(e.target.value)}/>
        </>
    )

}


export const CreateModal = () => {
    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const {mutate} = useFoodDataMutate();

    const submit=()=>{
        const foodData: FoodData = {
            title,
            price,
            image
        }
        mutate(foodData);

    }

  return (
    <div className='modal'>
        <h2 className='header'>Cadastre um novo item no cardápio</h2>
        <form>
            <Input label="Nome do prato" value={title} updateValue={setTitle} />
            <Input label="Preço" value={price} updateValue={setPrice} />
            <Input label="Imagem" value={image} updateValue={setImage} />
            <button className="button-modal" type="submit" onClick={submit}>Cadastrar</button>
        </form>
    </div>
  )
}
