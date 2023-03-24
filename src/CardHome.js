import gato from './assets/cute-cat-photos-1593441022.jpg';

const CardHome = ({ nombre, resumen }) => {
    return (
        <div className='cardHome'>
            <div className='fotoCardHome'>
                <img src={gato}></img>
            </div>
            <div className='textoCardHome'>
                <p>{nombre}</p>
                <span>{resumen}</span>
            </div>
        </div>
    );
};

export default CardHome;
