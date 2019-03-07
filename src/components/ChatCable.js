import React, { Fragment } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

const ChatCable = ({ conversations, handleReceivedMessage }) => {
  return (
    <Fragment>
      {conversations.map(conversation => {
        return (
          <ActionCableConsumer
            key={conversation.chat_id}
            channel={{ channel: 'MessagesChannel', conversation: conversation.id }}
            onReceived={handleReceivedMessage}
          >
          <p>{this.state.message}</p>
          </ActionCableConsumer>
        );
      })}
    </Fragment>
  );
};

export default ChatCable;
