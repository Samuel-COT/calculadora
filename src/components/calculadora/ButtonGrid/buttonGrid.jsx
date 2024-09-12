

import * as styles from "./styles";

export default function Teclado({ valor, atualizar, tela }) {



  const botaoApagar = () => {
    atualizar('')
  }

  const botaoIgual = () => {
    if (tela.includes('+')) {
      const soma = tela.split('+');
      const x = Number(soma[0]);
      const y = Number(soma[1]);
      return atualizar(x + y)
    }

    if (tela.includes('-')) {
      const soma = tela.split('-');
      const x = Number(soma[0]);
      const y = Number(soma[1]);
      return atualizar(x - y)
    }

    if (tela.includes('*')) {
      const soma = tela.split('*');
      const x = Number(soma[0]);
      const y = Number(soma[1]);
      return atualizar(x * y)
    }

    if (tela.includes('/')) {
      const soma = tela.split('/');
      const x = Number(soma[0]);
      const y = Number(soma[1]);
      return atualizar(x / y)
    }
  }


  return <>
    <styles.StyledContainer>
      {valor && valor.map((v, index) =>
        <styles.StyledButton
          key={index}

          onClick={() => atualizar(tela + v)}
        > {v} </styles.StyledButton>
      )}

      <styles.StyledIgual value={'='} onClick={botaoIgual} >=</styles.StyledIgual>

    </styles.StyledContainer>

    <styles.StyledApagar onClick={botaoApagar} >APAGAR</styles.StyledApagar>

  </>
}