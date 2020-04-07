

main();

function main() {
	const CHANNEL = 'urn:x-cast:com.tvcast.screenmirror';
	const ctx = cast.framework.CastReceiverContext.getInstance();
	//receiving sender message
	ctx.addCustomMessageListener(CHANNEL, function(customEvent) {
		console.log(customEvent);
		showHidePlayer(false);
		showHideIFrame(true);
		document.getElementById('browserIframe').src = 'https://tiki.vn';
	});
	ctx.start();
	showHidePlayer(true);
	showHideIFrame(false);
}

function showHidePlayer(show) {
	var element = document.getElementById("cast_player");
	if (show) {
		element.style.visibility = 'visibility';
	}else{
		element.style.visibility = 'hidden';
	}
}

function showHideIFrame(show) {
	var element = document.getElementById("browserIframe");
	if (show) {
		element.style.visibility = 'visibility';
	}else{
		element.style.visibility = 'hidden';
	}
}