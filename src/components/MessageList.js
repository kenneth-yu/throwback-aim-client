import React from 'react'
import MessageItem from '../components/MessageItem'

const MessageList = (props) => {
<<<<<<< HEAD
  const { messageData, screenName, chatName } = props;
  let allMessages = messageData.map(oneMessage => <MessageItem message={oneMessage} className="message-item--other" screenName={chatName}/>)
  return (
    <div className="message-list">
      <div className="message-list__container">
        {allMessages}
=======
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
>>>>>>> 0a498c17bfff136a16a845a0c58ee8e7fb318b6d
      </div>
    </div>
  );
}

export default MessageList
