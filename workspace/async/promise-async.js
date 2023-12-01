const DB = [];

function saveDB(user) {
  const beforeLength = DB.length;
  const afterLength = DB.push(user);
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      console.log(`save ${user.name} to DB`);
      if(beforeLength < afterLength){
        resolve(user);
      }else{
        reject(new Error("saveDB() error"));
      }
    }, 3000)
  });
}

function sendEmail(user){
  return new Promise((resolve) => {
    setTimeout(function(){
      console.log(`email to ${user.email}`);
      resolve(user)
    }, 2000)
  });
}

function getResult(user){
  return new Promise((resolve) => {
    setTimeout(function(){
      console.log(`success`)
      resolve(`success register ${user.name}`);
    }, 1000);
  })
}

function register(user){
  const resultAsync = Promise.all([
    saveDB(user),
    sendEmail(user),
    getResult(user)
  ]);

  resultAsync.then(console.log);
}

register({
  name: '한동석',
  email: 'tedhan1204@gmail.com'
});