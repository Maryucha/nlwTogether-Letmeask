import { useState } from "react";


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

export function useRoom() {
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [title, setTitle] = useState("");
}