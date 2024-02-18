import { RpgEvent, EventData, RpgPlayer } from "@rpgjs/server";

@EventData({
  name: "EV-LGUA1",
  hitbox: {
    width: 20,
    height: 16,
  },
})
export default class LifeGuardEvent extends RpgEvent {
  onInit() {
    this.setGraphic("father_friend");
  }
  async onAction(player: RpgPlayer) {
    const val = player.getVariable("SWIMMING_TRAUMA");
    console.log(val);
    if (val) {
      await player.showText("I am feared", {
        talkWith: this,
      });
      return;
    }

    const hasTalkToGuard = player.getVariable("TALK_TO_LIFEGUARD");
    if (!hasTalkToGuard) {
      await this.conversationWithZoey1(player);
      player.setVariable("TALK_TO_LIFEGUARD", true);
      return;
    }
    console.log("Talk to LifeGuard", hasTalkToGuard);
  }

  async conversationWithZoey1(player: RpgPlayer) {
    await player.showText(
      "Lifeguard : Hey there, it's a great day for a swim. The water's perfect. Do you want to jump in?.",
      {
        talkWith: this,
      }
    );
    // Zoey's internal thought
    await player.showText(
      '(Stammering) "No, thank you... I... I was just leaving.',
      {
        talkWith: this,
      }
    );

    await player.showText(
      "Lifeguard (Concerned): Are you sure? If you're nervous about swimming, I'm here to help. Everyone deserves to enjoy the water.",
      {
        talkWith: this,
      }
    );
    // Zoey's internal thought
    await player.showText(
      "Zoe's Inner Voice (Panicking): He doesn't understand. How could he? I can't do this. I need to get out of here.",
      {
        talkWith: this,
      }
    );
    await player.showText(
      "Zoe (Forcing a smile): Really, it's fine. I just remembered I have something important to do. Sorry.",
      {
        talkWith: this,
      }
    );
    await player.showText(
      "Zoe's Inner Voice: Run... Escape, just escape. You can't face this, not now. It's too much.",
      {
        talkWith: this,
      }
    );

  }
}
