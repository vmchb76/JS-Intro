class League {

    constructor(name, teams = [], config = {}) {
        this.name = name
        this.matchDaySchedule = []
        this.setup(config)
        this.setupTeams(teams) 
    }

    setup(config) {
        const defaultConfig = { rounds : 1}
        this.config = Object.assign(defaultConfig, config)
    }

    setupTeams(teamsNames) {
        this.teams = []
           for(const teamName of teamsNames) {
               const team = this.customizeTeam(teamName)
               this.teams.push(team)
           }
    }

    customizeTeam(teamName) {
        return {
            name : teamName,
            matchsWon : 0,
            matchesDrawn : 0,
            matchesLost :0
        }
    }
}

class PointsBasedLeague extends League {
    constructor(name, teams = [], config = {}) {
        super(name, teams, config)
      }

      setup(config) {
          const defaultConfig = {
              rounds : 1,
              PointsPerWin : 3,
              PointsPerDraw : 1,
              PointsPerLost : 0
          }
          this.config = Object.assign(defaultConfig, config)
      }
      customizeTeam(teamName) {
          const customizedTeam = super.customizeTeam(teamName)
          customizedTeam.points = 0
          customizedTeam.goalsFor = 0
          customizedTeam.goalsAgainst = 0
          return customizedTeam
      }
}

const premierLeagueTeams = ['Chelsea', 'Arsenal', 'Crystal Palace', 'Manchester United', 'Fullam', 'Wolves']
const config = {pointsPerWin : 2}
const premier = new PointsBasedLeague('Premier League', premierLeagueTeams, config)

     for(const team of premier.teams) {
         console.log(team.name)
     }