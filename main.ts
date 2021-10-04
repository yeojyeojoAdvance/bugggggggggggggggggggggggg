input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.clearScreen()
    }
})
