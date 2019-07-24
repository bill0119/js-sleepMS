let Sleep = (ms) => {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms);
	});
}

let SleepMS = async(ms) => {
	console.log("sleep ", ms, " millisecond");
	await Sleep(ms);
	console.log("sleep ", ms, " millisecond done");
}

exports.SleepMS = SleepMS;
