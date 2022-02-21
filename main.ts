input.onButtonPressed(Button.A, function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    true,
    true
    )
    basic.showString("T")
    basic.pause(1000)
    basic.showString("" + (dht11_dht22.readData(dataType.temperature)))
})
input.onButtonPressed(Button.B, function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    true,
    true
    )
    basic.showString("H")
    basic.pause(1000)
    basic.showString("" + (dht11_dht22.readData(dataType.humidity)))
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
