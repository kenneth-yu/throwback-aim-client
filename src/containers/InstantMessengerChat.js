import React from 'react'
import Navbar from '../components/chatNavbar'
import ChatHeader from '../components/chatHeader'
import MessageForm from '../components/MessageForm'
import MessageList from '../components/MessageList'
import CustomizeRow from '../components/chatCustomize'
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

class InstantMessengerChat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatName: "Jerold", //GET this information
      screenName: "AorKennyKiller", //GET this information
      data: [],
      value: "",
      messageId: 0

    };
  }

  addedMessage = (e, val) => {
    e.preventDefault();
    const message = {text: val, id: this.state.messageId++};
    this.state.data.push(message);
    this.setState({data: this.state.data, value: ""});
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  render() {
    const { data, chatName, screenName, value } = this.state;
    return (
      <Draggable
        handle=".handle"
        defaultPosition={{x:300, y:-100}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle"><ChatHeader chatName={chatName} /></div>
            <div className="instant-messenger-chat">
            <Navbar chatName={chatName} />
            <MessageList messageData={data} screenName={screenName} chatName={chatName}/>
            <CustomizeRow />
            <MessageForm addedMessage={this.addedMessage} onChange={this.handleChange} value={value}/>
            </div>
        </div>
      </Draggable>
    );
  }
}

export default InstantMessengerChat
