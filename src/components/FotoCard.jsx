import foto from '../assets/kenke.jpg';

function FotoCard () {
    return (
        <div>
            <img   className='fotoCard' src={foto} alt="cargando imagen" />
        </div>
    )
}

export default FotoCard;