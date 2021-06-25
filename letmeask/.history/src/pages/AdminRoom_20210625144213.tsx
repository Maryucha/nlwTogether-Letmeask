//libs react
import { FormEvent, useState } from "react";
//lib rotas
import { useParams } from "react-router-dom";
//imagens
import logoImg from "../assets/images/logo.svg";
//componentes
import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
//hooks
import { useAuth } from "../hooks/useAuth";
import { useRoom } from "../hooks/useRoom";
//banco
import { database } from "../services/firebase";
//scss
import "../styles/room.scss";


type RoomsParms = {
  id: string;
};
export function AdminRoom() {
  const { user } = useAuth();
  const params = useParams<RoomsParms>();
  const [newQuestion, setNewQuestion] = useState("");
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);
  

  //enviar a pergunta e validar o usuario logado
  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === "") {
      return;
    }
    if (!user) {
      throw new Error("Você precisa estar Logado!");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighligted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);
    setNewQuestion("");
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={roomId} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>


        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question 
              key={question.id}
              content={question.content} 
              author={question.author} />
            );
          })}
        </div>
      </main>
    </div>
  );
}
