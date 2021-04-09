import League from './League.js'


export default class PointsBasedLeague extends League {
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
          //customizedTeam.points = 0
          //customizedTeam.goalsFor = 0
          //customizedTeam.goalsAgainst = 0
          //return customizedTeam
            return {
                points : 0,
                goalsFor : 0,
                goalsAgaints : 0,
                ...customizedTeam
            }
      }
}