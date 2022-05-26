export interface CharacterArgs {
  name: string;
}

export class Character {
  name: string;
  currentLifePoints: number;
  maxLifePoints: number;
  level: number;

  constructor(args: CharacterArgs) {
    this.name = args.name;
    this.currentLifePoints = 100;
    this.maxLifePoints = 100;
    this.level = 1;
  }
}
export default Character;
