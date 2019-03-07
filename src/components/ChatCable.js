import React, { Fragment } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

const ChatCable = ({ message, handleReceivedMessage }) => {
  return (
    <Fragment>
          <ActionCableConsumer
            channel={{ channel: 'ChatsChannel'}}
            onReceived={response => {console.log(response); handleReceivedMessage(response)}}
          >
          <p>{message}</p>
          </ ActionCableConsumer>
    </Fragment>
  );
};

export default ChatCable;
