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
      const subtrair = tela.split('-');
      const x = Number(subtrair[0]);
      const y = Number(subtrair[1]);
      return atualizar(x - y)
    }

    if (tela.includes('*')) {
      const multiplicar = tela.split('*');
      const x = Number(multiplicar[0]);
      const y = Number(multiplicar[1]);
      return atualizar(x * y)
    }

    if (tela.includes('/')) {
      const dividir = tela.split('/');
      const x = Number(dividir[0]);
      const y = Number(dividir[1]);
      return atualizar(x / y)
    }
  }


  return <>
    <styles.StyledContainer>
      {valor && valor.map((v, index) =>
        <styles.StyledButton
          key={index}

          onClick={() => tela.length < 17 ? atualizar(tela + v) : atualizar(tela)}
        > {v} </styles.StyledButton>
      )}
       <styles.StyledIgual value={'='} onClick={botaoIgual} >=</styles.StyledIgual>

    </styles.StyledContainer>

    <styles.StyledApagar onClick={botaoApagar} >APAGAR</styles.StyledApagar>

  </>
}
