import copyImg from '../assets/images/copy.svg';

export function RoomCode() {
    return(
        <button className="room-code">
            <div>
                <img src={ copyImg } alt="Copiar código da sala" />
            </div>
            <span>Sala </span>
        </button>
    )
}