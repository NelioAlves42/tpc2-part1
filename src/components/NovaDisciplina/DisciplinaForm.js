import React, { useState } from 'react';
import './DisciplinaForm.css';

const DisciplinaForm = (props) => {
  const [nomeDisciplina, setNomeDisciplina] = useState('');
  const [nota, setNota] = useState('');
  const [dataAvalia, setDataAvalia] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  const nomeChangeHandler = (event) => {
    setNomeDisciplina(event.target.value);
  };

  const notaChangeHandler = (event) => {
    setNota(event.target.value);
  };

  const dataAvaliaChangeHandler = (event) => {
    setDataAvalia(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const novaDisciplina = {
      dataAvalia: new Date(dataAvalia),
      nomeDisciplina: nomeDisciplina,
      valorNota: nota,
    };

    props.onGuardarDisciplina(novaDisciplina);

    setDataAvalia('');
    setNomeDisciplina('');
    setNota('');
    setFormVisible(false);

    console.log(novaDisciplina);
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div>
      {!formVisible && (
        <button type="button" onClick={toggleFormVisibility}>
          Nova Disciplina
        </button>
      )}
      {formVisible && (
        <form onSubmit={submitHandler}>
          <div className="new-disciplina__controls">
            <div className="new-disciplina__control">
              <label>Disciplina</label>
              <input
                type="text"
                value={nomeDisciplina}
                onChange={nomeChangeHandler}
              />
            </div>
            <div className="new-disciplina__control">
              <label>Nota</label>
              <input
                type="number"
                min="0"
                step="1"
                max="20"
                value={nota}
                onChange={notaChangeHandler}
              />
            </div>
            <div className="new-disciplina__control">
              <label>Data avaliação</label>
              <input
                type="date"
                min="2010-01-01"
                step="1"
                max="2050-12-31"
                value={dataAvalia}
                onChange={dataAvaliaChangeHandler}
              />
            </div>
          </div>
          <div className="new-disciplina__actions">
            <button type="submit">Adicionar Disciplina</button>
            <button type="button" onClick={toggleFormVisibility}>
              Cancelar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default DisciplinaForm;
