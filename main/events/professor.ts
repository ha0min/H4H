import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-PRO', 
    hitbox: {
        width: 20,
        height: 16
    }
})
export default class ProfessorEvent extends RpgEvent {
    onInit() {
        this.setGraphic('oldwoman')
    }

    async onAction(player: RpgPlayer) {
        const val = player.getVariable('PROFESSOR_TRAUMA')
        console.log(val);
        if (val) {
            await player.showText('I have nothing to say to you.', {
                talkWith: this
            })
            return
        }

        const hasTalkToStudent = player.getVariable('TALK_TO_STUDENT')
        if (!hasTalkToStudent) {
            await player.showText('I\'m busy submitting the exam result to Camino right now...', {
                talkWith: this
            })
            await player.showText('Can you come back later?', {
                talkWith: this
            })
            return
        }
        console.log('Talk to student', hasTalkToStudent)
        
        await player.showText('Congrats, Zoey! You got a B+ in your midterm, which is top quartile!', {
            talkWith: this
        })

        player.setVariable('TALKED_PROFESSOR', true)

    }
} 