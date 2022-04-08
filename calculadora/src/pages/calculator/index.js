import { useState } from "react";
import { evaluate } from "mathjs";
import "./style.css";

export const Calculator = () => {
  let history = [];

  // Montar a operação
  const [actualHistory, setActualHistory] = useState(history);
  const [showOperation, setShowOperation] = useState();

  // Funções
  const getInput = (event) => {
    let input = event.target.value;
    setShowOperation(input);
  };

  const showResult = () => {
    setActualHistory(history);
    const formatedValue = evaluate(showOperation);
    history.push([showOperation, "=", formatedValue]);
  };

  const clearAll = (event) => {
    setActualHistory([])
  }

  return (
    <div className={"layoutCalculator"}>
      {/* Tela de histórico */}
      <div className={'textTitle'}>Historico</div>
      <p className={"valueHistory"}>{actualHistory}</p>
      {actualHistory.length !== 0 && actualHistory.length < 1 &&
      <p>A Operação não pode ser efetuada</p>
      }
      <section className={"screenHistory"}></section>
      <hr></hr>

      {/* Tela de visualização das operações */}
      <input className={'screenCalc'} onChange={getInput} type="text" name="name" />

      <div className={'alignContent'}>
        {/* Teclas operadoras */}
        <div className={"flex"} >
          <section className={"containerKeyOperations"}>
          <button className={"buttonKey"}> + </button>
          <button className={"buttonKey"}> - </button>
          <button className={"buttonKey"}> * </button>
          <button className={"buttonKey"}> / </button>
          </section>
          <button className={"buttonClear"}  onClick={clearAll}> C </button>
        </div>

        {/* Teclado numérico + igualdade + "," */}
        <div className={"containerKey"}>
          <button className={"buttonKey"}> 1 </button>
          <button className={"buttonKey"}> 2 </button>
          <button className={"buttonKey"}> 3 </button>
          <button className={"buttonKey"}> 4 </button>
          <button className={"buttonKey"}> 5 </button>
          <button className={"buttonKey"}> 6 </button>
          <button className={"buttonKey"}> 7 </button>
          <button className={"buttonKey"}> 8 </button>
          <button className={"buttonKey"}> 9 </button>
          <button className={"buttonKey"}> 0 </button>
          <button className={"buttonKey"}> . </button>
          <button className={"buttonKeyEqual"} onClick={showResult}>
            {" "}
            ={" "}
          </button>
        </div>
      </div>
    </div>
  );
};