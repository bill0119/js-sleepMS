let Sleep = (ms) => {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms);
	});
}

let SleepMS = async(ms) => {
	if (ms > 0) {
		let s = new Date().getTime();
		await Sleep(ms);
		let e = new Date().getTime();
		console.log("sleep ", e - s, " millisecond done");
	}
}

exports.SleepMS = SleepMS;
