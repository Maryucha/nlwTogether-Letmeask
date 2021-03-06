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
//scss
import "../styles/room.scss";


type RoomsParms = {
  id: string;
};
export function AdminRoom() {
  //const { user } = useAuth();
  const params = useParams<RoomsParms>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);
  
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar sala</Button>
          </div>
         
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
