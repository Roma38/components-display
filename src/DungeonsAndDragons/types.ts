export type TRace = 'Dragonborn' | 'Dwarf' | 'Elf' | 'Gnome' | 'Half-Elf' | 'Halfing' | 'Half-Orc' | 'Human' | 'Tiefling';
export type TAlignment = 'Lawful good' | 'Neutral good' | 'Chaotic good' | 'Lawful neutral' | 'True neutral' | 'Chaotic neutral' | 'Lawful evil' | 'Neutral evil' | 'Chaotic evil';
export type TDeathSave = [boolean, boolean, boolean];

export interface IInfo {
  characterName: string;
  classAndLevel: string;  // is it string or number?
  background: string;   // is it color? if it so, should I make a color-picker or select with colors options?
  playerName: string;
  race: TRace;
  alignment: TAlignment;
  experiencePoints: number;
}

export interface IAbilityScores {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface IStats {
  inspiration: number;
  proficiencyBonus: number;
  armorClass: number;
  initiative: number;
  speed: number;
}

export interface ISavingThrows {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  passiveWisdom: number;
}

export interface ISkills {
  acrobatics: number;
  animalHandling: number;
  arcana: number;
  athletics: number;
  deception: number;
  history: number;
  insight: number;
  intimidation: number;
  investigation: number;
  medicine: number;
  nature: number;
  perception: number;
  performance: number;
  persuasion: number;
  religion: number;
  sleightOfHand: number;
  stealth: number;
  survival: number;
}

export interface IAttack {
  name: string;
  atkBonus: string;
  damageOrType: string;
}

export interface ICombat {
  hitPointMaximum: number;
  currentHitPoints: number;
  temporaryHitPoints: number;
  total: number;
  hitDice: string;  // is it just a string?
  deathSaves: {
    successes: TDeathSave;
    failures: TDeathSave;
  };
  attacks: IAttack[];
}

export interface IBackstory {
  personalityTraits: string;
  ideals: string;
  bonds: string;
  flaws: string;
  equipment: string;
  featuresAndTraits: string;
  otherProficiencies: string;
}