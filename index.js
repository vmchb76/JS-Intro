
import FootballLeague from './classes/PointsBasedLeague.js'
import { premierLeagueTeams } from './teams.js'

const config = {pointsPerWin : 2}

// const premier = new FootballLeague('Premier League', premierLeagueTeams, config)
// prueba
   const premier = new FootballLeague('Premier League', ['A', 'B', 'C', 'D'], config)


    /*function getTeamName(team) {
        console.log('Voy a conertir:', team.name)
        return team.name
    }*/

    /*const getTeamName = function(team) {
          return team.name 
    }*/

    const teamNames = premier.teams.map(team => team.name)

    premier.scheduleMatchDays()
    console.log(premier.matchDaySchedule)
    
    /*teamNames.forEach(function (equipo) {
        console.log(equipo)
       }
    )*/

    //console.log(premier.teams)
    //console.log(teamNames)

    // Esto hace el map
    /*
    premier.teams.map = function(funcionAejecutarConCadaElementoDelArray) {
        const result = []
        for(const team of this.teams) {
            const newTeam = funcionAejecutarConCadaElementoDelArray(team)
            result.push(newTeam)
        }
        return result
    } */

   /*
    for(const teamName of teamNames) {
        console.log(teamName)
    }
   */

    /* for(const team of premier.teams) {
         console.log(team.name)
     } */

     