import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrima: '#57c278',
      corSecun: '#d9f7e9'
    },
    {
      nome: 'Front-end',
      corPrima: '#82CFFA',
      corSecun: '#E8F8FF'
    },
    {
      nome: 'Data-Science',
      corPrima: '#A6D157',
      corSecun: '#F0F8E2'
    },
    {
      nome: 'DevOPS',
      corPrima: '#E06B69',
      corSecun: '#FDE7E8'
    },
    {
      nome: 'Mobile',
      corPrima: '#D86EBF',
      corSecun: '#FAE5F5'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaborador = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)} />

      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrima={time.corPrima}
        corSecun={time.corSecun}
        colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)} />)}
    </div>
  );
}

export default App;
