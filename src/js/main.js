import utils from "./utils";
import "../scss/main.scss";
import "slick-carousel";
import Amplitude from "amplitudejs";

class Setup {
    constructor() {
        this.log = "Are you ready for this?";
    }
    init() {
        console.log("qui fai cose");
        let header = document.getElementsByClassName("site-header")[0];
        // utils.anchorHandler(header);

        window.addEventListener("scroll", () => {
            utils.scrollHandler(header);
        });

        utils.toggleMenu();
        utils.autocloseMenu();
        // this.sliderPhotos();
        this.getRandomPresent();
        this.setplaylist();
    }
//     sliderPhotos() {
//         $("#section-ristorante .piatti-gallery").slick({
         
//             slidesToShow: 3,
//   slidesToScroll: 1,
//         });
//     }
    setplaylist() {
        Amplitude.init({
            // bindings: {
            //     37: "prev",
            //     39: "next",
            //     32: "play_pause",
            // },
            songs: [
                {
                    name: "Las Vegas",
                    artist: "Tancredi",
                    url: "https://owp.deseip.com/music/Tancredi - Las Vegas.mp3",
                },
                {
                    name: "Rawhide",
                    artist: "Blues Brothers",
                    url:
                        "https://owp.deseip.com/music/The Blues Brothers - Theme from Rawhide (Official Audio).mp3",
                },
                {
                    name: "All the small things",
                    artist: "Blink 182",
                    url: "https://owp.deseip.com/music/blink 182 all the small things lyrics.mp3",
                },
                {
                    name: "Unti e Bisunti",
                    artist: "Chef Rubio",
                    url:
                        "https://owp.deseip.com/music/Unti e Bisunti - la musica orientaleggiante che fa impazzire tutte quante.mp3",
                },
                {
                    name: "Wild one",
                    artist: "Jerry Lee Lewis",
                    url: "https://owp.deseip.com/music/Jerry Lee Lewis - Wild One.mp3",
                },
                {
                    name: "Jailhouse Rock",
                    artist: "Elvis Presley",
                    url: "https://owp.deseip.com/music/Elvis Presley - Jailhouse Rock (Audio).mp3",
                },
            ],
            autoplay: true,
        });
    }
    getRandomPresent() {
        var path = "images/regali/";
        var presents = [
            "regalo1.png",
            "regalo2.png",
            "regalo3.png",
            "regalo4.png",
            "regalo5.png",
            "regalo6.png",
        ];
        var captions = [
            "Tonno Rio Mario",
            "Killer sorpresa",
            "Calza a pennello",
            "Penne lisce-19",
            "Lampada di Sauron",
            "Innaffia-inutile",
        ];
        var getPresent = presents[Math.floor(Math.random() * presents.length)];
        var section = document.getElementById("section-regali");
        var button = section.getElementsByClassName("section-box-button")[0];
        var image = section.getElementsByClassName("random-image")[0];
        var caption = section.getElementsByClassName("random-caption")[0];

        button.addEventListener("click", () => {
            var random = Math.floor(Math.random() * 6);
            image.src = path + presents[random];
            caption.innerHTML = captions[random];
        });
    }
}
//export {Setup as default};

let setup = new Setup();
setup.init();
