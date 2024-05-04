const baseUrls = {
  localhost: 'http://localhost:3000/api',
  development: 'http://192.168.40.66:3030/api',
  production: 'http://192.168.40.66:3030/api',
  staging : 'http://192.168.40.66:3030/api'
};
export const currentEnv = import.meta.env.VITE_APP_BASE_URL;
export const BASE_URL = baseUrls[currentEnv] || '';

// console.log(BASE_URL,'BASE_URLBASE_URLBASE_URL');

const uuids = { 
   localhost: 'dca91922-562d-4c06-9cc1-28d00d6e047e',
   development: 'dca91922-562d-4c06-9cc1-28d00d6e047e', 
   production: 'a19a5233-de99-413e-930a-56bb279324eb',
   staging:  '1fb10fc4-6038-44f1-9816-ed3907158e15'
}
export const currentUUID = uuids[currentEnv] || ''
// console.log(currentUUID,'currentUUIDcurrentUUIDcurrentUUID')


export const TIMEOUT = 5000;


