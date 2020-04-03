

console.error('Browser not supported!');
const context = cast.framework.CastReceiverContext.getInstance();
const options = new cast.framework.CastReceiverOptions();
context.start(options);