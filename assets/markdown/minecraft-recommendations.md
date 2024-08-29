# Minecraft Modding Reccomendations
## What to Avoid
* ### Most Mod Downloading Websites
  * Most mod downloading websites will steal mods and reupload them without the author's permission, sometimes including a virus in the mods.
  * If a mod is not very recent, curseforge might be a viable option, but I have reasons not to use it below
* ### Paid Custom Content
  * This includes mods, cosmetics, etc. See [Minecraft's EULA](https://www.minecraft.net/en-us/eula) (specifically `Any Mods you create for Minecraft: Java Edition from scratch belong to you (including pre-run Mods and in-memory Mods) and you can do whatever you want with them, as long as you don't sell them for money / try to make money from them and so long as you don’t distribute Modded Versions of the game`).
  * This includes mods like OptiFine & Essential, and clients like Badlion & Lunar.
  * For free cosmetics, see Figura below.
* ### Clients and (many) launchers
  * Clients
    * This includes, but is not limited to badlion and lunar client.
    * These examples steal mods and modify them in an undisclosed way.
    * Lunar specifically
      * Obfuscates logs (fun fact, this makes it really hard to diagnose any issues you might face)
      * Please read their [Privacy Policy](https://www.lunarclient.com/privacy). It contains many suspicious things.
  * If any client/launcher/anything needs your microsoft account's password, do not use it. Any good client/launcher will redirect you to an OAUTH screen that lets it log into your minecraft account and nothing else.
* ### CurseForge
  * CurseForge has had issues with malware, bad practices (allowing illegal reuploads of sodim, iris, and other mods), and and has been superceded by Modrinth in almost every way
  * CurseForge Launcher
    * See `many launchers`
* ### OptiFine (1.14 and above)
  * Has violated [Minecraft's EULA](https://www.minecraft.net/en-us/eula) many times in the past
  * Is closed source (meaning almost nobody can see the source code, making mod compatibility hard)
  * Embeddium has far better performance
* ### Essential
  * See `Paid Custom Content`
  * Downloading the mod actually just downloads a downloader for the mod, making it bypass many virus scanners on mod websites like Modrinth

## General Recommendations
* Modrinth (Launcher & Mod distribution website)
* Prism Launcher (MultiMC Fork)
* Fabric (Mod Loader)
* MCArchive (Mod Archival Website)

## Performance Mods
* Embeddium
  * A fork of sodium based on its last FOSS build before relicensing
  * Can be used on forge
* Lithium
  * Boosts performance by optimizing various minecraft mechanics without changing features
* Iris (Shaders)
  * Skip this if you don't care about shader support
* General Mods
  * Modern Fix, Memory Leak Fix, More Culling, and Ferrite Core
* EMI
  * If you use this, you might want Not Enough Recipe Books as well, to remove the recipe book
  * JEI replacement
  * Install JEI as well for more compatibility

## Other Stuff
* [Figura](https://modrinth.com/mod/figura)
  * Allows users to create avatars that can be scripted with Lua
  * Completely client sided
  * Avatars can be seen by other players with the mod
  * Disclaimer: I am biased as I have contributed to the Figura mod, and am one of the lead developers on the GoofyPlugin addon for Figura
* [No Chat Reports](https://modrinth.com/mod/no-chat-reports)
  * Disables the signing of chat messages in order to stop you from being reported to Microsoft.
  * Some servers will require that it be disabled
* [e4mc](https://modrinth.com/mod/e4mc)
  * Gives you an IP to send to friends upon opening to LAN
* [Custom LAN](https://modrinth.com/mod/custom-lan)
  * Makes the `Open to LAN` screen more powerful
  * Allows tunneling (an alternative to e4mc)
* [ViaFabricPlus](https://modrinth.com/mod/viafabricplus)
  * Allows joining older Minecraft versions on newer clients (e.g. joining a 1.8 server on 1.20.4)
  * Can be seen as packet manipulation to some anti-cheats
