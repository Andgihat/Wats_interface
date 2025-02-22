import React, { useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import {
  StyledChatContainer,
  StyledMessagesContainer,
  StyledMessageItem,
  StyledMessageInput,
  StyledSendButton,
  StyledFormBox,
} from "./styles";

const ChatWindow = ({
  chatId,
  chatName,
  message,
  setMessage,
  messages,
  onSendMessage,
  onKeyDown,
  error,
}) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <StyledChatContainer elevation={3}>
      <Typography variant="h5" color="primary">
      {chatName || `Чат с: ${chatId}`} 
      </Typography>

      <StyledMessagesContainer>
        {messages.map((msg, index) => (
          <StyledMessageItem key={index} isOwn={msg.sender === "Вы"}>
            <strong>{msg.sender}: </strong> {msg.text}
          </StyledMessageItem>
        ))}
        <div ref={messagesEndRef} />
      </StyledMessagesContainer>
      <StyledFormBox>
        <StyledMessageInput
          label="Введите сообщение"
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={onKeyDown}
          error={!!error}
          helperText={error}
        />
        <StyledSendButton variant="contained"  onClick={onSendMessage}>
          <span aria-hidden="true" data-icon="send" class="">
            <svg
              viewBox="0 0 24 19"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              class=""
              version="1.1"
              x="0px"
              y="0px"
              enable-background="new 0 0 24 24"
            >
              <title>send</title>
              <path
                fill="currentColor"
                d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
              ></path>
            </svg>
          </span>
        </StyledSendButton>
      </StyledFormBox>
    </StyledChatContainer>
  );
};

export default ChatWindow;
