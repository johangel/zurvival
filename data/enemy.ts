export enum EnemyConditions {
  bleeding,
  poison,
  burn,
  confusion,
}

export enum AttackType {
  fire,
  frost,
  poison,
  bledd
}

// TODO: Define better
export enum EnemyType {
  shadow,
  fairy
}
//TODO: Define
export interface EnemyArgs{
  name: string;
  type: EnemyType;
  attackType: AttackType;
  resistence: AttackType[];
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
  constructor(args: EnemyArgs){
    this.name = args.name;
    this.type = args.type;
    this.currentLifePoints = 100;
    this.maxLifePoints = 100;
    this.conditions = [];
    this.attackDamage = 10;
    this.attackType = args.attackType;
    this.resistence = args.resistence;
    this.level = 1;
  }
}

export default Enemy
