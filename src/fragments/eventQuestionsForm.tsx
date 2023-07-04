import { useEffect, useState } from "react";
import { Input } from "../components";
import EventQuestionsFormProps from "../types/eventQuestionsForm";

export default function EventQuestionsForm({
  questions,
  onDataChange,
  onFormValidationChange,
}: EventQuestionsFormProps) {
  const [answers, setAnswers] = useState(
    questions.map((questions) => ({ ...questions, answer: "" }))
  );

  useEffect(() => {
    onDataChange && onDataChange(answers);
    if (onFormValidationChange) {
      if (answers.filter((answer) => answer.answer == "").length > 0) {
        console.log("Set Validation to false");
        onFormValidationChange(false);
      } else {
        console.log("Set Validation to true");
        onFormValidationChange(true);
      }
    }
  }, [answers]);

  return (
    <>
      {questions.map((question, index) => {
        return (
          <>
            <p>{question.ques}</p>
            <Input
              key={index}
              type={question.responseType}
              placeholder={"Your Answer"}
              onChange={(e) => {
                let questionsList = answers.filter(
                  (questionList) => questionList.ques != question.ques
                );
                questionsList.push({ ...question, answer: e.target.value });
                setAnswers(questionsList);
              }}
            >
              {question.choices}
            </Input>
          </>
        );
      })}
    </>
  );
}
