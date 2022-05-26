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
  Bleed
}

// TODO: Define better
export enum EnemyType {
  Shadow,
  Fairy
}

export interface EnemyArgs {
  name: string;
  type: EnemyType;
  attackType: AttackType;
  resistence: AttackType[];
  level: number;
  attackDamage: number;
  maxLifePoints: number;
}

class Enemy {
  name: string;
  type: EnemyType;
  currentLifePoints: number;
  maxLifePoints: number;
  conditions!: EnemyConditions[];
  attackDamage: number;
  attackType: AttackType;
  resistence: AttackType[];
  level: number;
  constructor(args: EnemyArgs) {
    this.name = args.name;
    this.type = args.type;
    this.currentLifePoints = 100;
    this.maxLifePoints = args.maxLifePoints;
    this.conditions = [];
    this.attackDamage = args.attackDamage;
    this.attackType = args.attackType;
    this.resistence = args.resistence;
    this.level = args.level;
  }
}

export default Enemy
