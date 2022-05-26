import Character, { CharacterArgs } from "./character";
export enum EnemyConditions {
  Bleeding,
  Poison,
  Burn,
  Confusion,
}

export enum AttackType {
  Fire,
  Frost,
  Poison,
  Bleed,
}

// TODO: Define better
export enum EnemyType {
  Shadow,
  Fairy,
}

export interface EnemyArgs extends CharacterArgs {
  type: EnemyType;
  attackType: AttackType;
  resistence: AttackType[];
  level: number;
  attackDamage: number;
  maxLifePoints: number;
}

class Enemy extends Character {
  type: EnemyType;
  conditions!: EnemyConditions[];
  attackDamage: number;
  attackType: AttackType;
  resistence: AttackType[];

  constructor(args: EnemyArgs) {
    super(args);
    this.type = args.type;
    this.conditions = [];
    this.attackDamage = args.attackDamage;
    this.attackType = args.attackType;
    this.resistence = args.resistence;
    this.level = args.level;
  }
}

export default Enemy;
