//libs react
import { FormEvent, useEffect, useState } from 'react';
//lib rotas
import { useParams } from 'react-router-dom';
//imagens
import logoImg from "../assets/images/logo.svg";
//componentes
import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
//hooks
import { useAuth } from '../hooks/useAuth';
//banco
import { database } from '../services/firebase';
//scss
import "../styles/room.scss";

type RoomsParms = {
    id: string;
}
export function Room() {

    const {user} = useAuth();
    const params = useParams<RoomsParms>();
    const [ newQuestion, setNewQuestion ] = useState('');
    const roomId = params.id;

    //enviar a pergunta e validar o usuario logado
    async function handleSendQuestion(event: FormEvent) {

        event.preventDefault();

        if(newQuestion.trim() ==='') {
            return;
        }
        if(!user){
            throw new Error('Você precisa estar Logado!');
        }

        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatr: user.avatar,
            },
            isHighligted:false,
            isAnswered: false 
        };

        await database.ref(`rooms/${roomId}/questions`).push(question);
        setNewQuestion('');

    }
    useEffect(() => {},[]);


  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={ roomId }/>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <form onSubmit={handleSendQuestion}>


          <textarea 
            placeholder="O que você quer perguntar?"
            onChange={ event=> setNewQuestion(event.target.value)}
            value={ newQuestion } 
          />
          <div className="form-footer">           
           { user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
           ): 
           (
           <span>
            Para enviar uma pergunta, <button>faça seu login.</button>
          </span>
          )
          }
            <Button type="submit" disabled={!user}>Enviar Pergunta</Button>
          </div>

        </form>
      </main>
    </div>
  );
}
