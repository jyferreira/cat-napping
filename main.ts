input.onButtonPressed(Button.A, function () {
    log = !(log)
    if (true) {
        basic.showIcon(IconNames.Heart)
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.clearScreen()
    }
})
let log = false
log = false
loops.everyInterval(6000, function () {
    if (log) {
        datalogger.log(
        datalogger.createCV("Temp", input.temperature()),
        datalogger.createCV("luz", 0)
        )
    }
})
