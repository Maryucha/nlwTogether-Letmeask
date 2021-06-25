//lib rotas
import { useHistory, useParams } from "react-router-dom";
//imagens
import logoImg from "../assets/images/logo.svg";
import deleteImg from "../assets/images/delete.svg";
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';
//componentes
import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
//hooks
import { useRoom } from "../hooks/useRoom";
//scss
import "../styles/room.scss";
import { database } from "../services/firebase";

type RoomsParms = {
  id: string;
};

export function AdminRoom() {
  //const { user } = useAuth();
  const history = useHistory();
  const params = useParams<RoomsParms>();
  const roomId = params.id;

  //aqui ele busca as perguntas
  const { title, questions } = useRoom(roomId);

  //fecha a sala
  async function heandleEndRoom() {
   await database.ref(`rooms/${roomId}`).update({
     endedAt: new Date(),
   })
   history.push('/');
  }
 //deleta a pergunta
  async function heandleDeleteQuestion(questionId: string) {
    if(window.confirm('Você tem certeza que deseja excluir essa pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }
  //mostra a pergunta que vai ser respondida
  async function heandleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({ 
      isAnswered: true
    })
  }
 //deixa a pergunta marcada
  async function heandleHighligthQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({ 
      isHighligted: true
    })
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={heandleEndRoom}>Encerrar sala</Button>
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
              author={question.author}
              isAnswered={question.isAnswered}
              isHighligted={question.isHighligted}
              >

               {!question.isAnswered && (  
                 <div>
                  <button
                      type="button"
                      onClick={ () => heandleCheckQuestionAsAnswered(question.id)}
                    >
                      <img src={checkImg} alt="Marcar a pergunta que está sendo respondida." />
                    </button>

                    <button
                      type="button"
                      onClick={ () => heandleHighligthQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Dar destaque a pergunta" />
                    </button> 
                </div>
                )}

                <button
                  type="button"
                  onClick={ () => heandleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Deletar pergunta" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}
