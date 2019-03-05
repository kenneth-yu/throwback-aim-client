import React from 'react'
import SendMessageSound from '../components/SendMessageSound'
import SendMessage from '../sounds/imsend.wav'


class MessageForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { sendMessageSound: false };
    this.audio = new Audio(SendMessage)
  }

  render(){
    let {value, addedMessage, onChange} = this.props
    const disabledClass = !value.length ? 'message-form__submit--disabled' : null;
    return (
      <form className="message-form" onSubmit={(e)=> {addedMessage(e, value); this.audio.play()}}>
      <textarea className="message-form__textarea" value={value} onChange={onChange}/>
      <div className="message-form__actions">
      <button
      type="button"
      onClick={(e)=> {addedMessage(e, value); this.audio.play()}}
      disabled={!value.length}
      className={`message-form__submit ${disabledClass}`}></button>
      </div>
      </form>
    );
  }
}

export default MessageForm
