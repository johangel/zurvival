import Character, { CharacterArgs } from "./character";
// Definitions

export enum PlayerProfessions {
  Civilian,
  Engineer,
  Doctor,
  Carpenter,
  Police,
}

export enum PlayerConditions {
  Drowsy,
  Hungry,
  Thirsty,
  Bleeding,
  Horny,
}

export interface PlayerStats {
  strength: number;
  endurance: number;
  luck: number;
}

export interface PlayerArgs extends CharacterArgs {
  profession: PlayerProfessions;
  stats: PlayerStats;
}

// Model

class Player extends Character {
  conditions!: PlayerConditions[];
  profession: PlayerProfessions;
  nextLevelExperience: number;
  currentExperience;
  stats: PlayerStats;
  thirst: number;
  hunger: number;
  constructor(args: PlayerArgs) {
    super(args);
    this.profession = args.profession;
    this.stats = args.stats;
    this.currentExperience = 0;
    this.nextLevelExperience = this.level * 100;
    this.thirst = 100;
    this.hunger = 100;
  }
}

export default Player;
