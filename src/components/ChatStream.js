import React from 'react';

import './ChatStream.css';

import ChatMessage from './ChatMessage'

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

function ChatStream(props) {
  return (
    <section className="chat-stream">
      {
        props.messages.map(message => {
          let messageType;
          if (message.user === props.currentUser) {
            messageType = 'sent';
          } else {
            messageType = 'received';
          }
          return <ChatMessage
            currentUser={props.currentUser}
            message={message}
            messageType={messageType}
          />
        })
      }
    </section>
  )
}


export default ChatStream;
