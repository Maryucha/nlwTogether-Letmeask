import copyImg from '../assets/images/copy.svg';

import '../styles/roomCode.scss';

type RoomCodeProps = { 
    code: string;
}

export function RoomCode() {

    function copyRoomCodyToClipBoard(){
        navigator.clipboard.writeText(-Mcu4Cx-04Bhv-Xa9wyf);
    }

    return(
        <button className="room-code">
            <div>
                <img src={ copyImg } alt="Copiar código da sala" />
            </div>
            <span>Sala #-Mcu4Cx-04Bhv-Xa9wyf</span>
        </button>
    )
}