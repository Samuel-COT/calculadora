import { useState } from 'react'
import Title from './components/calculadora/Title/Title'
import Teclado from './components/calculadora/ButtonGrid/buttonGrid';
import Display from './components/calculadora/Display/display'
import * as styles from "./components/calculadora/ButtonGrid/styles"


function App() {

  const [tela, setTela] = useState('')


  const valores = [1,2,3,'+',
                   4,5, 6,'-',
                   7,8, 9,'*',
                   0,'.', '/']

  
  return <>

    <styles.StyledCalc>

      <Title />
      <Display tela={tela} />
      <Teclado valor={valores} atualizar = {setTela} tela = {tela}/>

    </styles.StyledCalc>

   
  </>
}

export default App