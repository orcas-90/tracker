import { cnChatForm } from './ChatForm.classname';
import { useState, type MouseEvent, useEffect } from 'react';
//import { uid } from 'uid';
import InputEmoji from "react-input-emoji";


import type {
  ChangeEvent,
  DragEventHandler,
  FC,
  FormEvent,
  MouseEventHandler,
} from 'react';

import './ChatForm.css';
import { uid } from 'uid';



type ChatSendFormProps = {
  onSubmit: (comment: string, id?: string) => void;
  forms?: string;
};

const id = uid(5);

const ChatForm: FC<ChatSendFormProps> = ({ onSubmit, forms }) => {
  const [form, setForm] = useState('');
  const [text, setText] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(form);
    setForm('');
    forms = undefined
  };
  const handleChangeComment = (event: ChangeEvent) => {
    const target = event.target;

    if (target instanceof HTMLTextAreaElement) {
      const valueTextarea = target.value;
      setForm(valueTextarea);
    }
  };


  return (
    <form className={cnChatForm()} onSubmit={handleSubmit}>
      <div className={cnChatForm('Input')}>
         <InputEmoji
          value={form ? form : forms as string}
          onChange={setForm}
          placeholder="Type a message" shouldReturn={false} shouldConvertEmojiToImage={false}
             />
      </div>
      <button className={cnChatForm('Button')}>Send</button>
    </form>
  );
};

export { ChatForm };
