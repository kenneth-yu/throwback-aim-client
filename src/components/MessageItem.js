import React from 'react'

const MessageItem = ({message, screenName, className}) => {
  return (
    <div className={`message-item ${className}`}>
      <div className="message-item__screenname">{screenName}:</div>
      {message}
    </div>
  )
}

export default MessageItem
