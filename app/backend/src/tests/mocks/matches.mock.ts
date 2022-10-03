const allMatches = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: true,
    teamHome: {
      teamName: 'Baby Bolinho',
    },
    teamAway: {
      teamName: 'Singers Flamingos',
    },
  },
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 8,
    inProgress: false,
    teamHome: {
      teamName: 'Worker Bees',
    },
    teamAway: {
      teamName: 'Sparkling Platypuses',
    },
  },
  {
    id: 3,
    homeTeam: 4,
    homeTeamGoals: 3,
    awayTeam: 11,
    awayTeamGoals: 0,
    inProgress: false,
    teamHome: {
      teamName: 'Error Code',
    },
    teamAway: {
      teamName: 'Summer Team',
    },
  },
  {
    id: 4,
    homeTeam: 3,
    homeTeamGoals: 0,
    awayTeam: 2,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: 'Spring Fairies',
    },
    teamAway: {
      teamName: 'Brave Squad',
    },
  },
  {
    id: 5,
    homeTeam: 7,
    homeTeamGoals: 6,
    awayTeam: 10,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: 'Rainbow Warriors',
    },
    teamAway: {
      teamName: 'Spring Team',
    },
  },
  {
    id: 6,
    homeTeam: 17,
    homeTeamGoals: 0,
    awayTeam: 8,
    awayTeamGoals: 3,
    inProgress: false,
    teamHome: {
      teamName: 'Cute Bunnies'
    },
    teamAway: {
      teamName: 'The Platypuses'
    }
  },
  {
    id: 7,
    homeTeam: 12,
    homeTeamGoals: 0,
    awayTeam: 2,
    awayTeamGoals: 2,
    inProgress: false,
    teamHome: {
      teamName: 'Winter Teams'
    },
    teamAway: {
      teamName: 'Brave Squad'
    }
  },
  {
    id: 8,
    homeTeam: 15,
    homeTeamGoals: 0,
    awayTeam: 5,
    awayTeamGoals: 0,
    inProgress: false,
    teamHome: {
      teamName: 'Rainbow Prime'
    },
    teamAway: {
      teamName: 'Barbie Team'
    }
  },
  {
    id: 9,
    homeTeam: 9,
    homeTeamGoals: 3,
    awayTeam: 18,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: 'Worker Bees'
    },
    teamAway: {
      teamName: 'Flying High'
    }
  },
  {
    id: 10,
    homeTeam: 6,
    homeTeamGoals: 1,
    awayTeam: 13,
    awayTeamGoals: 2,
    inProgress: false,
    teamHome: {
      teamName: 'Fantastic World Team'
    },
    teamAway: {
      teamName: 'Autumn Team'
    }
  },
];

const inProgressMatches = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: true,
    teamHome: {
      teamName: 'Baby Bolinho',
    },
    teamAway: {
      teamName: 'Singers Flamingos',
    },
  },
  {
    id: 4,
    homeTeam: 3,
    homeTeamGoals: 0,
    awayTeam: 2,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: 'Spring Fairies',
    },
    teamAway: {
      teamName: 'Brave Squad',
    },
  },
  {
    id: 5,
    homeTeam: 7,
    homeTeamGoals: 6,
    awayTeam: 10,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: 'Rainbow Warriors',
    },
    teamAway: {
      teamName: 'Spring Team',
    },
  },
];

const finishedMatches = [
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 8,
    inProgress: false,
    teamHome: {
      teamName: 'Worker Bees',
    },
    teamAway: {
      teamName: 'Sparkling Platypuses',
    },
  },
  {
    id: 3,
    homeTeam: 4,
    homeTeamGoals: 3,
    awayTeam: 11,
    awayTeamGoals: 0,
    inProgress: false,
    teamHome: {
      teamName: 'Error Code',
    },
    teamAway: {
      teamName: 'Summer Team',
    },
  },
  {
    id: 6,
    homeTeam: 17,
    homeTeamGoals: 0,
    awayTeam: 8,
    awayTeamGoals: 3,
    inProgress: false,
    teamHome: {
      teamName: 'Cute Bunnies'
    },
    teamAway: {
      teamName: 'The Platypuses'
    }
  },
  {
    id: 7,
    homeTeam: 12,
    homeTeamGoals: 0,
    awayTeam: 2,
    awayTeamGoals: 2,
    inProgress: false,
    teamHome: {
      teamName: 'Winter Teams'
    },
    teamAway: {
      teamName: 'Brave Squad'
    }
  },
  {
    id: 8,
    homeTeam: 15,
    homeTeamGoals: 0,
    awayTeam: 5,
    awayTeamGoals: 0,
    inProgress: false,
    teamHome: {
      teamName: 'Rainbow Prime'
    },
    teamAway: {
      teamName: 'Barbie Team'
    }
  },
  {
    id: 9,
    homeTeam: 9,
    homeTeamGoals: 3,
    awayTeam: 18,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: 'Worker Bees'
    },
    teamAway: {
      teamName: 'Flying High'
    }
  },
  {
    id: 10,
    homeTeam: 6,
    homeTeamGoals: 1,
    awayTeam: 13,
    awayTeamGoals: 2,
    inProgress: false,
    teamHome: {
      teamName: 'Fantastic World Team'
    },
    teamAway: {
      teamName: 'Autumn Team'
    }
  },
]

export {
  allMatches,
  inProgressMatches,
  finishedMatches
}
