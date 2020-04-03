const context = cast.framework.CastReceiverContext.getInstance();

let playerElement = document.getElementsByTagName("cast-media-player")[0];
playerElement.style.setProperty('--splash-image', 'url("http://maplelabs.co/wp-content/uploads/2020/04/100x100-1.png")');

context.start();