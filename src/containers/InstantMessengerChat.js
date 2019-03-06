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
import ChatCable from "../components/ChatCable";


class InstantMessengerChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatName: this.props.clickedFriend.username, //GET this information
      screenName: "AorKennyKiller", //GET this information
      data: [],
      value: "",
      messageId: 0,
      chats: [],
      message: ""
    };
  }

  componentDidMount() {
    fetch(`${API_ROOT}user_conversations`, {
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

  handleReceivedMessage = (message) => {
    this.setState(state => {
      return {
        message
      };
    });
  }


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
            <ChatCable handleReceivedMessage={this.handleReceivedMessage} conversations={this.props.conversations} />
            <StreamChats sender_id={this.props.user_id} receiver={this.props.clickedFriend}/>
            <MessageList user_id={this.props.user_id} messageData={data} screenName={screenName} chatName={chatName} />
            <CustomizeRow />
            <MessageForm sender_id={this.props.user_id} addedMessage={this.addedMessage} onChange={this.handleChange} value={value}/>

        </div>
      </Draggable>
    );
  }
}

export default InstantMessengerChat
