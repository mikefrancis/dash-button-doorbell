import DashButton from 'dash-button';

const button = new DashButton(process.env.DASH_BUTTON_MAC_ADDRESS);

button.addListener(() => {
	console.log('PRESSED MEEEEE');
});
