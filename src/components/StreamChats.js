import React, { Component } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT, HEADERS } from "../constants";

class StreamChats extends Component {
  state = {

  }

  fetchToWebsocket = (route, ownersData) => {
        fetch(`${API_ROOT}/${route}`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(ownersData)
        })
}

  conversationExists = (receiverId) => {
    console.log(receiverId)
}

  handleClick = () => {
        let body = {
            title: "PRIVATE",
            sender_id: this.props.sender_id,
            receiver_id: this.props.receiver_id
        };

        if (this.conversationExists(this.props.receiver_id)) {
            this.props.exit();
        }
        else {
            this.fetchToWebsocket("conversations", body);
            this.props.exit();
        }
    };
  render(){
    return (
      null
    )
  }
}

export default StreamChats
