import '../../styles/components/layout/Header.css';

export const Header = (props) => {
    return (
        <div className='header'>
            <h1>{props.titulo}</h1>
        </div>
    )
}