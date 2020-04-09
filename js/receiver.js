

main();

function main() {
	const CHANNEL 		= 'urn:x-cast:com.tvcast.screenmirror';
	const ctx 			= cast.framework.CastReceiverContext.getInstance();
	const playerManager = ctx.getPlayerManager();
	const commands      = cast.framework.messages.Command;
	var options 		= new cast.framework.CastReceiverOptions();
	/*
	* Register Player Command
	*/
	options.supportedCommands = commands.PAUSE | commands.STREAM_VOLUME | commands.STREAM_MUTE;
	/*
	* Playback Configs
	*/
	const playbackConfig = new cast.framework.PlaybackConfig();
    playbackConfig.manifestRequestHandler = requestInfo => {
          requestInfo.withCredentials = true;
    };

    playbackConfig.segmentRequestHandler = requestInfo => {
          requestInfo.withCredentials = true;
	};
	options.playbackConfig = playbackConfig;
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
      hideIframe();
      return loadRequestData;
	});

	/*
	* Handle WebBrowser
	*/
	ctx.addCustomMessageListener(CHANNEL, function(customEvent) {
		var js = customEvent.data;
		if (js.type == 'iframe') {
			showIframe();
			playerManager.stop();
			document.getElementById('browserIframe').src = js.url;
		}else if (js.type == 'close_browser') {
			hideIframe();
		}
	});
	ctx.start(options);
}
function showIframe() {
	document.getElementById("cast_player").style.visibility = 'hidden';
	document.getElementById("browserIframe").style.visibility = 'visible';
}
function hideIframe() {
	document.getElementById("cast_player").style.visibility = 'visible';
	document.getElementById("browserIframe").style.visibility = 'hidden';
}