import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CreateChat from "../../CreateChat";
import ChatWindow from "../../ChatWindow";
import {
  StyledChatContainer,
  StyledChatHeader,
  StyledMotionWrapper,
  StyledExitButton,
} from "./styles";

import {
  sendMessage,
  receiveNotification,
  deleteNotification,
} from "../../../services/api";

const Chat = () => {
  const [chatId, setChatId] = useState("");
  const [chatName, setChatName] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  const receivedMessageIds = new Set();
  const intervalRef = useRef(null);

  const navigate = useNavigate();

  const idInstance = localStorage.getItem("idInstance");
  const apiToken = localStorage.getItem("apiTokenInstance");

  const handleCreateChat = (phoneNumber) => {
    setTimeout(() => {
      setChatId(`${phoneNumber}@c.us`);
      setIsChatOpen(true);
    }, 800);
  };

  const handleKeyEnterDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (!message) {
      setError("Введите сообщение");
      return;
    }

    try {
      await sendMessage(idInstance, apiToken, chatId, message);
      setMessages((prev) => [
        ...prev,
        { text: message, sender: "Вы", timestamp: new Date().toISOString() },
      ]);
      setMessage("");
    } catch (error) {
      setError("Ошибка при отправке сообщения.");
    }
  };

  const handleExit = () => {
    if (isChatOpen) {
      setIsChatOpen(false);
      clearInterval(intervalRef.current);
      setChatId('');
    } else {
      navigate('/');
    }
  };

  const fetchMessages = async () => {
    if (isFetching) return;
    setIsFetching(true);

    try {
      const notification = await receiveNotification(idInstance, apiToken);

      if (notification && notification.body) {
        const { receiptId, body } = notification;
        const { typeWebhook, messageData, senderData, idMessage, timestamp } =
          body;

        if (senderData.chatName && senderData.chatName.trim() !== "") {
          setChatName(senderData.chatName);
        }

        if (
          typeWebhook === "incomingMessageReceived" &&
          senderData.chatId === chatId &&
          messageData &&
          messageData.textMessageData &&
          messageData.textMessageData.textMessage
        ) {
          const textMessage = messageData.textMessageData.textMessage;

          if (!receivedMessageIds.has(idMessage)) {
            receivedMessageIds.add(idMessage);

            setMessages((prev) => [
              ...prev,
              {
                idMessage,
                text: textMessage,
                sender: senderData.sender,
                timestamp: new Date(timestamp * 1000).toISOString(),
              },
            ]);
          }
        }

        await deleteNotification(idInstance, apiToken, receiptId);
      }
    } catch (error) {
      console.error("Ошибка при получении сообщения:", error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (chatId) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(fetchMessages, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [chatId]);

  return (
    <StyledChatContainer
      as={motion.div}
      initial={{ height: "325px", width: "400px" }}
      animate={{
        height: isChatOpen ? "740px" : "325px",
        width: isChatOpen ? "1050px" : "400px",
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <StyledChatHeader>WhatsApp Chat</StyledChatHeader>
      <StyledExitButton variant="contained" onClick={handleExit}><span>Выход</span></StyledExitButton>
      <AnimatePresence>
        {!isChatOpen && (
          <StyledMotionWrapper
            key="createChat"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <CreateChat onCreateChat={handleCreateChat} />
          </StyledMotionWrapper>
        )}

        {isChatOpen && (
          <StyledMotionWrapper
            key="chatWindow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ChatWindow
              chatName={chatName}
              chatId={chatId}
              message={message}
              setMessage={setMessage}
              messages={messages}
              onSendMessage={handleSendMessage}
              onKeyDown={handleKeyEnterDown}
              error={error}
            />
          </StyledMotionWrapper>
        )}
      </AnimatePresence>
    </StyledChatContainer>
  );
};

export default Chat;
