import './App.css'
import { Card } from './components/card/card'
import { useFoodData } from './hooks/useFoodData'
import { CreateModal } from './create-modal/createModal'

function App() {

  const {data} = useFoodData();
  const [isModelOpen, setIsModelOpen]= useState(false);

  const handleModal = () => {
    setIsModelOpen(prev => !prev);
    console.log(isModelOpen);
  }

  return (
      <div className='container'>
        <h1>Cardápio do Restaurante</h1>
        <div className='card-grid'>
          {data?.map(foodData => 
          <Card
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
           />)}
        </div>

        {isModelOpen && 
        <CreateModal closeModal={handleModal}/>
        }
          <button className="button" onClick={handleModal}>Criar Novo Item</button>
      </div>
  )
}

export default App
