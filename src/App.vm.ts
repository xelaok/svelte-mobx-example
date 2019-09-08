import { observable, computed } from "mobx";
import { timeFormatter } from "./utils";

class AppVM {
    @observable
    startTime: Date;

    @observable
    currentTime: Date;

    @computed
    get elapsedSeconds(): number {
        return Math.round((this.currentTime.getTime() - this.startTime.getTime()) / 1000);
    }

    @computed
    get formattedCurrentTime(): string {
        return timeFormatter.format(this.currentTime);
    }

    @computed
    get formattedElapsedSeconds(): string {
        return `${this.elapsedSeconds} ${this.elapsedSeconds === 1 ? "second" : "seconds"}`;
    }

    constructor() {
        this.startTime = new Date();
        this.currentTime = this.startTime;
    }

    load() {
        setInterval(() => this.currentTime = new Date(), 100);
    }
}

export { AppVM };
