
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
const CHANNEL = 'urn:x-cast:com.tvcast.screenmirror';
context.addCustomMessageListener(CHANNEL, function(customEvent) {
  // handle customEvent.
  context.sendCustomMessage(CHANNEL, customEvent.senderId, {
          message: 'World',
 	});
});

context.start();

function hanldeEvent(event) {
	console.log(event);
}