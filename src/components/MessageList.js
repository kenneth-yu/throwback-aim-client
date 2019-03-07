import React from 'react';
import MessageItem from '../components/MessageItem';
import ChatCable from "../components/ChatCable";

const MessageList = (props) => {
  const { message, messageData, screenName, chatName, user_id} = props;
  let allMessages = messageData.map(oneMessage => <MessageItem user_id={user_id} message={oneMessage} className="message-item--other" screenName={chatName}/>)
  return (
    <div className="message-list">
      <div className="message-list__container">
      <ChatCable message={message} handleReceivedMessage={props.handleReceivedMessage} allCurrentUserChats={props.allCurrentUserChats} />
        {allMessages}
      </div>
    </div>
  );
}

export default MessageList
