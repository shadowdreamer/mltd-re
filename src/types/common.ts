export interface card{
  addDate: string
  awakeningText: string
  category: string
  centerEffect: centerEffect[]
  centerEffectName: string
  danceMasterBonus: number
  danceMax: number
  danceMaxAwakened: number
  danceMin: number
  danceMinAwakened: number
  eventId: number
  extraType: number
  flavorText: string
  flavorTextAwakened: string
  id: number
  idolId: number
  idolType: number
  levelMax: number
  levelMaxAwakened: number
  life: number
  masterRankMax: number
  name: string
  rarity: number
  resourceId: string
  skill: skill[]
  skillLevelMax: number
  skillName: string
  sortId: number
  visualMasterBonus: number
  visualMax: number
  visualMaxAwakened: number
  visualMin: number
  visualMinAwakened: number
  vocalMasterBonus: number
  vocalMax: number
  vocalMaxAwakened: number
  vocalMin: number
  vocalMinAwakened: number
}
interface centerEffect{
  attribute: number
  description: string
  id: number
  idolType: number
  value: number[]
}
interface skill {
  description: string
  duration: number
  effectId: number
  evaluation: number
  evaluation2: number
  id: number
  interval: number
  probability: number
}