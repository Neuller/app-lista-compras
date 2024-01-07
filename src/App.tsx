import { useState } from 'react'
import './App.css'
import { ListaCompras } from './components/lista_compras/ListaCompras'
import { useListaComprasData } from './components/lista_compras/hooks/useListaComprasData'
import { CreateModal } from './components/lista_compras/modal/createModalCadastro'

function App() {
  const [count, setCount] = useState(0)
  const { data } = useListaComprasData();
  const [isModalOpen, setisModalOpen] = useState(false);
  const abrirModalCadastro = () => {
    setisModalOpen(prev => !prev)
  }

  return (
    <>
      <div className='container'>
        <div>
          <h1>LISTA DE COMPRAS</h1>
          <div className='listaCompras'>
            {data?.map(itemData => <ListaCompras descricao={itemData.descricao} status={itemData.status} />)}
          </div>
        </div>

        <div>
          {isModalOpen && <CreateModal closeModal={abrirModalCadastro} />}
        </div>

        <button onClick={abrirModalCadastro}>NOVO</button>

      </div>
    </>
  )
}

export default App
