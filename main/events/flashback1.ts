import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-DAU1', 
    hitbox: {
        width: 5,
        height: 5
    }
})
export default class DaughterEvent extends RpgEvent {
    onInit() {
        this.setGraphic('littlegirl_01')
    }
    async onAction(player: RpgPlayer) {
        const val = player.getVariable("SWIMMINGPAST_TRAUMA");
        console.log(val);
        if (val) {
          await player.showText("I am feared", {
            talkWith: this,
          });
          return;
        }
    
      }
} 