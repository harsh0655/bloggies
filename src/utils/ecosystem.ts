import axios from "axios";
const BASE_URL = "/api";

export async function enrollUser(userId: string) {
  return safePost(`${BASE_URL}/api/enroll-user`, {userId});
}


export async function awardCredit(userId: string, credits: number = 1){
  return safePost(`${BASE_URL}/api/award-credit`, {userId , credits});
}

export async function removeUser(userId: string){
  return safePost(`${BASE_URL}/api/remove-user`,{userId });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function safePost(url:string, data: any, retries = 2):Promise<any>{
  try{
    const response = await axios.post(url, data);
    return response.data;
  }
  catch(error: any){
    if(retries >0){
      console.warn(`retrying ${url}... (${retries} left) `);
      return safePost(url, data, retries - 1);
    }
    else{
      console.error(`failed to call ${url} `, error.message);
      return null;
  }
  }



};
