import { GroupByTypePossession } from "./groupByTypePossession";
import { Possession } from "./possession";

export class UserPossession{
    constructor(public name: string, public listByType: GroupByTypePossession[]) { }
}