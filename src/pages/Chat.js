import {Launcher} from 'react-chat-window'
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';

let socket;

const DemoChat = (props) => {
  const [messageList, setMessageList] = useState([]);

  const [isOnline, setIsOnline] = useState(false);

  const [supportCount, setSupportCount] = useState(0);

  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  useEffect(() => {
    var userQuery = 'name=' + makeid(10) + '&type=customer';

    socket = io('http://127.0.0.1:60004/', {query: userQuery});

    socket.emit('support:connection:count', (error) => {
      if(error) console.log(error);
    });

    socket.emit('customer:connection:join', (error) => {
      if(error) console.log(error);
    })

    socket.emit('customer:room:create', (error) => {
      if(error) console.log(error);
    })

    socket.emit('support:room:join', (error) => {
      if(error) console.log(error);
    })

  })

  useEffect(() => {

    socket.on('support:connection:count', message => {
      setSupportCount(message);
      alert(message);
    })

    socket.on('customer:connection:created', message => {
      console.log('Customer connected')
      setIsOnline(true);
    })

    socket.on('support:count:notify', message => {
      // No support is online
      alert('No customer support is online, please try again');
    })

    socket.on('customer:room:created', message => {
      console.log('Room Created rooom id = ' + message);
    })

  })

  function _onMessageWasSent(message) {
      setMessageList([...messageList, message]);
  }

  function _sendMessage(text) {
    if (text.length > 0) {
      setMessageList([...messageList, {
        author: 'them',
        type: 'text',
        data: { text }
      }])
    }
  }

  return(
    <div>
        <Launcher
          agentProfile={{
            teamName: 'react-chat-window',
            imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
          }}
          onMessageWasSent={_onMessageWasSent.bind(this)}
          messageList={messageList}
          showEmoji
        />
    </div>
  )
}


export default DemoChat;