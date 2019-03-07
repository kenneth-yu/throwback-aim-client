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
      currentMessages:[]
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
    let currentUserChats = !!chats && chats.filter(oneChat => parseInt(oneChat.friendship.user1) === this.props.user_id || parseInt(oneChat.friendship.user2) === this.props.user_id)
    let currentMessages = currentUserChats.filter(oneChat => parseInt(oneChat.friendship.user1) === this.props.clickedFriend.id || parseInt(oneChat.friendship.user2) === this.props.clickedFriend.id)
    this.setState({
      chats: chats,
      allCurrentUserChats:currentUserChats,
      currentMessages: currentMessages
    }, () => {this.getCurrentMessages()})
  }

  getCurrentMessages = () => {
    console.log(this.state.currentMessages)
    // this.state.currentMessages[0].messages.forEach(chat => this.setState({ data: [...this.state.data, chat.content]}))
  }



  addedMessage = (e, val) => {
    console.log("e", e)
    console.log("val", val)
    e.preventDefault();
    fetch(`${API_ROOT}messages`, {
      method: `POST`,
      headers: HEADERS,
      body: JSON.stringify({
        content: val,
        user_id: this.props.user_id
      })
    })
    // fetch(`${API_ROOT}chats`, {
    //   method: 'POST',
    //   headers: HEADERS,
    //   body: JSON.stringify(dataObj)
    // })
    // this.state.data.push(val);
    // fetch('http://localhost:3000/messages', {
    //   method: 'POST',
    //   headers: HEADERS,
    //   body: JSON.stringify({
    //     content: val,
    //     user_id: this.props.user_id
    //   })
    // }).then(res => res.json()).then(data => {
      this.setState({
        // data: [...this.state.data, data.content],
        data: [...this.state.data, val],
        value: ""
      })
    // }).catch(console.log("failed"))
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  handleReceivedMessage = (message) => {
    console.log(message)
    this.setState(state => {
      return {
        message
      };
    });
  }


  render() {
    console.log(this.props.clickedFriend)
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
            <MessageList handleReceivedMessage={this.handleReceivedMessage} allCurrentUserChats={this.state.allCurrentUserChats} user_id={this.props.user_id} messageData={data} screenName={screenName} chatName={chatName} />
            <CustomizeRow />
            <MessageForm sender_id={this.props.user_id} addedMessage={this.addedMessage} onChange={this.handleChange} value={value}/>

        </div>
      </Draggable>
    );
  }
}

export default InstantMessengerChat
