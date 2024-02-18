import { RpgEvent, EventData, RpgPlayer, Move, Speed, ShapePositioning } from '@rpgjs/server'

@EventData({
    name: 'EV-STUM'
})
export default class DormMusicEvent extends RpgEvent {
    onInit() {
        this.setGraphic('student_03')
        this.setHitbox(16, 16)
        this.infiniteMoveRoute([ Move.tileUp(2), Move.tileLeft(1), Move.tileDown(2), Move.tileRight(1)])
        this.speed = Speed.Slow
        this.attachShape({
            height: 30,
            width: 30,
            positioning: ShapePositioning.Center
        })
    }
} 