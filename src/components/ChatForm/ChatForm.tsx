import { cnChatForm } from './ChatForm.classname';
import { useState, type MouseEvent, useEffect } from 'react';
//import { uid } from 'uid';

import type {
  ChangeEvent,
  DragEventHandler,
  FC,
  FormEvent,
  MouseEventHandler,
} from 'react';

import './ChatForm.css';
import { uid } from 'uid';


type IconsFormData = {
  comment: string;

};

type ChatSendFormProps = {
  onSubmit: (
    comment: string,
    id: string,

  ) => void;
  value: string,

};

const id = uid(5);

const ChatForm: FC<ChatSendFormProps> = ({ onSubmit, value }) => {

  const [form, setForm] = useState<IconsFormData>({
    comment: value
  });
  const [top, setAddTop] = useState<number | undefined>(undefined);
  const [left, setAddLeft] = useState<number | undefined>(undefined);
  const [absentForm, setAbsentForm] = useState('form');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(value, id);
    setForm({comment: ''})
  };
  value = form.comment
  console.log(value)
  const handleChangeComment = (event: ChangeEvent) => {
    const target = event.target;
    if (
      !(
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement
      )
    ) {
      return;
    }

    setForm((prev) => ({
      ...prev,
      [target.name]:
        target.type === 'checkbox'
          ? (target as HTMLInputElement).checked
          : target.value,
    }));
  };
  const handleClick = (event: MouseEvent) => {


  };
  const handleAbsentForm = (event: MouseEvent) => {

  };

  return (
      <form className={cnChatForm()} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="comment">Comments:</label>
          <input
            name="comment"
            onChange={handleChangeComment}
            value={value}
          ></input>
        </div>
        <button onClick={handleAbsentForm}>Send</button>
      </form>

  );
};

export { ChatForm };