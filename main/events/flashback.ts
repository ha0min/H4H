import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-DAD1', 
    hitbox: {
        width: 5,
        height: 5
    }
})
export default class DadEvent extends RpgEvent {
    onInit() {
        this.setGraphic('father')
    }
} 

