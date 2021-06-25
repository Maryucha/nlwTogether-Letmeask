import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type FirebaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighligted: boolean;
    likes: Record<string, {
      authorId: string;
    }>
  }
>;

type QuestionType = {
    id: string;
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighligted: boolean;
  };

export function useRoom(roomId: string) {
  const { user } = useAuth();
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [title, setTitle] = useState("");

  //aqui ele vai buscar as perguntas e recarregar as novas
  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

   const unsubscribleRoomListener = roomRef.on("value", (room) => {
      //tras todas as perguntas
      const databaseRoom = room.val();
      //busca as perguntas completas
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      //trata os dados das perguntas que estão no banco para exibição como chave valor
      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighligted: value.isHighligted,
            isAnswered: value.isAnswered,
            likeCount: Object.values(value.likes ?? {}).length,
            hasLiked: Object.values(value.likes ?? {}).some((like) => like.authorId === user?.id)
          };
        }
      );

      //muda o titulo da página para o nome cadastrado
      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    });
  }, [roomId, user?.id]);

  return { questions, title }
}