import './App.css';
import { useState} from 'react'

function App() {

  const numeros = () => {
    const numeros = [];
      for (let i = 1; i < 10; i++) {
        numeros.push(
          <button onClick={() => operacion(i.toString())} key={i}>{i}</button>
        )
    }
      return numeros;
  }

  const [calculo, setCalculo] = useState("");
  const [resultado, setResultado] = useState(""); 
  
  const operadores = ["+", "-", "*", "/", "."];

  const operacion = valor => {
		if (
			(operadores.includes(valor) && calculo === '') || 
      (operadores.includes(valor) && operadores.includes(calculo.slice(-1)))
		) {
			return;
		}
		setCalculo(calculo + valor);

		if (!operadores.includes(valor)) {
			setResultado(eval(calculo + valor).toString());
		}
	}

  const calcular = () => {
    setCalculo(eval(calculo).toString());
  }

  const borrar = () => {
    if(calculo === "") {
        return;
    } else {
        const valor = calculo.slice(0, -1);
        setCalculo(valor); 
    }
  }
  
  const clear = () => {
    if (calculo === "") {
        return;
    } else {
      const valor = calculo.slice(0, -100);
      setCalculo(valor);
    }
  }

return (
  <div className='app'>
    <div className='calculadora'>
      <div className='resultado'>
        { calculo || "0" }
      </div>
      <div className='operadores'>
        
        <button onClick={ () => operacion('+') }>+</button>
        <button onClick={ () => operacion('-') }>-</button>
        <button onClick={ () => operacion('*') }>x</button>
        <button onClick={ () => operacion('/') }>÷</button>

        <button onClick={ borrar }>DEL</button>
        <button onClick={ clear }>AC</button>

      </div>
      <div className='numeros'>
        { numeros() } 
        <button onClick={ () => operacion('0')}>0</button>
        <button onClick={ () => operacion('.') }>.</button>
        <button onClick={calcular}>=</button>
      </div>
    </div>
  </div>
);
}

export default App;