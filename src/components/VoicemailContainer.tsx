import React, { useEffect, useState } from 'react';
import { checkIfRecordingAllowed, initiateVoicemail } from './Voicemail.ts';

const VoicemailContainer = () => {

	const [initiated, setInitiated] = useState(false);

	useEffect(() => {
		if (initiated) initiateVoicemail();
	}, [initiated]);
	

	if (initiated) {
		return (
			<div>
				<button className='record'>Record</button>
				<button className='stop'>Stop</button>
				<div className='sound-clips'>Sound Clips</div>
			</div>
		)
	};

	return (
		<button onClick={() => setInitiated(true)}>yadda</button>
	)
}

export default VoicemailContainer;