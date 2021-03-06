const LOCAL_TEAM = 0
const AWAY_TEAM = 1

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

    initSchedule() {
        const numberOfMatchDays = this.teams.length -1
        const numberOfMatchesPerMatchDay = this.teams.length / 2
         for(let i=0; i < numberOfMatchDays; i++) {
             const matchDay = [] //jornada vacia
              for(let j=0; j < numberOfMatchesPerMatchDay; j++) {
                  const match = ['Equipo Local', 'Equipo Visitante'] //partido
                  matchDay.push(match)
              }
                 // Una vez añadidos todos los partidos a la jornada
                 // ------------------------------------------------- //
                 this.matchDaySchedule.push(matchDay) // añadimos la jornada a la planificacion
         }
    }

    getTeamNames() {
        return this.teams.map(team => team.name)
    }

    setLocalTeams() {
        const teamNames = this.getTeamNames()
        const maxHomeTeams = this.teams.length - 2
        let teamIndex = 0
        this.matchDaySchedule.forEach(matchDay => {  // por cada jornada
            matchDay.forEach(match => {  // por cada partido de cada jornada
                    // establecer el equipo local
                    match[LOCAL_TEAM] = teamNames[teamIndex]
                    teamIndex++
                    if (teamIndex > maxHomeTeams) {
                        teamIndex = 0
                    }
 
            })
        })
        /* Este codigo seria el equivalente al superior usando bucles clasicos
        for(let i = 0; i < this.matchDaySchedule.length; i++) {
            const matchDay = this.matchDaySchedule[i]
             for(let j = 0; j < matchDay.length; j++) {
                 const match = matchDay[j]
                 // establecer equipo local
             }
        }
        */
    
  }

        setAwayTeams() {
            const teamNames = this.getTeamNames()
            const maxAwayTeams = this.teams.length -2
            let teamIndex = maxAwayTeams 
            this.matchDaySchedule.forEach(matchDay => {
                let isFirstMatch = true
                matchDay.forEach(match => {
                    if (isFirstMatch) {
                        isFirstMatch = false
                    } else {
                    // establecer equipo visitante
                    match[AWAY_TEAM] = teamNames[teamIndex]
                      teamIndex--
                      if (teamIndex < 0) {
                          teamIndex= maxAwayTeams
                      }
                    }
                })
            })
        }

        fixLastTeamSchedule() {
            let matchDayNumber = 1
            const teamNames = this.getTeamNames()
            const lastTeamName = teamNames[teamNames.length - 1]
            this.matchDaySchedule.forEach(matchDay => {
                const firstMatch = matchDay[0]
                   if(matchDayNumber % 2 == 0) {  // jornada par -> juega en casa
                           firstMatch[AWAY_TEAM] = firstMatch[LOCAL_TEAM]
                           firstMatch[LOCAL_TEAM] = lastTeamName
                   } else { // jornada impar -> juega fuera
                          firstMatch[AWAY_TEAM] = lastTeamName
                   }
                // establecer el ultimo equipo de la lista como visitante o local alternativamente
                matchDayNumber++
            })

        }

    scheduleMatchDays() {
        // https://es.wikipedia.org/wiki/Sistema_de_todos_contra_todos
        this.initSchedule()
        this.setLocalTeams()
        this.setAwayTeams()
        this.fixLastTeamSchedule()         

    }  
}