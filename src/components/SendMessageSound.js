import React from 'react'
import Sound from 'react-sound';
import SendMessage from '../sounds/imsend.wav'

class SendMessageSound extends React.Component{

  render(){
    return(
      <Sound
      url={SendMessage}
      playStatus={Sound.status.PLAYING}
      playFromPosition={0 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    )
  }
}

export default SendMessageSound
