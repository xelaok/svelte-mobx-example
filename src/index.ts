import App from "./App.svelte";
import { AppVM } from "./App.vm";

const appVM = new AppVM();
appVM.load();

new App({
	props: { vm: appVM },
    target: document.body,
});
