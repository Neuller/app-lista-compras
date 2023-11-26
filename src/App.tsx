import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ListaCompras } from './components/lista-compras/ListaCompras'
import { ListaComprasData } from './components/interface/lista-compras-data'
import { useListaComprasData } from './hooks/useListaComprasData'

function App() {
  const [count, setCount] = useState(0)
  const { data } = useListaComprasData();

  return (
    <>
      <div className='container'>
        <h1>LISTA DE COMPRAS</h1>
        <div className='listaCompras'>
          {data?.map(itemData => <ListaCompras descricao={itemData.descricao} status={itemData.status} />)}
        </div>
      </div>
    </>
  )
}

export default App
