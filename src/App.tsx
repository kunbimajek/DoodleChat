import api from "./components/api";
import { useEffect, useState, useRef, FormEvent } from "react";

const App = () => {
	const [inputMessage, setInputMessage] = useState<string>("");
	const [messages, setMessages] = useState<any>([]);

	const chatWrapper = useRef<HTMLDivElement>(null);

	const sender = "Flora";

	useEffect(() => {
		getMessages();
		setInterval(getMessages, 5000);
	}, []);

	const getMessages = () => {
		api.get("")
			.then((response) => {
				if (response.data.length > messages.length) {
					setMessages(response.data);
				}
				console.log(response);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const sendMessage = (e: FormEvent) => {
		e.preventDefault();
		if (inputMessage.length > 0) {
			api.post("", {
				message: inputMessage,
				author: sender,
			})
				.then(() => {
					getMessages();
				})
				.catch((error) => {
					console.error(error);
				});

			setInputMessage("");
		}
	};

	return (
		<div>
			<div className="container" ref={chatWrapper}>
				<div className="chat-wrapper">
					<div className="recipent chat-box">
						<span className="name">Dami</span>
						<p className="message">Sounds good to me</p>
						<span className="date">10 Mar 2018 10:22</span>
					</div>
					<div className="sender chat-box">
						<p className="message">
							Thanks alot Dami for these updates
						</p>
						<span className="date">10 Mar 2018 10:26</span>
					</div>
				</div>
			</div>
			<div className="input-group">
				<div className="container">
					<form onSubmit={sendMessage}>
						<input
							type="text"
							placeholder="Message"
							value={inputMessage}
							onChange={(e) => setInputMessage(e.target.value)}
						/>
						<input type="submit" value="Send" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default App;
