import { RpgEvent, EventData, RpgPlayer, ShapePositioning } from "@rpgjs/server";

@EventData({
  name: "EV-DAD2",
  hitbox: {
    width: 40,
    height: 45,
  },
})
export default class DaughterEvent extends RpgEvent {
  onInit() {
    this.attachShape({
        height: 20,
        width: 40,
        positioning: ShapePositioning.Center
    })  }
  async onPlayerTouch(player: RpgPlayer) {
    const val = player.getVariable("SWIMMINGPAST_TRAUMA");
    console.log(val);
    if (val) {
      await player.showText("I am feared", {
        talkWith: this,
      });
      return;
    }
    const hasTalkToDad = player.getVariable("TALK_TO_DAD_PAST");
    if (!hasTalkToDad) {
      await this.conversationWithZoeyPast(player);
      player.setVariable("TALK_TO_DAD_PAST", true);
      return;
    }
    console.log("Talk to LifeGuard", hasTalkToDad);
  }

  async conversationWithZoeyPast(player: RpgPlayer) {
    await player.showText(
      "MEMORY:[A shimmering pool. Zoe, 7, hesitates at the edge, her father stands firm beside her.]",
      {
        talkWith: this,
      }
    );
    // Zoey's internal thought
    await player.showText("Dad: Time to learn, Zoe. In you go.", {
      talkWith: this,
    });
    await player.showText("Zoe: But I'm scared!", {
      talkWith: this,
    });
    await player.showText(
      "[Dad, without hesitation, lifts and throws Zoe into the pool. She splashes, flails, then starts treading water.]",
      {
        talkWith: this,
      }
    );
    // Zoey's internal thought
    await player.showText("Zoe (Panicking): Dad!", {
      talkWith: this,
    });
    await player.showText("Dad: Swim, Zoe! You can do it.", {
      talkWith: this,
    });
    await player.showText(
      "[Zoe, after a struggle, begins to paddle towards the edge, catching her breath.]",
      {
        talkWith: this,
      }
    );
    await player.showText("Dad: See? You're braver than you think.", {
      talkWith: this,
    });
    await player.showText("Zoe (Tearfully): Why?", {
      talkWith: this,
    });
    await player.showText(
      "Dad: Fear's conquered by facing it, Zoe. You'll see.",
      {
        talkWith: this,
      }
    );
    player.hp -= 741*0.5;

    await player.changeMap("Pool", { x: 657, y: 400 });
  }
}
