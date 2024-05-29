import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import { type MouseEvent } from 'react';
import './App.css';
import { ChatForm } from './components/ChatForm/ChatForm';
import { uid } from 'uid';
import { cnChatForm } from './components/ChatForm/ChatForm.classname';

function App() {


  type Comment = {
    comment: string;
    id: string;
  };

  const [addComments, setAddComments] = useState<Comment[]>([]);
  const [absentButton, setAbsentButton] = useState('None');
  const [addAnswers, setAnswers] = useState('')

  const handleAddElement = (comment: string, id: string) => {
    setAddComments((prev) => [
      ...prev,
      {
        comment,
        id: uid(5),
      },
    ]);
  };

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const target = event.target;
   // console.log(target)
    if (target) {
    setAbsentButton('block')
    } else setAbsentButton('none')
  };
  const handleMouseLeave = (event:MouseEvent) => {
  event.preventDefault();
    setAbsentButton('none')
  }
  const handleClickAnswer = (event:MouseEvent) => {
    const target = event.target;
    if (target instanceof HTMLButtonElement) {

     setAnswers(target.id)

    console.log(addAnswers)
    }
  };


  /*const getDeleteIcon = (indexCur: string) => {
    return () => {
      setAddIcon((prev) => prev.filter((icon) => icon.id !== indexCur));
    };
  };*/

  return (
    <div className="App">
      <div>
        {addComments.map((elem) => (
          <div
            className={cnChatForm('comment')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={elem.id}   //style={{ top: elem.top, left: elem.left }}
          >
            {elem.comment}
            <div className={cnChatForm('button')} style={{display:absentButton}}>
              <button onClick={handleClickAnswer} id={elem.comment}>Answer</button>
              <button>Reactions</button>
            </div>
          </div>
        ))}
      </div>
      <ChatForm onSubmit={handleAddElement} value={addAnswers}></ChatForm>
    </div>
  );
}

export { App };
