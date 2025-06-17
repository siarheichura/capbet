import { LeagueIdEnum } from '../enums/league-id';

export interface LeagueModel {
  idLeague: LeagueIdEnum;
  strLeague: string;
  strLeagueBadge: string;
  rounds: number;
}
