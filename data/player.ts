export enum PlayerProfessions {
  Civilian,
  Engineer,
  Doctor,
  Carpenter,
  Police
}

export enum PlayerConditions {
  Drowsy,
  Hungry,
  Thirsty,
  Bleeding,
  Horny
}

export interface PlayerStats {
  strength: number;
  endurance: number;
  luck: number;
}

export interface PlayerArgs {
  name: string;
  profession: PlayerProfessions;
  stats: PlayerStats;
}

class Player {
  name: string;
  currentLifePoints: number;
  maxLifePoints: number;
  conditions!: PlayerConditions[];
  profession: PlayerProfessions;
  thirst: number;
  hunger: number;
  level: number;
  currentExperience: number;
  nextLevelExperience: number;
  stats: PlayerStats;

  constructor(args: PlayerArgs) {
    this.name = args.name;
    this.profession = args.profession;
    this.currentLifePoints = 100;
    this.maxLifePoints = 100;
    this.conditions = [];
    this.thirst = 100;
    this.hunger = 100;
    this.level = 1;
    this.currentExperience = 0;
    this.nextLevelExperience = this.level * 100;
    this.stats = args.stats;
  }
}

export default Player;
