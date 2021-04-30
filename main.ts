function feliz () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . .
        . # # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    Hola = 0
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    Hola = randint(1, 6)
    basic.showNumber(Hola)
})
function Luz () {
    if (input.lightLevel() <= 80) {
        basic.showString("Go to sleep",65)
    } else if (input.temperature() < 170 || input.temperature() > 80) {
        basic.showString("Time to eat",65)
    } else if (input.lightLevel() >= 170) {
        basic.showString("Time to play!",65)
    }
}
function temperatura () {
    basic.showNumber(input.temperature())
    if (input.temperature() >= 32) {
        basic.showIcon(IconNames.Sad)
    } else if (input.temperature() < 32 || input.temperature() > 17) {
        basic.showIcon(IconNames.Happy)
    } else if (input.temperature() >= 17) {
        basic.showIcon(IconNames.Confused)
    }
}
let Hola = 0
basic.showString("Marian A01637367", 70)
basic.forever(function () {
    if (Hola == 1) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    } else if (Hola == 2) {
        basic.showNumber(7 * 7)
    } else if (Hola == 3) {
        feliz()
        basic.clearScreen()
    } else if (Hola == 4) {
        temperatura()
    } else if (Hola == 5) {
        Luz()
    } else if (Hola == 6) {
        basic.showString("I got stressed doing this, but it was fun ", 105)
    }
})
