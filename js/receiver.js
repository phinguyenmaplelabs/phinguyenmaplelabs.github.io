

const CHANNEL 		= 'urn:x-cast:com.tvcast.screenmirror';
const ctx 			= cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();
const options 		= new cast.framework.CastReceiverOptions();
let playbackConfig 	= (Object.assign(new cast.framework.PlaybackConfig(), playerManager.getPlaybackConfig()));

playerManager.setMessageInterceptor(
cast.framework.messages.MessageType.LOAD,
request => {

  // Set cookies here. 
  // No need to pass cookies into header in each segment.

  //  console.log("content id:", request.media.contentId);
  //  Set your segment valid hls format : below is example:
  //  Refer other format:
  //  https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.HlsSegmentFormat

  request.media.hlsSegmentFormat = cast.framework.messages.HlsSegmentFormat.TS;

  return request;
});

playbackConfig.manifestRequestHandler = requestInfo => {
    requestInfo.withCredentials = true;
};

playbackConfig.segmentRequestHandler = requestInfo => {
    requestInfo.withCredentials = true;
  };

playbackConfig.licenseRequestHandler = requestInfo => {
    requestInfo.withCredentials = true;
};

options.playbackConfig = playbackConfig;


const objToSender = {type: 'status',
    				  message: 'Playing'};

options.customNamespaces = Object.assign({});
options.customNamespaces[CHANNEL] = cast.framework.system.MessageType.JSON;
//receiving sender message
ctx.addCustomMessageListener(CHANNEL, function(customEvent) {
	document.getElementById("main").innerHTML = customEvent.data.msg;
	ctx.sendCustomMessage(CHANNEL, customEvent.senderId, objToSender);
});
ctx.start(options);