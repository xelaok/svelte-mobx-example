import { makeAutoObservable, observable, computed, action } from "mobx";
import { timeFormatter } from "./utils";

const UPDATE_INTERVAL = 250;

export class AppVm {
    startTime: Date = new Date();
    currentTime: Date = new Date();

    constructor() {
        makeAutoObservable(this, {
            startTime: observable,
            currentTime: observable,
            elapsedSeconds: computed,
            currentTimeString: computed,
            elapsedSecondsString: computed,
            updateCurrentTime: action,
        });

        setInterval(() => this.updateCurrentTime(), UPDATE_INTERVAL);
    }

    get elapsedSeconds() {
        return Math.round((this.currentTime.getTime() - this.startTime.getTime()) / 1000);
    }

    get currentTimeString() {
        return timeFormatter.format(this.currentTime);
    }

    get elapsedSecondsString() {
        return `${this.elapsedSeconds} ${this.elapsedSeconds === 1 ? "second" : "seconds"}`;
    }

    updateCurrentTime() {
        this.currentTime = new Date();
    }
}
