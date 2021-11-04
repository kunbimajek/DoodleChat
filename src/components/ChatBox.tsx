interface ChatBoxProps {
	chat: {
		author: string;
		timestamp: number;
		message: string;
	};
	sender: boolean;
}

interface localeStringProps {
	[key: string]: string;
}

const ChatBox = ({ chat, sender }: ChatBoxProps) => {
	const parseText = (message: string) => {
		let textElement = document.createElement("textarea");
		textElement.innerHTML = message;
		return textElement.value;
	};

    let {author, timestamp, message} = chat

	let chatClass = sender ? "chat-box sender" : "chat-box recipent";

	let time = new Date(timestamp);

	let localeString: localeStringProps = {
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	};

	return (
		<div className={chatClass}>
			{!sender && <span className="name">{author}</span>}
			<div className="message">{parseText(message)}</div>
			<span className="date">
				{time.toLocaleString(undefined, localeString)}
			</span>
		</div>
	);
};

export default ChatBox;
