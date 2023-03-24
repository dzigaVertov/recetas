
import gato from './assets/cute-cat-photos-1593441022.jpg';

const PlatoDia = ({nombre, resumen}) => {
    return (
        <div className="platoDia">
            <div className='fotoPlatoDia'>
                <img src={gato}></img>
            </div>
            <div className='textoPlatoDia'>
                <p>{nombre}</p>
                <span>{resumen}</span>
            </div>
        </div>
    );
};

export default PlatoDia;
