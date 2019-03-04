import React from 'react'

const MessageItem = ({message, screenName, className}) => {
  const { text } = message;
  return (
    <div className={`message-item ${className}`}>
      <div className="message-item__screenname">{screenName}:</div>
      {text}
    </div>
  )
}

export default MessageItem
