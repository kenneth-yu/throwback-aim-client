import React, { Component } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT, HEADERS } from "../constants";

class StreamChats extends Component {
  fetchToWebsocket(route, ownersData) {
        fetch(`${API_ROOT}/${route}`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(ownersData)
        })
}

  handleClick() {
        let body = {
            title: "PRIVATE",
            sender_id: this.props.user_sender_id,
            receiver_id: this.props.user_receiver_id
        };

        // If the conversation already exists, execute exit function or do nothing. Otherwise, fetch conversation to WebSockets.
        if (conversationExists(this.props.user_receiver_id)) {
            this.props.exit();
        }
        else {
            fetchToWebsocket("conversations", body);
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
