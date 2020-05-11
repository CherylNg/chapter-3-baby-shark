function shark_doo () {
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Half))
}
input.onButtonPressed(Button.AB, function () {
    // Line 1
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    shark_doo()
    for (let index = 0; index < 2; index++) {
        // Line 2-3
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        shark_doo()
    }
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Whole))
})
music.setVolume(200)
music.setTempo(115)
