import './Time.css'
import Colaborador from '../Colaborador'
const Time = (props) => {

    const css = { backgroundColor: props.corSecun }

    return (
         /* qualquercoisa apaga  */(props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrima }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador  corDeFundo={props.corPrima}key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
        : ''
    )
}

export default Time 