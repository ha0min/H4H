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
        const val = player.getVariable('TALKED_PROFESSOR')
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
            await player.showText('\(Fine...I will hang around.\)', {
                talkWith: this
            })
            return
        }
        console.log('Talk to student', hasTalkToStudent)
        
        await player.showText('Congrats, Zoey! You got a B+ in your midterm, which is top quartile!', {
            talkWith: this
        })
        await player.showText('Bad News: Zoe\'s trauma has been triggered...Mental Capacity down 50%', {
            talkWith: this
        })
        player.hp -= 741*0.5;
        player.setVariable('TALKED_PROFESSOR', true)

    }
} 