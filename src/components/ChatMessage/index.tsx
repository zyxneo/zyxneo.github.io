import React from "react";
import classNames from "classnames";

export type Message = {
  id: string;
  text: string;
  user: boolean;
};

const userAvatrs = ["🙋", "🙎", "💁", "🤷", "🙆", "🙅", "🤦"];
// 🦾

const ChatMessage = ({
  message,
  isLoading,
}: {
  message: Message;
  isLoading: boolean;
}) => {
  const { text, user, id } = message;

  const getUserAvater = () => {
    const index = +id.substring(2);
    return index <= 5
      ? "🙋"
      : index <= 10
      ? "💁"
      : index <= 20
      ? "🙎"
      : index <= 30
      ? "🙆"
      : index <= 40
      ? "🤷"
      : index <= 50
      ? "🙅"
      : "🤦";
  };

  return (
    <div className="chat-item">
      <div className={classNames("chat-avatar", user && "chat-avatar--user")}>
        {user ? getUserAvater() : "🤖"}
      </div>
      <div
        className="chat-message"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      {isLoading && (
        <div className="chat-loader">
          <svg viewBox="0 0 100 100">
            <circle
              className="loader-circle loader-circle--1"
              r={10}
              cy={50}
              cx={20}
            />
            <circle
              className="loader-circle loader-circle--2"
              r={10}
              cy={50}
              cx={50}
            />
            <circle
              className="loader-circle loader-circle--3"
              r={10}
              cy={50}
              cx={80}
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
