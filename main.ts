controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(false)
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f f f f 
    . . . . . . . . . . . . f f f f 
    . . . f f f f f f f f f f f 2 f 
    . . . f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . f f f f f f f f f f f f f 
    . . . f f f f f f f f f . . . . 
    . . . . . f f . . f f . . . . . 
    . . . . . f f . . f f . . . . . 
    . . . . . f f . . f f . . . . . 
    . . . . . f f . . f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite.ay = 350
scene.cameraFollowSprite(mySprite)
