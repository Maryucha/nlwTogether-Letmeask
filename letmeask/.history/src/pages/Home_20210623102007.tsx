import { useContext } from 'react';
import { AuthContext } from "../App";
import { useHistory } from "react-router-dom";

import ilustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconUmg from "../assets/images/google-icon.svg";


import "../styles/auth.scss";
import { Button } from "../components/Button";


export function Home() {

  const history = useHistory();
  const {} = useContext(AuthContext);
 
  function heandleCreateRoom() {
    
      history.push("/rooms/new");
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
          <button onClick={heandleCreateRoom} className="create-room">
            <img src={googleIconUmg} alt="Logo do google" />
            Crie sua Sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
