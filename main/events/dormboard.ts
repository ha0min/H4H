import { RpgEvent, EventData, RpgPlayer, Speed, ShapePositioning } from '@rpgjs/server'

@EventData({
    name: 'EV-BOARD'
})
export default class DormBoardEvent extends RpgEvent {
    onInit() {
        this.setHitbox(40, 40)
        //this.infiniteMoveRoute([ Move.tileRandom() ])
        this.speed = Speed.Slow
        this.attachShape({
            height: 40,
            width: 40,
            positioning: ShapePositioning.Center
        })
    }
    
    async onPlayerTouch(player: RpgPlayer) {
        const response = await player.showChoices('Do you want to read the bulletin board?', [
            { text: 'Yes.', value: true },
            { text: 'No, thank you.', value: false }
        ], { talkWith: this })

        switch (response?.value) {
            case true:
                await player.showText('Bulletin Board: Happy Week 7, Alpha! We are so proud to see you pass the midterm. ', {
                    talkWith: this
                });
                await player.showText('Poster 1: Remember, it\'s okay not to feel okay. If you\'re struggling or just need someone to talk to, our CAPS service is here for you. Together, we\'re stronger.', {
                    talkWith: this
                });
                await player.showText('Poster 2: H4H is hosting, come and join us for a better world!', {
                    talkWith: this
                });
                // add text
                break;
            case false:
                // add text
                break;
            default:
                // Handle case where no choice is made (if possible, depending on your game's logic)
                console.log('No choice made or unexpected choice value.');
                break;
        }
    }
} 