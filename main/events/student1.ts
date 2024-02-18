import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-STU1', 
    hitbox: {
        width: 50,
        height: 36
    }
})
export default class StudentEvent extends RpgEvent {
    onInit() {
        this.setGraphic('student_03')
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
            await this.conversationWithZoey(player)
            player.setVariable('TALK_TO_STUDENT', true)
            return
        }
        console.log('Talk to student', hasTalkToStudent)
        
    }

    async conversationWithZoey(player: RpgPlayer) {
        await player.showText('Student A: Hey, have you heard? The midterm results are going up tomorrow. I\'m pretty sure I aced it.', {
            talkWith: this
        })
        await player.showText('Student B: Yeah, I heard. I\'m not sweating it. Studied enough to get by. How about you, Zoey? You think you did well?', {
            talkWith: this
        })
        // Zoey's internal thought
        await player.showText('(thinking) Did well? I barely slept trying to cover everything. But can I really say that? It feels like everyone else is so confident.', {
            talkWith: this
        })

        // Offering player choices for Zoey's response
        const response = await player.showChoices('How do you want to respond?', [
            { text: 'I hope so. You know, just glad it\'s over.', value: 'hopeful' },
            { text: 'Honestly, I\'m not sure. I studied a lot, but you never know with these exams.', value: 'uncertain' }
        ], { talkWith: this })

        switch (response?.value) {
            case 'hopeful':
                await player.showText('Zoey: I hope so. You know, just glad it\'s over.', {
                    talkWith: this
                });
                break;
            case 'uncertain':
                await player.showText('Zoey: Honestly, I\'m not sure. I studied a lot, but you never know with these exams.', {
                    talkWith: this
                });
                break;
            default:
                // Handle case where no choice is made (if possible, depending on your game's logic)
                console.log('No choice made or unexpected choice value.');
                break;
        }

        // Continue the conversation based on player's choice
        await player.showText('Student A: Oh, come on, Zoey. You always say that and then you end up with the top scores. Must be nice not to worry.', {
            talkWith: this
        })
        await player.showText('Student B: True, but it\'s not just about passing, right? I mean, my parents expect nothing less than an A. Anything else is like failing to them.', {
            talkWith: this
        })

        // Zoey's internal reflection
        await player.showText('(thinking) An A... I can\'t even imagine bringing home anything less. The thought alone is suffocating.', {
            talkWith: this
        })
    }
} 