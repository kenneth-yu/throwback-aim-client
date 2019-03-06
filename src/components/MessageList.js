import React from 'react'
import MessageItem from '../components/MessageItem'

const MessageList = (props) => {
  const { messageData, screenName, chatName } = props;
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
              <MessageItem message={message} screenName={screenName} key={i}/>
            );
          })
        }
      </div>
    </div>
  );
}

export default MessageList
