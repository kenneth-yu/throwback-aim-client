import React from 'react'

const MessageItem = ({message, screenName, className}) => {
  const { content } = message;
  return (
    <div className={`message-item ${className}`}>
      <div className="message-item__screenname">{screenName}:</div>
      {content}
    </div>
  )
}

export default MessageItem
