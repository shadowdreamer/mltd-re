import React, { useEffect } from 'react';
import { getNewCards } from '../service/card'
import { db } from '../dexie'
import cards from './test.json'

function Pages() {
  useEffect(()=>{
    getCard()
  },[])
  async function getCard() {
    console.log('get card');
    console.log(cards);
    
    // const data = await getNewCards({
    //   version:"1",
    //   localLength:600,
    //   onDownloadProgress(ev){

    //   }
    // })
    // console.log(data);
    await db.transaction("rw", db.idols , function () {
      db.idols.bulkPut(cards as any)
    })
  }
  return (
    <div>
      Pages
    </div>
  );
}

export default Pages;
