import { GroupByTypePossession } from "../groupByTypePossession";
import { Possession } from "../possession";
import { UserPossession } from "../userPossession";

const pathf: UserPossession = new UserPossession('Pathf',
    [
        new GroupByTypePossession('JDR', [new Possession('D&D', 'Toutes les version et les campagnes.'),
        new Possession('Z corp')
        ]),
        new GroupByTypePossession('JV', [new Possession('Halo')]),
        new GroupByTypePossession('Manga', [new Possession('One piece')]),
    ]);

const neo: UserPossession = new UserPossession('Neo',
    [
        new GroupByTypePossession('JDR', [new Possession('Ptdr', 'Version et les campagnes.'),
        new Possession('lol')
        ]),
        new GroupByTypePossession('JV', [new Possession('vaso')])
    ]);

export const listUserTestPossession: UserPossession[] = [pathf, neo];