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

    scheduleMatchDays() {
        const numberOfMatchDays = this.teams.length -1
        const numberOfMatchesPerMatchDay = this.teams.length / 2
         for(let i=0; i < numberOfMatchDays; i++) {
             const matchDay = [] //jornada vacia
              for(let j=0; j < numberOfMatchesPerMatchDay; j++) {
                  const match = ['Equipo Local', 'Equipo Visitante'] //partido
                  matchDay.push(match)
              }
                 // Una vez añadidos todos los partidos a la jornada
                 this.matchDaySchedule.push(matchDay) // añadimos la jornada a la planificacion
         }
    }
}