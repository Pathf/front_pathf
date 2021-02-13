import { Possession } from "./possession";

export class GroupByTypePossession {
    constructor(public type: string, public list: Possession[]) { }
}