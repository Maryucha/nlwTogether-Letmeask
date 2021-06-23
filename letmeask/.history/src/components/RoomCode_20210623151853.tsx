import copyImg from '../assets/images/copy.svg';

import '../styles/roomCode.scss';

type RoomCodeProps = { 
    code: string;
}

export function RoomCode(props: RoomCodeProps) {

    function copyRoomCodyToClipBoard(){
        navigator.clipboard.writeText(props.code);
    }

    return(
        <button className="room-code">
            <div>
                <img src={ copyImg } alt="Copiar código da sala" />
            </div>
            <span>Sala #{ props.code }</span>
        </button>
    )
}