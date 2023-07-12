import EventQuestion from "./eventQuestion";

type EventQuestionsFormProps = {
  questions: EventQuestion[];
  onDataChange?: (data: any) => void;
  onFormValidationChange?: (validation: boolean) => void;
};

export default EventQuestionsFormProps;
