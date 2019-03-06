import React from 'react'
import Navbar from '../components/chatNavbar'
import ChatHeader from '../components/chatHeader'
import MessageForm from '../components/MessageForm'
import MessageList from '../components/MessageList'
import CustomizeRow from '../components/chatCustomize'
import Draggable from 'react-draggable';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT, HEADERS } from '../constants';
import StreamChats from "../components/StreamChats";


class InstantMessengerChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatName: this.props.clickedFriend.username, //GET this information
      screenName: "AorKennyKiller", //GET this information
      data: [],
      value: "",
      messageId: 0,
      chats: []
    };
  }

  componentDidMount() {
    fetch(`${API_ROOT}chats`, {
      method: `GET`,
      headers: HEADERS
    })
    .then(res => res.json())
    .then(chats => this.setState({ chats }, () => {this.sendMessagesToData()}))
  }

  sendMessagesToData = () => {
    this.state.chats.forEach(chat => this.setState({ data: chat.messages }))
  }


  addedMessage = (e, val) => {
    e.preventDefault();
    let newId = this.state.messageId + 1
    const message = {text: val, id: newId};
    this.state.data.push(message);
    this.setState({
      data: this.state.data,
      value: ""
    });

  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  handleReceivedConversation = response => {
    const { chat } = response;
    console.log(chat)
    this.setState({
      chats: [...this.state.chats, chat]
    });
  };

  render() {
    const { data, chatName, screenName, value} = this.state;
    console.log(this.state.chats)
    return (
      <Draggable
        handle=".handle"
        defaultPosition={{x:500, y:-400}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div className="instant-messenger-chat">
          <div className="handle"><ChatHeader showHandler={this.props.showHandler} chatName={chatName} /></div>
            <Navbar  chatName={chatName} />
            <ActionCableConsumer
            channel={{
              channel: 'ChatsChannel'
            }}
            onReceived={(response) => this.handleReceivedConversation(response)}
            />

            <MessageList messageData={data} screenName={screenName} chatName={chatName} />
            <CustomizeRow />
            <MessageForm addedMessage={this.addedMessage} onChange={this.handleChange} value={value}/>

        </div>
      </Draggable>
    );
  }
}

export default InstantMessengerChat
