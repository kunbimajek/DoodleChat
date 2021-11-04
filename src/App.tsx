import api from "./components/api";
import { useEffect, useState, useRef, FormEvent, useCallback } from "react";
import ChatBox from "./components/ChatBox";
import Loader from "./components/Loader";

const App = () => {
	const [inputMessage, setInputMessage] = useState<string>("");
	const [messages, setMessages] = useState<any>([]);

	const chats = useRef<HTMLDivElement>(null); // chat container reference

	const sender = "Flora";

	const getMessages = useCallback(() => {
		// get mesages from api and store response data in messages array
		api.get("")
			.then((response) => {
				if (response.data.length > messages.length) {
					setMessages(response.data);
				}
				console.log(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		// fetch messages when page loads
		getMessages();

		// keep fetching messages every 3 seconds
		setInterval(getMessages, 3000);
	}, [getMessages]);

	const sendMessage = (e: FormEvent) => {
		e.preventDefault();

		// only send message to api when input is true
		if (inputMessage.length) {
			api.post("", {
				message: inputMessage.trim(),
				author: sender,
			})
				.then(() => {
					// fetch messages
					getMessages();
				})
				.catch((error) => {
					console.error(error);
				});

			// reset inputMessage
			setInputMessage("");
		}
	};

	const renderChatBox = () => {
		// loop through messages
		return messages.map((chat: any) => {
			// for each message chat, render chat boxes
			return (
				<ChatBox
					key={chat._id}
					chat={chat}
					// verify sender
					sender={chat.author === sender}
				/>
			);
		});
	};

	return (
		<div>
			{!messages.length ? (
				<Loader />
			) : (
				<div className="chats container" ref={chats}>
					<div className="chat-wrapper">{renderChatBox()}</div>
				</div>
			)}
			<div className="input-group">
				<div className="container">
					<form onSubmit={sendMessage}>
						<textarea
							placeholder="Message"
							value={inputMessage}
							onChange={(e) => setInputMessage(e.target.value)}
						></textarea>
						<input type="submit" value="Send" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default App;
