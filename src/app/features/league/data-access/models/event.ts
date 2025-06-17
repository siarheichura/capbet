import { EventStatusEnum } from '~features/league/data-access/enums/event-status';
import { LeagueIdEnum } from '~features/leagues/data-access/enums/league-id';

export interface EventModel {
  idEvent: string;
  idAPIfootball: string;
  strEvent: string; // 'Real Madrid vs Atletico Madrid'
  strEventAlternate: string; // 'Atletico Madrid @ Real Madrid'
  strFilename: string; // 'UEFA Champions League 2025-03-04 Real Madrid vs Atletico Madrid'
  strSport: string; // 'Soccer'
  idLeague: LeagueIdEnum;
  strLeague: string; // 'UEFA Champions League'
  strLeagueBadge: string; // 'https://www.thesportsdb.com/images/media/league/badge/5y7gsj1678720262.png'
  strSeason: string; // '2024-2025'
  strDescriptionEN: string; // ''
  strHomeTeam: string; // 'Real Madrid'
  strAwayTeam: string; // 'Atletico Madrid'
  intHomeScore: string | null;
  intRound: string;
  intAwayScore: string | null;
  intSpectators: null; // ???
  strOfficial: string;
  strTimestamp: string; // '2025-03-04T20:00:00'
  dateEvent: string; // '2025-03-04'
  dateEventLocal: string; // '2025-03-04'
  strTime: string; // '20:00:00'
  strTimeLocal: string; // '21:00:00'
  strGroup: string;
  idHomeTeam: string;
  strHomeTeamBadge: string;
  idAwayTeam: string;
  strAwayTeamBadge: string;
  intScore: string;
  intScoreVotes: null; // ???
  strResult: string;
  idVenue: string;
  strVenue: string;
  strCountry: string;
  strCity: string;
  strPoster: string;
  strSquare: string;
  strFanart: string;
  strThumb: string;
  strBanner: string;
  strMap: string | null;
  strTweet1: string;
  strTweet2: string;
  strTweet3: string;
  strVideo: string;
  strStatus: EventStatusEnum;
  strPostponed: string; // 'no'
  strLocked: string; // 'unlocked'
}
