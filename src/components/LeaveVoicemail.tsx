import React from 'react'
import { useReactMediaRecorder } from "react-media-recorder";

const RecordView = () => {
	const {
		status,
		startRecording,
		stopRecording,
		mediaBlobUrl
	} = useReactMediaRecorder();

	return (
		<div>
			<p>{status}</p>
			<button onClick={startRecording}>Start Recording</button>
			<button onClick={stopRecording}>Stop Recording</button>
			<video src={mediaBlobUrl} controls autoPlay loop />
		</div>
	);
};

const LeaveVoicemail = () => {
	return (
		<RecordView />
	)
}

export default LeaveVoicemail;