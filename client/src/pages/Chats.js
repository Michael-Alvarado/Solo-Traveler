import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import Login from './Login';
import ChatFeed from '../components/Chat Components/ChatFeed';
import env from 'react-dotenv';
// import Auth from '../utils/auth';

const projectID = env.REACT_APP_CE_PUBLIC_KEY;

const Chats = () => {
	// if (!Auth.loggedIn()) return <Login />;
	if (!localStorage.getItem('username')) return <Login />;

	return (
		<ChatEngine
			height='80vh'
			projectID={projectID}
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
			onNewMessage={() =>
				new Audio(
					'https://chat-engine-assets.s3.amazonaws.com/click.mp3'
				).play()
			}
		/>
	);
};

export default Chats;
