
console.log("Hello world!");

const CHANNEL = 'urn:x-cast:com.tvcast.screenmirror';
const ctx = cast.framework.CastReceiverContext.getInstance();
const options = new cast.framework.CastReceiverOptions();

options.customNamespaces = Object.assign({});
options.customNamespaces[CHANNEL] = cast.framework.system.MessageType.JSON;
//receiving sender message
ctx.addCustomMessageListener(CHANNEL, function(customEvent) {
	console.log(customEvent.data.msg);
});
ctx.start(options);