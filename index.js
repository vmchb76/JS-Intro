
import FootballLeague from './classes/PointsBasedLeague.js'
import { premierLeagueTeams } from './teams.js'

const config = {pointsPerWin : 2}
const premier = new FootballLeague('Premier League', premierLeagueTeams, config)

     for(const team of premier.teams) {
         console.log(team)
     }