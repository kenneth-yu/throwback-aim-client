import React from 'react'
// import {Navbar, Title, MessageForm, MessageItem, MessageList, CustomizeRow} from '../components/'
import Navbar from '../components/chatNavbar'
import Title from '../components/chatTitle'
import MessageForm from '../components/MessageForm'
import MessageList from '../components/MessageList'
import MessageItem from '../components/MessageItem'
import CustomizeRow from '../components/chatCustomize'

export default class InstantMessenger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatName: "AorKennyKiller",
      screenName: "Tester",
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
      <div className="instant-messenger">
        <Title chatName={chatName} />
        <Navbar chatName={chatName} />
        <MessageList
          messageData={data}
          screenName={screenName}
          chatName={chatName}
        />
        <CustomizeRow />
        <MessageForm
          addedMessage={this.addedMessage}
          onChange={this.handleChange}
          value={value}
        />
      </div>
    );
  }
}
