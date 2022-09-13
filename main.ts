input.onButtonPressed(Button.A, function () {
    basic.showString("Truth or Dare?")
    Truth = randint(0, 1)
    if (Truth == 1) {
        basic.showString("T")
    } else {
        basic.showString("D")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Next player")
    Next = randint(0, 3)
    if (Next == 1) {
        basic.showArrow(ArrowNames.North)
    } else if (Next == 2) {
        basic.showArrow(ArrowNames.East)
    } else if (Next == 3) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.South)
    }
})
let Next = 0
let Truth = 0
basic.showString("Welcome to Truth or Dare")
