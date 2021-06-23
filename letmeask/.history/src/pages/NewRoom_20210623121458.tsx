import { Link } from "react-router-dom";
import { FormEvent, useState } from 'react';

import ilustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import "../styles/auth.scss";
import { database } from "../services/firebase";
//import { useAuth } from "../hooks/useAuth";

export function NewRoom() {
  const [newRoom , setNewRoom] = useState('');
  
  //const { user } =useAuth();
  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if(newRoom.trim()==='') {
      return;
    }
    const roomRef = database.ref('rooms');
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={ handleCreateRoom }>
            <input 
            type="text" 
            placeholder="Nome da Sala" 
            onChange= { event => setNewRoom(event.target.value)}
            value = { newRoom }
            
            />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente?<Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
