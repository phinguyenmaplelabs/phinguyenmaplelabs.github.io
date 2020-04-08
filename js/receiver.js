

main();

function main() {
	const CHANNEL 		= 'urn:x-cast:com.tvcast.screenmirror';
	const ctx 			= cast.framework.CastReceiverContext.getInstance();
	const playerManager = ctx.getPlayerManager();
	/*
	*	Handle Player
	*/
	playerManager.setMessageInterceptor(cast.framework.messages.MessageType.LOAD, loadRequestData =>{
		const error = new cast.framework.messages.ErrorData(
                      cast.framework.messages.ErrorType.LOAD_FAILED);
      if (!loadRequestData.media) {
        error.reason = cast.framework.messages.ErrorReason.INVALID_PARAM;
        return error;
      }
      // hideIframe();
      return loadRequestData;
	});

	/*
	* Handle WebBrowser
	*/
	ctx.addCustomMessageListener(CHANNEL, function(customEvent) {
		console.log(customEvent);
		showIframe();
		document.getElementById('browserIframe').src = 'https://tiki.vn';
	});
	ctx.start();
}

function showIframe() {
	var player = document.getElementById("cast_player");
	var iframe = document.getElementById("browserIframe");
	player.style.visibility = 'hidden';
	iframe.style.visibility = 'visibility';
}

function hideIframe() {
	var player = document.getElementById("cast_player");
	var iframe = document.getElementById("browserIframe");
	player.style.visibility = 'visibility';
	iframe.style.visibility = 'hidden';
}