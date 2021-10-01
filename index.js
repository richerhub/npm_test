
export function asleep (timeout) {
  console.log('hello ', process.argv[2]);
  return new Promise((resolve, reject)=>{
    setTimeout(resolve,timeout);
  })
}