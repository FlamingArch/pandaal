import { IconAnswer } from "./icons";
import Input from "./input";
import React from "react";

type FormProps = {
  questions: any;
  response: any;
  setResponse: React.Dispatch<React.SetStateAction<any>>;
  setValidation: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Form({
  questions,
  response,
  setResponse,
  setValidation,
}: FormProps) {
  const [validationStale, setValidationStale] = React.useState(false);

  function appendAnswer(index: number, ques: any, answer: any) {
    const newResponses = response;
    if (newResponses[index]) {
      if (answer == "") {
        newResponses.splice(index, 1);
      } else {
        newResponses[index] = { ...ques, ans: answer };
      }
    } else {
      newResponses.splice(index, 0, { ...ques, ans: answer });
      setResponse(newResponses);
    }
    setValidationStale(true);
  }

  // const refreshValidation = () => {
  React.useEffect(() => {
    console.debug(`${response.length} \n ${questions.length}`);
    console.debug(
      `${JSON.stringify(response, {}, 2)} / ${JSON.stringify(questions, {}, 2)}`
    );
    if (validationStale) {
      if (response.length === questions.length) setValidation(true);
      else setValidation(false);
      setValidationStale(false);
    }
  }, [validationStale]);

  return questions.map((e: any, i: number) => (
    <div key={i} className="grid gap-2">
      <p>{e.ques}</p>
      <Input
        type={e.responseType}
        placeholder={"Answer Here"}
        leading={<IconAnswer className="w-6 h-6 fill-primary-500 ml-4" />}
        onChange={(eventParams: React.ChangeEvent<HTMLInputElement>) =>
          appendAnswer(i, e, eventParams.target.value)
        }
      >
        {e.choices &&
          e.choices.map((e: string, i: number) => {
            return (
              <option key={i} value={e}>
                {e}
              </option>
            );
          })}
      </Input>
    </div>
  ));
}
