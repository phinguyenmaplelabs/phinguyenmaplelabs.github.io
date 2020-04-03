
const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();
playerManager.addEventListener(
	cast.framework.events.EventType.MEDIA_STATUS, (event) => {
		hanldeEvent(event)
	}
);
context.start(options);

function hanldeEvent(event) {
	console.log(event);
}

function handleMessage(message) {
	console.log(message);
}