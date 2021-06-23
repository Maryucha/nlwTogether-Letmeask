import copyImg from '../assets/images/copy.svg';

import '../styles/roomCode.scss';

export function RoomCode() {
    return(
        <button className="room-code">
            <div>
                <img src={ copyImg } alt="Copiar código da sala" />
            </div>
            <span>Sala #-Mcu4Cx-04Bhv-Xa9wyf</span>
        </button>
    )
}