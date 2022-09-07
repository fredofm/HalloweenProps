export class Prop {    
    id: number = 1;
    name: string= '';
    lastRunning: Date = new Date();
    activatable: boolean = false;

    constructor(id: number, name: string, lastRunning: Date, activatable: boolean) {
        this.id = id;
        this.name = name;
        this.lastRunning = lastRunning;
        this.activatable = activatable;
    }
}