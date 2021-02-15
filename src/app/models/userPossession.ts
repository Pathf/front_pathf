import { GroupByTypePossession } from "./groupByTypePossession";

export class UserPossession{
    constructor(public name: string, public listByType: GroupByTypePossession[]) { }
}