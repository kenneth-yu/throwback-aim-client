import React from 'react'
import MessageItem from '../components/MessageItem'

const MessageList = (props) => {
  const { messageData, screenName, chatName, user_id} = props;
  let allMessages = messageData.map(oneMessage => <MessageItem user_id={user_id} message={oneMessage} className="message-item--other" screenName={chatName}/>)
  return (
    <div className="message-list">
      <div className="message-list__container">
        {allMessages}
      </div>
    </div>
  );
}

export default MessageList
