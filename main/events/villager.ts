import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-1', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class VillagerEvent extends RpgEvent {
    onInit() {
        this.setGraphic('father_friend_wife')
    }
    async onAction(player: RpgPlayer) {
        const response = await player.showChoices('Hello, Zoe! It\'s been a long time since I\'ve seen you.', [
            { text: 'Where am I?', value: 'yes' },
            { text: 'Please leave me alone.', value: 'no' }
        ], { talkWith: this });

        switch (response?.value) {
            case 'yes':
                // Provide the game instructions here
                await player.showText("You are now in your trauma zone.\n\n- Use arrow keys to move around.\n- Interact with objects and people using the 'Spacebar'.\n", {
                    talkWith: this
                });
                await player.showText("Explore carefully and interact with everyone you meet. Good luck!", {
                    talkWith: this
                });
                break;
            case 'no':
                await player.showText("Of course! Bye, Zoe.", {
                    talkWith: this
                });
                break;
            default:
                console.log('Unexpected choice value or no choice made.');
                break;
        }
    }
} 