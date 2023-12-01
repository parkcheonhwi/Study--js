const file = require("fs");
// const user = new Object();

// user.name = "한동석";
// user.id = "hds1234";
// user.password = "1234";

// const userJSON = JSON.stringify(user);

// writeFile('경로', '내용', '인코딩', '콜백함수')
// file.writeFile("user.json", userJSON, "utf-8", function (error) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("출력 성공");
//   }
// });

// readFile('경로', '인코딩', '콜백함수');
let user;

// file.readFile('user.json', 'utf-8', function(error, content){
//   user = JSON.parse(content);
// });

user = JSON.parse(file.readFileSync('user.json', 'utf-8'))

console.log(user);

