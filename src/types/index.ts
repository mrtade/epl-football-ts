export type TeamDetails = {
  logo: string;
  id: number;
  teamName: string;
  rank: number;
  key: number;
  matchesPlayed: number;
  points: number;
  matchesWin: number;
  matchesDraw: number;
  matchesLose: number;
  goalsFor: number;
  goalsAgainst: number;
  goalsDiff: number;
  uclPosition: boolean;
  eulPosition: boolean;
  relegationPosition: boolean;
};

export type Position = {
  logo: string;
  team_id: number;
  teamName: string;
  rank: number;
  points: number;
  goalsDiff: number;

  all: {
    matchsPlayed: number;
    win: number;
    draw: number;
    lose: number;
    goalsFor: number;
    goalsAgainst: number;
  };
};

export type PremierLeagueTable = Position[];

export type League = {
  logo?: string;
  name?: string;
};
