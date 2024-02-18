import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-STU2', 
    hitbox: {
        width: 5,
        height: 5
    }
})
export default class ProfessorEvent extends RpgEvent {
    onInit() {
        this.setGraphic('student_06')
    }
} 