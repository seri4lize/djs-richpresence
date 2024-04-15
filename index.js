const { botId, LargeImgURL, SmallImgURL } = require("./config.json");
const botid = `${botId}`;
const DiscordRPC = require("discord-rpc");
const RPC = new DiscordRPC.Client({ transport: "ipc" });
DiscordRPC.register(botid);
async function activity() {
  if (!RPC) return;

  RPC.setActivity({
    details: "Some details",
    state: "(1/2)",
    largeImageKey: `${LargeImgURL}`, // 1024x1024 recommended
    largeImageText: "",
    smallImageKey: `${SmallImgURL}`, // 1024x1024 recommended
    smallImageText: "Something about small text",
    instance: false,
    startTimestamp: Date.now(),
    buttons: [
      {
        label: "Button1",

        url: "https://discord.com/users/1198959852739899524",
      },
      {
        label: "Button2",

        url: "https://github.com/Bur4kt",
      },
    ],
  });
}
RPC.on("ready", async () => {
  console.clear();
  console.log(`Rich Presence is Online!\nID:${botid}`);
  activity();

  setInterval(() => {
    activity();
  }, 1000000000);
});

RPC.login({ clientId: botid });
