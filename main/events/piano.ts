import { RpgEvent, EventData, RpgPlayer, Speed, ShapePositioning } from '@rpgjs/server'

@EventData({
    name: 'EV-MUSIC'
})
export default class DormMusicEvent extends RpgEvent {
    onInit() {
        this.setHitbox(80, 40)
        //this.infiniteMoveRoute([ Move.tileRandom() ])
    }
    
    async onAction(player: RpgPlayer) {
        await player.showText('Try play piano to make you happy.', {
            talkWith: this
        });
    }
} 