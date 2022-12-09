let users = [
  {
    name: "Alex",
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 45,
    isLoggedIn: false,
    points: 30,
  },
  {
    name: "Job",
    email: "job@job.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  {
    name: "Brook",
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 39,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Daniel",
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "John",
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Thomas",
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 18,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "Paul",
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
];

getall(users);

function user(list) {
  let userList = "";
  for (i = 0; i < list[i].skills.length; i++) {
    if (userList.length < list[i].skills.length) {
      userList = list[i].skills; //name
    }
  }
  return "User with many skills : " + userList;
}

function score(list) {
  let userListPoint = "";
  for (i = 0; i < list[i].name.length; i++) {
    if (list[i].points >= 50) {
      userListPoint = list[i].name;
    }
  }
  return "User point 50+" + userListPoint;
}

function mern(list) {
  let userList = "";
  for (i = 0; i < list[i].skills.length; i++) {
    if (list[i].skills.includes("MongoDB", "Express", "React", "Node"))
      userList = list[i].name;
  }
  return userList;
}

function age(list) {
  let userList = "";
  for (i = 0; i < list[i].age.length; i++) {
    if (userList < list[i].age) userList = list[i].age;
  }
  return userList;
}

function getall(list) {
  let lots = user(list);
  let point = score(list);
  let mernlist = mern(list);
  let ageList = age(list);
  console.log(lots);
  console.log(point);
  console.log(mernlist);
  console.log(ageList);
}

//1: Print name
//2: Mern => second name?
