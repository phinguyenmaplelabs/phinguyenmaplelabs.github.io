
const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = cast.framework.CastReceiverContext.getInstance().getPlayerManager();

console.log("Register Events Liststener");

// Register Events Liststener
playerManager.addEventListener(
	cast.framework.events.EventType.MEDIA_STATUS, (event) => {
		hanldeEvent(event);
	}
);

// Register Messages Liststener
// playerManager.setMessageInterceptor(
// 	cast.framework.messages.MessageType.LOAD, loadRequestData => {
// 		return handleMessage(loadRequestData);
// 	}
// );

context.start();

function hanldeEvent(event) {
	console.log(event);
}

// function handleMessage(loadRequestData) {
// 	console.log(loadRequestData);
// }