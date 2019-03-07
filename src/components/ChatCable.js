import React, { Fragment } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

const ChatCable = ({ allCurrentUserChats, handleReceivedMessage }) => {
  return (
    <Fragment>
      {allCurrentUserChats.map(conversation => {
        return (
          <ActionCableConsumer
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
