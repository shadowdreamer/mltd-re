import Dexie from 'dexie';
import {card} from './types/common'

// let db = new Dexie('mltd_db')
class CardDatabase extends Dexie {
  public idols: Dexie.Table<card, number>; // id is number in this case

  public constructor() {
      super("idols");
      this.version(1).stores({
          idols: "id,addDate,idolType,idolId,rarity,extraType"
      });
      this.idols = this.table("idols");
  }
}
// db.version(1).stores({ idols: ""})
// export {
//     db
// }
export const db = new CardDatabase()