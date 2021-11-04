interface ChatBoxProps {
	chat: {
		author: string;
		timestamp: number;
		message: string;
	};
	sender: boolean;
}

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const ChatBox = ({ chat, sender }: ChatBoxProps) => {
    // destructure chat data
	let { author, timestamp, message } = chat;

	// format timestamp
	const formattedDate = (timestamp: number) => {
        let date = new Date(timestamp);

		let day = date.getDay();

		let month = monthNames[date.getMonth()];

		let year = date.getFullYear();

		let hour: string | number = date.getHours();

		let minute: string | number = date.getMinutes();

		hour = hour < 10 ? "0" + hour : hour;
		minute = minute < 10 ? "0" + minute : minute;

		const time = `${hour}:${minute}`;

		return `${day} ${month.slice(0, 3)} ${year} ${time} `;
	};

	return (
        // display chatbox type if sender is true or false
		<div className={sender ? "chat-box sender" : "chat-box recipent"}>
			{!sender && <span className="name">{author}</span>}
			<div className="message">{message}</div>
			<span className="date">{formattedDate(timestamp)}</span>
		</div>
	);
};

export default ChatBox;
