import { GroupByTypePossession } from "../groupByTypePossession";
import { Media } from "../media";
import { Possession } from "../possession";
import { UserPossession } from "../userPossession";
import { UserContent } from "../usersContent";

const user1: UserContent = new UserContent(
    'Pathf',
    [
        new Media(
            'JDR',
            'nameMedia',
            'Genre : Rpg;Test : test',
            'Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu !',
            'url/image'
        ),
        new Media(
            'JV',
            'nameMedia2',
            'Lol : Rpg;XD : test',
            'Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu !',
            'url/image2'
        )
    ]
);

const user2: UserContent = new UserContent(
    'Neo',
    [
        new Media(
            'JDR',
            'nameMedia',
            'Genre : Rpg;Test : test',
            'Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu !',
            'url/image'
        ),
        new Media(
            'JV',
            'Final Fantasy',
            'Genre : RPG;Platforme : PC;Langue : French',
            'Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu !',
            'url/image2'
        ),
        new Media(
            'Manga',
            'nameMedia',
            'Genre : Rpg;Test : test',
            'Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu !',
            'url/image'
        ),
        new Media(
            'JDR',
            'nadsfsdf',
            'Genre : Rpg;Test : test',
            'Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu !',
            'url/image'
        ),
        new Media(
            'JDR',
            'nzerzedfhg',
            'Genre : Rpg;Test : test',
            'Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu ! Petites descriptions sur le media en question qui va servir de paragraphe pour tester un peu le formatage. Bon sa va etre du copié collé mais bon au moins on test un peu !',
            'url/image'
        )
    ]
);

export const usersContents: UserContent[] = [user1, user2];

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