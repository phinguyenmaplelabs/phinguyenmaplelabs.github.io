

main();

function main() {
	const CHANNEL = 'urn:x-cast:com.tvcast.screenmirror';
	const ctx = cast.framework.CastReceiverContext.getInstance();
	//receiving sender message
	ctx.addCustomMessageListener(CHANNEL, function(customEvent) {
		console.log(customEvent);
		showHidePlayer(false);
		showHideIFrame(true);
	});
	ctx.start();
	showHidePlayer(true);
	showHideIFrame(false);
	document.getElementById('iframe').src = 'https://tiki.vn';
}

function showHidePlayer(show) {
	var element = document.getElementById("cast_player");
	if (show) {
		element.style.display = "block";
	}else{
		element.style.display = "none";
	}
}

function showHideIFrame(show) {
	var element = document.getElementById("iframe");
	if (show) {
		element.style.display = "block";
	}else{
		element.style.display = "none";
	}
}