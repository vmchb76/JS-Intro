export default class League {

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