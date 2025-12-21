// abstraction >> idea 1st then implementation later

// ------------------- Way-01 (using interface) -------------------

//idea
interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}

// implementation 
class VideoPlayer implements MediaPlayer {      // ** this class will follow the MediaPlayer interface's Structure
    play(): void {
        console.log("Video is playing....");
    }
    pause(): void {
        console.log("Video is paused....");
    }
    stop(): void {
        console.log("Video has stopped....");
    }
}

const media1 = new VideoPlayer();
media1.play();
media1.pause();
media1.stop();



// ------------------- Way-02 (using interface) -------------------

// idea
abstract class MediaPlayerA {
    abstract playA(): void;
    abstract pauseA(): void;
    abstract stopA(): void;
}

// implementation
class VideoPlayerA extends MediaPlayerA {
    playA(): void {
        console.log("playA");
    }
    pauseA(): void {
        console.log("pauseA");
    }
    stopA(): void {
        console.log("stopA");
    }
}

const media2 = new VideoPlayerA();
media2.playA();
media2.pauseA();
media2.stopA();