import { card } from "../types/common";
import { matsuriReq,funcReq } from './request'

export const versionCheck = async () =>{
  const _res = await matsuriReq.get('mltd/version/latest');
  return _res.data.res
}

export const getNewCards = async ({version,localLength,onDownloadProgress}:{
  version:string,
  localLength:number,
  onDownloadProgress:(ev:any)=>void
}):Promise<card[]> =>{
  const _res = await funcReq.post('',{ version,localLength },{
    onDownloadProgress,
  });

  return _res.data
}