import React from 'react'

const MessageForm = ({value, addedMessage, onChange}) => {
  const disabledClass = !value.length ? 'message-form__submit--disabled' : null;
  return (
    <form className="message-form" onSubmit={(e)=> {addedMessage(e, value)}}>
      <textarea
        className="message-form__textarea"
        value={value}
        onChange={onChange}
      />
      <div className="message-form__actions">
        <button
          type="button"
          onClick={(e)=> {addedMessage(e, value)}}
          disabled={!value.length}
          className={`message-form__submit ${disabledClass}`}></button>
      </div>
    </form>
  );
}

export default MessageForm
