export const initiateVoicemail = () => {
	console.log('asdf');

	const record = document.querySelector(".record");
	const stop = document.querySelector(".stop");
	const soundClips = document.querySelector(".sound-clips");

	if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
		console.log("getUserMedia supported.");
		navigator.mediaDevices.getUserMedia({ audio: true })
			.then((stream) => {
				const mediaRecorder = new MediaRecorder(stream); // remove this out to copmonent?

				record.onclick = () => {
					mediaRecorder.start();
					console.log(mediaRecorder.state);
					console.log("recorder started");
					record.style.background = "red";
					record.style.color = "black";
				};

				stop.onclick = () => {
					mediaRecorder.stop();
					console.log(mediaRecorder.state);
					console.log("recorder stopped");
					record.style.background = "";
					record.style.color = "";
				};

				let chunks = [];

				mediaRecorder.ondataavailable = (e) => {
					chunks.push(e.data);
					console.log(e);
				};

				mediaRecorder.onstop = (e) => {
					console.log("recorder stopped");

					const clipName = prompt("Enter a name for your sound clip");

					const clipContainer = document.createElement("article");
					const clipLabel = document.createElement("p");
					const audio = document.createElement("audio");
					const deleteButton = document.createElement("button");

					clipContainer.classList.add("clip");
					audio.setAttribute("controls", "");
					deleteButton.innerHTML = "Delete";
					clipLabel.innerHTML = clipName;

					clipContainer.appendChild(audio);
					clipContainer.appendChild(clipLabel);
					clipContainer.appendChild(deleteButton);
					soundClips.appendChild(clipContainer);

					const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
					chunks = [];
					const audioURL = window.URL.createObjectURL(blob);
					audio.src = audioURL;

					deleteButton.onclick = (e) => {
						let evtTgt = e.target;
						evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
					};
				};
			})
			.catch((err) => {
				console.error(`The following getUserMedia error occurred: ${err}`);
			});
	} else {
		console.log("getUserMedia not supported on your browser!");
	}
};

export const checkIfRecordingAllowed = () => navigator.mediaDevices && navigator.mediaDevices.getUserMedia;