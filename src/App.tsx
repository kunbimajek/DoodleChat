const App = () => {
	return (
		<div>
			<div className="container">
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
					<form>
						<input type="text" placeholder="Message" />
						<input type="submit" value="Send" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default App;
