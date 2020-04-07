
console.log("Hello world!");

const CHANNEL = 'urn:x-cast:com.tvcast.screenmirror';
const ctx = cast.framework.CastReceiverContext.getInstance();
//receiving sender message
ctx.addCustomMessageListener(CHANNEL, function(customEvent) {
	console.log(customEvent);
});
ctx.start();