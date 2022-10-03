const allMatches = [
  {
    id: 1,
    home_team: 16,
    home_team_goals: 1,
    away_team: 8,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    id: 2,
    home_team: 9,
    home_team_goals: 1,
    away_team: 14,
    away_team_goals: 7,
    in_progress: false,
  },
  {
    id: 3,
    home_team: 14,
    home_team_goals: 14,
    away_team: 11,
    away_team_goals: 0,
    in_progress: false,
  },
  {
    id: 4,
    home_team: 3,
    home_team_goals: 0,
    away_team: 2,
    away_team_goals: 0,
    in_progress: false,
  },
  {
    id: 5,
    home_team: 7,
    home_team_goals: 1,
    away_team: 10,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    id: 6,
    home_team: 14,
    home_team_goals: 14,
    away_team: 13,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    id: 7,
    home_team: 12,
    home_team_goals: 2,
    away_team: 6,
    away_team_goals: 2,
    in_progress: false,
  },
  {
    id: 8,
    home_team: 14,
    home_team_goals: 10,
    away_team: 1,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    id: 9,
    home_team: 1,
    home_team_goals: 0,
    away_team: 12,
    away_team_goals: 3,
    in_progress: false,
  },
  {
    id: 10,
    home_team: 2,
    home_team_goals: 0,
    away_team: 14,
    away_team_goals: 8,
    in_progress: false,
  },
  {
    id: 11,
    home_team: 13,
    home_team_goals: 1,
    away_team: 3,
    away_team_goals: 0,
    in_progress: false,
  },
  {
    id: 12,
    home_team: 6,
    home_team_goals: 0,
    away_team: 4,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    id: 13,
    home_team: 8,
    home_team_goals: 2,
    away_team: 5,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    id: 14,
    home_team: 14,
    home_team_goals: 8,
    away_team: 16,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    id: 15,
    home_team: 10,
    home_team_goals: 0,
    away_team: 15,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    id: 16,
    home_team: 11,
    home_team_goals: 0,
    away_team: 7,
    away_team_goals: 0,
    in_progress: false,
  },
  {
    id: 17,
    home_team: 14,
    home_team_goals: 12,
    away_team: 8,
    away_team_goals: 3,
    in_progress: false,
  },
  {
    id: 18,
    home_team: 12,
    home_team_goals: 4,
    away_team: 5,
    away_team_goals: 2,
    in_progress: false,
  },
  {
    id: 19,
    home_team: 11,
    home_team_goals: 2,
    away_team: 2,
    away_team_goals: 2,
    in_progress: false,
  },
  {
    id: 20,
    home_team: 7,
    home_team_goals: 0,
    away_team: 9,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    id: 21,
    home_team: 6,
    home_team_goals: 3,
    away_team: 13,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    id: 22,
    home_team: 4,
    home_team_goals: 3,
    away_team: 14,
    away_team_goals: 5,
    in_progress: false,
  },
  {
    id: 23,
    home_team: 15,
    home_team_goals: 2,
    away_team: 16,
    away_team_goals: 3,
    in_progress: false,
  },
  {
    id: 24,
    home_team: 10,
    home_team_goals: 2,
    away_team: 14,
    away_team_goals: 2,
    in_progress: false,
  },
  {
    id: 25,
    home_team: 2,
    home_team_goals: 0,
    away_team: 6,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    id: 26,
    home_team: 13,
    home_team_goals: 1,
    away_team: 1,
    away_team_goals: 0,
    in_progress: false,
  },
  {
    id: 27,
    home_team: 5,
    home_team_goals: 1,
    away_team: 15,
    away_team_goals: 2,
    in_progress: false,
  },
  {
    id: 28,
    home_team: 16,
    home_team_goals: 3,
    away_team: 7,
    away_team_goals: 0,
    in_progress: false,
  },
  {
    id: 29,
    home_team: 9,
    home_team_goals: 0,
    away_team: 4,
    away_team_goals: 4,
    in_progress: false,
  },
  {
    id: 30,
    home_team: 3,
    home_team_goals: 0,
    away_team: 12,
    away_team_goals: 4,
    in_progress: false,
  },
  {
    id: 31,
    home_team: 8,
    home_team_goals: 2,
    away_team: 10,
    away_team_goals: 0,
    in_progress: false,
  },
  {
    id: 32,
    home_team: 14,
    home_team_goals: 5,
    away_team: 11,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    id: 33,
    home_team: 14,
    home_team_goals: 6,
    away_team: 16,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    id: 34,
    home_team: 9,
    home_team_goals: 3,
    away_team: 6,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    id: 35,
    home_team: 10,
    home_team_goals: 1,
    away_team: 5,
    away_team_goals: 3,
    in_progress: false,
  },
  {
    id: 36,
    home_team: 2,
    home_team_goals: 0,
    away_team: 7,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    id: 37,
    home_team: 15,
    home_team_goals: 0,
    away_team: 14,
    away_team_goals: 9,
    in_progress: false,
  },
  {
    id: 38,
    home_team: 14,
    home_team_goals: 2,
    away_team: 4,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    id: 39,
    home_team: 3,
    home_team_goals: 2,
    away_team: 11,
    away_team_goals: 0,
    in_progress: false,
  },
  {
    id: 40,
    home_team: 12,
    home_team_goals: 4,
    away_team: 8,
    away_team_goals: 1,
    in_progress: false,
  },
];

export {
  allMatches
}