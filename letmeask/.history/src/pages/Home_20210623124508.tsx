//rotas
import { useHistory } from "react-router-dom";

//imagens
import ilustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconUmg from "../assets/images/google-icon.svg";

//scss
import "../styles/auth.scss";

//outros
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import { database } from "../services/firebase";

export function Home() {
  //estados
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [ roomCode, setRoomCode ] = useState('');

  async function heandleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }

  async function heandleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if(roomCode.trim() === ''){
      return;
    }
    //procurando a sala pelo id que o estado da room oferece
    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    //verifica se a sala existe
    if(!roomRef.exists()) {
      //exibe um alerta caso ela não exista
      alert('Essa sala não existe!');
      return;
    }
    //se ela existir me manda para ela
    history.push(`/rooms/${roomCode}`);

  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={ilustrationImg}
          alt="Ilustração simbolizando as perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo do LetMeAsk" />
          <button onClick={ heandleCreateRoom } className="create-room">
            <img src={googleIconUmg} alt="Logo do google" />
            Crie sua Sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form onSubmit={ heandleJoinRoom }>
            <input 
            type="text" 
            placeholder="Digite o código da sala"
            onChange={event =>setRoomCode(event.target.value)}
            value= {roomCode} 
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
