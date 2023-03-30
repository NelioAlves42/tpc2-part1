import './NovaDisciplina.css';
import DisciplinaForm from './DisciplinaForm';
import React, { useState } from 'react';

const NovaDisciplina = (props) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const mostrarFormularioHandler = () => {
    setMostrarFormulario(true);
    };

  const ocultarFormularioHandler = () => {
    setMostrarFormulario(false);
    };

  const guardarDisciplina = (disci) => {
    props.onAddDisciplina(disci);
    console.log(disci);
    setMostrarFormulario(false);
  };

  return (
    <div className='new-disciplina'>
      {!mostrarFormulario && (
      <button onClick={mostrarFormularioHandler}>Nova Disciplina</button>
    )}
      {mostrarFormulario && (
      <DisciplinaForm
       onGuardarDisciplina={guardarDisciplina}
       onCancelarDisciplina={ocultarFormularioHandler}
     />
    )}
    </div>
  );
};

export default NovaDisciplina;