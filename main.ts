radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("SMILE")
})
radio.setGroup(111)
