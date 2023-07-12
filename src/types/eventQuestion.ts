type EventQuestion = {
  responseType:
    | React.HTMLInputTypeAttribute
    | "choiceAnswer"
    | "longAnswer"
    | "textAnswer"
    | "shortAnswer"
    | "fileUpload"
    | "select";
  ques: string;
  choices?: string[];
};

export default EventQuestion;
