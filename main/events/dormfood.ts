import { RpgEvent, EventData, RpgPlayer, Speed, ShapePositioning } from '@rpgjs/server'

@EventData({
    name: 'EV-FOOD'
})
export default class DormMusicEvent extends RpgEvent {
    onInit() {
        this.setHitbox(20, 20)
        //this.infiniteMoveRoute([ Move.tileRandom() ])
    }
    
    async onAction(player: RpgPlayer) {
        await player.showText('Zoe took great meal..', {
            talkWith: this
            }
        );
        await player.showText('Coping Technique: Eating healthy foods gives your brain the energy it needs to better handle tough times and improve emotional stability....', {
            talkWith: this
        });
        // todo: add hp
    }
} 