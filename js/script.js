//import WaaarkLuge from "https://cdn.skypack.dev/@waaark/luge@0.6.16-beta";
luge.settings({ preloader: { duration: 5 } });

  LottieInteractivity.create({
    player:'#menuLottie',
    mode:"cursor",
    actions: [
        {
            type: "toggle"
        }
]
});