
console.log("Hello world!");

const CHANNEL = 'urn:x-cast:com.tvcast.screenmirror';
const ctx = cast.framework.CastReceiverContext.getInstance();
const options = new cast.framework.CastReceiverOptions();
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