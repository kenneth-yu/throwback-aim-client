import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

const ChatCable = ({ allCurrentUserChats, handleReceivedMessage }) => {
  return (
    <Fragment>
      {allCurrentUserChats.map(conversation => {
        return (
          <ActionCable
            key={conversation.chat_id}
            channel={{ channel: 'ChatsChannel', conversation: conversation.id }}
            onReceived={handleReceivedMessage}
          >
          <p>{"this.props.message"}</p>
          </ActionCableConsumer>
        );
      })}
    </Fragment>
  );
};

export default ChatCable;
