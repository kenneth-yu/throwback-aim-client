import React from 'react'
import MessageItem from '../components/MessageItem'

const MessageList = (props) => {
  const { messageData, screenName, chatName, user_id } = props;
  const currentMessage = { content: "Hi", id: 1 };
  return (
    <div className="message-list">
      <div className="message-list__container">
        <MessageItem
          message={currentMessage}
          className="message-item--other"
          screenName={chatName}
        />
        { messageData.map((message, i) => {
            return (
              <MessageItem message={message} user_id={user_id} screenName={screenName} key={i}/>
            );
          })
        }
      </div>
    </div>
  );
}

export default MessageList
