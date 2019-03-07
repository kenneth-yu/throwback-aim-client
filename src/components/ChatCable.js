import React, { Fragment } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

const ChatCable = ({ message, handleReceivedMessage }) => {
  return (
    <Fragment>
          <ActionCableConsumer
            channel={{ channel: 'MessagesChannel'}}
            onReceived={handleReceivedMessage}
            onConnected={console.log("connected to messages channel")}
          >
          <p>{message}</p>
          </ ActionCableConsumer>
    </Fragment>
  );
};

export default ChatCable;
