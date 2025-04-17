import React, { use, useState } from 'react'

interface InputProps {
    label: string,
    value: string|number,
    updateValue(value:any):void
}

const Input = ({label,value,updateValue} : InputProps) => {
    return(
        <>
        <label>{label}</label>
        <input value={value} onChange={(e) => updateValue(e.target.value)}/>
        </>
    )

}


export const createModal = () => {
    
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')


  return (
    <div className='modal-overflow'>
        <h2>Cadastre um novo item no cardápio</h2>
        <form>
            <Input label="Nome do prato" value={title} updateValue={setTitle} />
            <Input label="Preço" value={price} updateValue={setPrice} />
            <Input label="Imagem" value={image} updateValue={setImage} />
            <button type='submit'>Cadastrar</button>
        </form>
    
    </div>
  )
}
