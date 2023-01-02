import { Input } from "../components";
import { IconAnswer } from "../components/icons";

export default function (questions, response, setResponse, setEnableButton) {
  function appendAnswer(index, ques, answer) {
    // console.log(`Questions: ${JSON.stringify(questions, {}, 2)}`);
    // console.log(
    //   `Index: ${index}\nQues: ${JSON.stringify(ques)}\nAns: ${answer}`
    // );
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
    refreshValidation();
  }
  const refreshValidation = () => {
    // console.log(`FORM DATA: ${questions.length} RESPONSE: ${response.length}`);
    if (response.length === questions.length) setEnableButton(true);
    else setEnableButton(false);
  };

  return questions.map((e, i) => (
    <div key={i} className="grid gap-2">
      <p>{e.ques}</p>
      <Input
        type={e.responseType}
        placeholder={"Answer Here"}
        leading={<IconAnswer className="w-6 h-6 fill-primary-500" />}
        onChange={(eventParams) => appendAnswer(i, e, eventParams.target.value)}
      >
        {e.choices &&
          e.choices.map((e, i) => {
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
