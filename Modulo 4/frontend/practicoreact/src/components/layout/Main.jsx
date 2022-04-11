import '../../styles/components/layout/Main.css';

export const Main = (props) => {
    return (
        <div className='main'>
            <h1 className='titulo'>{props.titulo}</h1>
            <h3 className='titulo'>{props.subtitulo}</h3>
            <p>{props.cuerpo}</p>
        </div>
    )
}