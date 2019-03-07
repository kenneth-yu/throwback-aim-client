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
      screenName: this.props.user.username, //GET this information
      data: [],
      value: "",
      messageId: 0,
      chats: [],
      message: "",
      allCurrentUserChats:[],
      currentMessages:[],
      chatid: 0
    };
  }

  componentDidMount() {
    fetch(`${API_ROOT}chats`, {
      method: `GET`,
      headers: HEADERS
    })
    .then(res => res.json())
    .then(chats => {this.sendMessagesToData(chats)})
  }

  sendMessagesToData = (chats) => {
    // console.log(chats)
    // console.log(this.props.user.user.id)
    let currentUserChats = chats.filter(oneChat => parseInt(oneChat.friendship.user1) === this.props.user.user.id || parseInt(oneChat.friendship.user2) === this.props.user.user.id)
    let currentMessages = currentUserChats.filter(oneChat => parseInt(oneChat.friendship.user1) === this.props.clickedFriend.id || parseInt(oneChat.friendship.user2) === this.props.clickedFriend.id)
    console.log(currentUserChats)
    console.log(currentMessages)
    this.setState({
      chats: chats,
      allCurrentUserChats:currentUserChats,
      currentMessages: currentMessages,
      chatid:0
    })
    if (currentMessages.length > 0) {
      currentMessages[0].messages.forEach(chat => this.setState({ data: [...this.state.data, chat.content]}))
    }
  }



  addedMessage = (e, val) => {
    e.preventDefault();
    fetch(`${API_ROOT}messages`, {
      method: `POST`,
      headers: HEADERS,
      body: JSON.stringify({
        content: val,
        user_id: this.props.user_id,
        chat_id: this.state.currentMessages[0].messages[0].chat_id
      })
    }).then(res=>res.json())
    .then(data=> this.setState({
      data: [...this.state.data, data.content],
      value: ""
    }))
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  handleReceivedMessage = (message) => {
    console.log(message)
    console.log("handleReceivedMessage called")
    this.setState(state => {
      return {
        message
      };
    });
  }


  render() {
    const { data, chatName, screenName, value} = this.state;
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
            <StreamChats sender_id={this.props.user_id} receiver={this.props.clickedFriend}/>
            <MessageList handleReceivedMessage={this.handleReceivedMessage} message={this.state.message} allCurrentUserChats={this.state.allCurrentUserChats} user_id={this.props.user_id} messageData={data} screenName={screenName} chatName={chatName} />
            <CustomizeRow />
            <MessageForm sender_id={this.props.user_id} addedMessage={this.addedMessage} onChange={this.handleChange} value={value}/>

        </div>
      </Draggable>
    );
  }
}

export default InstantMessengerChat
