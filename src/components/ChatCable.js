import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

const ChatCable = ({ conversations, handleReceivedMessage }) => {
  return (
    <Fragment>
      {conversations.map(conversation => {
        return (
          <ActionCable
            key={conversation.chat_id}
            channel={{ channel: 'MessagesChannel', conversation: conversation.id }}
            onReceived={handleReceivedMessage}
          />
        );
      })}
    </Fragment>
  );
};

export default ChatCable;
