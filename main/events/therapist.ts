import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-THO', 
    hitbox: {
        width: 20,
        height: 16
    }
})
export default class TherapistEvent extends RpgEvent {
    onInit() {
        this.setGraphic('father_friend')
    }

    async onAction(player: RpgPlayer) {
        const val = player.getVariable('TALKED_THERAPIST')
        // create an array of coping tips
        const copingTipsForTrauma = [
            "Remember to breathe. Practice deep breathing exercises to help calm your mind.",
            "Stay connected with loved ones. Support from friends and family can make a big difference.",
            "Keep a journal. Writing down your thoughts and feelings can be a cathartic way to process them.",
            "Limit your exposure to news and social media if it feels overwhelming.",
            "Engage in physical activity. Exercise can help reduce stress and improve your mood.",
            "Establish a routine. Having a sense of normalcy can provide comfort and stability.",
            "Focus on what you can control. Let go of what you cannot control.",
            "Practice mindfulness or meditation. These practices can help ground you in the present moment.",
            "Seek professional help if you're struggling to cope. There's strength in asking for support.",
            "Be patient with yourself. Healing from trauma takes time, and it's okay to move at your own pace."
        ];
        console.log(val);
        if (val) {
            const randomTipIndex = Math.floor(Math.random() * copingTipsForTrauma.length);
            const tip = copingTipsForTrauma[randomTipIndex];
            await player.showText(`Therapist: Zoe my dear, the key to happiness lies within your hand`,  {
                talkWith: this
            })
            await player.showText(`Therapist: Actually, I have a tip for you: ${tip}`,  {
                talkWith: this
            })
            return
        }
        else{
            const response = await player.showChoices('Therapist: Beautiful day isn\'t it, Zoe! Are you here for my advice?', [
                { text: 'Sir, I don\'t know what is wrong with me...', value: 'yes' },
                { text: 'Thank you Sir, I think I can handle it.', value: 'no' }
            ], { talkWith: this });
    
            switch (response?.value) {
                case 'yes':
                    
                    await player.showText("Therapist: It happens, Zoe, though it sounds like cliche, your feelings are valid", {
                        talkWith: this
                    });
                    await player.showText("Therapist: Try to be kind to yourself during this time. Remember that healing takes time, and it's okay to take things one step at a time.", {
                        talkWith: this
                    });
                    await player.showText('Good News: Zoe\'s feeling a bit better...Mental Capacity up 50%', {
                        talkWith: this
                    })
                    player.hp=Math.min(player.hp+741*0.5, 741);
                    break;
                case 'no':
                    await player.showText("Therapist: Sure, come back to me anytime you want, Zoe.", {
                        talkWith: this
                    });
                    break;
                default:
                    console.log('Unexpected choice value or no choice made.');
                    break;
            }
        }
    
        player.setVariable('TALKED_THERAPIST', true)

    }
} 