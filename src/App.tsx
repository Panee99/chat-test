import { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";

type Message = {
  id: string;
  text: string;
};

function App() {
  const [messages, setMessages] = useState<Message[]>([
    { id: uuid(), text: "Hello" },
    { id: uuid(), text: "Hi" },
    { id: uuid(), text: "Hey" },
    { id: uuid(), text: "Howdy" },
    { id: uuid(), text: "Hola" },
    { id: uuid(), text: "Hello" },
    { id: uuid(), text: "Hi" },
    { id: uuid(), text: "Hey" },
    { id: uuid(), text: "Howdy" },
    { id: uuid(), text: "Hola" },
    { id: uuid(), text: "Hello" },
    { id: uuid(), text: "Hi" },
  ]);

  const addMessage = () => {
    const newMessages = [
      { id: uuid(), text: uuid() },
      { id: uuid(), text: uuid() },
      { id: uuid(), text: uuid() },
      { id: uuid(), text: uuid() },
      { id: uuid(), text: uuid() },
      { id: uuid(), text: uuid() },
      { id: uuid(), text: uuid() },
    ];
    setMessages((prev) => [...newMessages, ...prev]);
  };

  return (
    <div className="item-center">
      <div className="messages">
        <a className="anchor"></a>
        {messages.map((message) => (
          <div className="message" key={message.id}>
            {message.text}
          </div>
        ))}
      </div>
      <button onClick={addMessage}>add</button>
    </div>
  );
}

export default App;
