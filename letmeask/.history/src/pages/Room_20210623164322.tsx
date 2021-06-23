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

type FirebaseQuestions = Record<string, {
  author: {
    name: string,
    avatar: string,
  },
  content: string;
  isAnswered: boolean;
  isHighligted: boolean;
}>

type Question = {
  id: string;
  author: {
    name: string,
    avatar: string,
  },
  content: string;
  isAnswered: boolean;
  isHighligted: boolean;
}
export function Room() {

    const {user} = useAuth();
    const params = useParams<RoomsParms>();
    const [ newQuestion, setNewQuestion ] = useState('');
    const [ questions, setQuestions ] = useState<Question[]>([]);
    const [ title, setTitle ] = useState('');
    const roomId = params.id;

    //aqui ele vai buscar as perguntas e recarregar as novas
    useEffect(() => {
     const roomRef = database.ref(`rooms/${roomId}`);

      roomRef.on('value', room => {

        //tras todas as perguntas
       const databaseRoom = room.val(); 
       //busca as perguntas completas
       const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

       //trata os dados das perguntas que estão no banco para exibição como chave valor
       const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighligted: value.isHighligted,
          isAnswered: value.isAnswered,
        }
       });

       //muda o titulo da página para o nome cadastrado
      setTitle(databaseRoom.title); 
      setQuestions(parsedQuestions);
       });
       
    },[roomId]);


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
          <h1>Sala { title }</h1>
          { questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
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
        {JSON.stringify(questions)}
      </main>
    </div>
  );
}
