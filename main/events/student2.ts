import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-STU2', 
    hitbox: {
        width: 20,
        height: 16
    }
})
export default class ProfessorEvent extends RpgEvent {
    onInit() {
        this.setGraphic('student_06')
    }
} 