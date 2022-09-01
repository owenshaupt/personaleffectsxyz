const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const CLIENT_ID = '161622610566-jn5346fsi5b8r97qm3g5p5qqmke22114.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04-F6hN0Gl8rOCgYIARAAGAQSNwF-L9Irz3Db8Ne2McYDebHO3ZjjavsRjvpiC9eGiHBa_7Gghoptrs4zACKDmu0nCdU4Mp4fZG8';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
	version: 'v3',
	auth: oAuth2Client,
});

const filePath = path.join(__dirname, 'asdf.txt');

const uploadFile = async () => {
	try {
		const res = await drive.files.create({
			requestBody: {
				name: '001-20220831-123456.txt',
				mimeType: 'text/plain',
				parents: [ '1J4uZUauP8gVsFV46w57QEOsKPbYOukRN' ],
			},
			media: {
				mimeType: 'text/plain',
				body: fs.createReadStream(filePath),
			}
		});

		console.log(res.data);
	} catch (err) {
		console.error(err);
	}
};

uploadFile();