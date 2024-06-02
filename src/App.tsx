import React, { ChangeEvent, useState } from 'react';
import { Messages } from './components/Messages/Messages';
import logo from './logo.svg';
import { type MouseEvent } from 'react';
import './App.css';
import { ChatForm } from './components/ChatForm/ChatForm';
import { uid } from 'uid';
import { cnChatForm } from './components/ChatForm/ChatForm.classname';
import EmojiPicker from 'emoji-picker-react';

function App() {
  type Comment = {
    comment: string;
    id?: string;
  };

  const [addComments, setAddComments] = useState<Comment[]>([]);
  const [addAnswers, setAnswers] = useState('');

  const handleAddElement = (comment: string) => {
    setAddComments((prev) => [
      ...prev,
      {
        comment,
        // id: uid(5),
      },
    ]);
    setAnswers('');
  };

  const handleClickAnswer = (text: string | undefined) => {
    setAnswers(text + ': ');
    
  };

  return (
    <div className="App">
      <div>
        {addComments.map((elem) => (
          <Messages text={elem.comment} onClick={handleClickAnswer}></Messages>
        ))}
      </div>
      <ChatForm onSubmit={handleAddElement} forms={addAnswers}></ChatForm>
    </div>
  );
}

export { App };
