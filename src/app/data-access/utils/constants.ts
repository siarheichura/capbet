import { LeagueIdEnum } from '../enums/league-id.enum';

export const LEAGUES = [
  {
    idLeague: LeagueIdEnum.EnglishPremierLeague,
    strLeague: 'Premier League',
    strLeagueBadge: 'https://www.thesportsdb.com/images/media/league/badge/gasy9d1737743125.png',
    rounds: 38,
  },
  {
    idLeague: LeagueIdEnum.SpanishLaLiga,
    strLeague: 'La Liga',
    strLeagueBadge: 'https://www.thesportsdb.com/images/media/league/badge/ja4it51687628717.png',
    rounds: 38,
  },
  {
    idLeague: LeagueIdEnum.UefaChampionsLeague,
    strLeague: 'UEFA Champions League',
    strLeagueBadge: 'https://www.thesportsdb.com/images/media/league/badge/5y7gsj1678720262.png',
  },
];
