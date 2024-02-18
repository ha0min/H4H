import { RpgEvent, EventData, RpgPlayer, Speed, ShapePositioning } from '@rpgjs/server'

@EventData({
    name: 'EV-SLEEP'
})
export default class DormMusicEvent extends RpgEvent {
    onInit() {
        this.setHitbox(60, 50)
        this.attachShape({
            height: 60,
            width: 70,
            positioning: ShapePositioning.Center
        })
        //this.infiniteMoveRoute([ Move.tileRandom() ])
    }
    
    async onAction(player: RpgPlayer) {
        await player.showText('Zoe took a good nap..', {
            talkWith: this
            }
        );
        await player.showText('...', {
            talkWith: this
            }
        );
        await player.showText('Coping Technique: Sleep acts like a brain reset, enhancing mental clarity and resilience...', {
            talkWith: this
        });
        await player.showText('... making it easier to manage trauma and stress in one powerful nightly recharge.', {
            talkWith: this
        });
        await player.showText('Good News: Mental capacity up 50%!!!', {
            talkWith: this
        });
        player.hp=Math.min(741 * 1.5, 741);
        
    }
} 