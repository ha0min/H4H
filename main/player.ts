import { RpgPlayer, type RpgPlayerHooks, Control, Components } from '@rpgjs/server'

const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.name = 'Zoe'
        player.setComponentsTop<any>([
            Components.text('{name}'),
            Components.hpBar({}, '{$null}')
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
        await player.showText('In this adventure, you will step into the shoes of Zoe, navigating her world and uncovering the layers of her story.');
        await player.showText(' It\'s a journey of discovery, resilience, and understanding.');
        await player.showText('As you progress, you will encounter challenges and choices that reveal Zoe\'s trauma history.');
        player.setVariable('AFTER_INTRO', true);
    }
}

export default player