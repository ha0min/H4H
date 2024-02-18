import { RpgPlayer, type RpgPlayerHooks, Control, Components } from '@rpgjs/server'

const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.name = 'Zoe'
        player.setComponentsTop<any>([
            Components.text('{name}\n'),
            Components.hpBar({}, '{$percent}%')
        ])
    },
    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },
    async onJoinMap(player: RpgPlayer) {
        if (player.getVariable('AFTER_INTRO')) {
            return
        }
        await player.showText('Welcome to the Journey of Zoe!');
        await player.showText('In this adventure, you will step into the shoes of Zoe, navigating her world and uncovering the layers of her story. It\'s a journey of discovery, resilience, and understanding.');
        await player.showText('As you progress, you will encounter challenges and choices that reveal Zoe\'s trauma history. This game aims to offer insights into the complexities of trauma and the path toward healing.');
        await player.showText('Your decisions will shape the course of Zoe\'s story, offering a deeply personal exploration of its themes. We encourage you to engage with the story at your own pace, reflect on the experiences presented, and consider their impact.');
        await player.showText('This game is part of a larger conversation about trauma, empathy, and healing. We hope it serves as a meaningful addition to your understanding of these important topics.');
        player.setVariable('AFTER_INTRO', true);
    }
}

export default player