import App from "./App.svelte";
import { AppVm } from "./App.vm";

new App({
	props: { vm: new AppVm() },
    target: document.body,
});
