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

  conversationExists = () -> {

}

  handleClick = () => {
        let body = {
            title: "PRIVATE",
            sender_id: this.props.user_sender_id,
            receiver_id: this.props.user_receiver_id
        };

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
