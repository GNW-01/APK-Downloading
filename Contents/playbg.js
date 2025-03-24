const bgmu = new Audio("./assets/sound/bgmusic.mp3");

class Bg {
    constructor() {
        this.bgm = bgmu;
        this.bgm.currentTime = 3;
        this.bgm.volume = 0.1;
        this.bgm.play();
        console.log("sound played");
        this.bgm.addEventListener('timeupdate', () => {
            if (this.bgm.currentTime >= 141) {
                this.bgm.currentTime = 3;
            }
        });
    }
}

export default Bg;

