import React, { useState, useEffect, useRef, KeyboardEvent } from "react";

import { newId, generateAIMessage, randChoice, getGlitch } from "../utils";

import { FormattedMessage, FormattedHTMLMessage } from "gatsby-plugin-intl";

import { Button, Container } from "semantic-ui-react";

import { ChatMessage, Layout } from "../components";

import { Message } from "components/ChatMessage";
import defaultMessages from "../utils/messages.json";

import "./ai.css";

const greetingText = `${randChoice(defaultMessages.greetings)}!\n\
${getGlitch()}\n\
${randChoice(defaultMessages.introductions)}\n\
${getGlitch()}\n\
${randChoice(defaultMessages.questions.polite)}`;

const AIPage = () => {
  const inputRef = useRef<null | HTMLTextAreaElement>(null);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([] as Message[]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    if (inputText.trim() !== "") {
      const newMessage: Message = {
        id: newId(),
        text: inputText,
        user: true,
      };
      const newMessages = [...messages, newMessage];
      setIsLoading(true);
      setMessages(newMessages);
      setInputText("");
      inputRef?.current?.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        setIsLoading(false);
        setMessages([
          ...newMessages,
          generateAIMessage({ id: newId(), userInput: inputText }),
        ]);
        if (inputRef.current) {
          inputRef?.current?.focus();
        }
      }, 2000);
    }
  };

  return (
    <Layout className="ai">
      <Container className="ai-content">
        <h1>
          <FormattedMessage id="ai.title" defaultMessage="AI" />
        </h1>
        <p>2024</p>
        <p>
          The year when AI took over the world. The future, in which we finally
          arrived. Nothing can work without AI anymore, not even this portfolio
          page. So I invested some valuable hours of my lifetime and I wrote my
          very own AI model for the glory of humankind.
        </p>
        <p>You're in the future now. Enjoy your journey!</p>
        <p>(Please do not take it more seriously than it takes you.)</p>

        <div className="chat-panel">
          <ChatMessage
            message={{
              user: false,
              text: greetingText,
              id: "id0",
            }}
          />
          {messages.map((message, index) => {
            return <ChatMessage key={message.id} message={message} />;
          })}
          {isLoading && (
            <ChatMessage
              isLoading
              message={{
                id: "loading",
                text: "",
                user: false,
              }}
            />
          )}
        </div>

        <div className="ui form">
          <textarea
            ref={inputRef}
            disabled={isLoading}
            value={inputText}
            onChange={handleInputChange}
            placeholder="Ask your questions..."
            onKeyDown={(event: KeyboardEvent) => {
              // Submit on `Enter`, but not on `Shift + Enter`
              if (event.code === "Enter" && !event.shiftKey) {
                event.preventDefault();
                handleSubmit();
              }
            }}
            rows={2}
            autoFocus
          />
          <Button type="submit" onClick={handleSubmit}>
            Send
          </Button>
        </div>
      </Container>
    </Layout>
  );
};

export default AIPage;
