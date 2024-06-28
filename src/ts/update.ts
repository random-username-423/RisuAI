import { alertConfirm, alertWait } from "./alert";
import { language } from "../lang";
import { Capacitor } from "@capacitor/core";
import {
    check,
    Update,
} from '@tauri-apps/plugin-updater'
import { relaunch } from '@tauri-apps/plugin-process'

export async function checkRisuUpdate(){

    if(Capacitor.isNativePlatform()){
        return
    }

    return

    try {
        const checked = await check()     
        if(checked.available){
            const conf = await alertConfirm(language.newVersion)
            if(conf){
                alertWait(`Updating to ${checked.version}...`)
                //const updater = new Update();
                
                //await Update()
                await relaunch()
            }
        }
    } catch (error) {
        
    }
}

function versionStringToNumber(versionString:string):number {
    return Number(
      versionString
        .split(".")
        .map((component) => component.padStart(4, "0"))
        .join("")
    );
}