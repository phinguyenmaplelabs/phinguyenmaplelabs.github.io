const CHANNEL = 'urn:x-cast:com.tvcast.screenmirror';
const ctx = cast.framework.CastReceiverContext.getInstance();
const options = new cast.framework.CastReceiverOptions();
 const objToSender = {type: 'status',
    				  message: 'Playing'};

options.customNamespaces = Object.assign({});
options.customNamespaces[CHANNEL] = cast.framework.system.MessageType.JSON;
//receiving sender message
ctx.addCustomMessageListener(CHANNEL,  customEvent => document.getElementById("main").innerHTML = customEvent.data.msg);
//message to sender app
ctx.sendCustomMessage(CHANNEL, objToSender);
ctx.start(options);