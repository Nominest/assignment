let alphabet = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "Ф",
  "Х",
  "У",
  "Ц",
];

function isCorrectReg(register) {
  if (
    alphabet.includes(register[0]) &&
    alphabet.includes(register[1]) &&
    register.length === 10 &&
    Number.isInteger(Number(register.slice(2, 10)))
  ) {
    return "Register number is True";
  } else {
    return "Register number is False";
  }
}
console.log(isCorrectReg("АФ98010231"));

//Gender
function getGender(register) {
  if (
    alphabet.includes(register[0]) &&
    alphabet.includes(register[1]) &&
    Number.isInteger(Number(register.slice(2, 10))) &&
    register.length === 10 &&
    register[8] % 2 == 0
  ) {
    return "Gender : Female";
  } else if (
    alphabet.includes(register[0]) &&
    alphabet.includes(register[1]) &&
    Number.isInteger(Number(register.slice(2, 10))) &&
    register.length === 10 &&
    register[8] % 2 !== 0
  ) {
    return "Gender : Male";
  } else {
    return "False Register";
  }
}
console.log(getGender("АА98010241"));

//Get birthday
function getBirthday(register) {
  if (
    (alphabet.includes(register[0]) &&
      alphabet.includes(register[1]) &&
      Number.isInteger(Number(register.slice(2, 10))) &&
      register[4] == 2) ||
    register[4] == 3
  ) {
    return (
      "Birthday is : " +
      (register[2] +
        register[3] +
        register[4] -
        2 +
        register[5] +
        register[6] +
        register[7])
    );
  } else if (
    alphabet.includes(register[0]) &&
    alphabet.includes(register[1]) &&
    Number.isInteger(Number(register.slice(2, 10)))
  ) {
    return "Birthday is: " + register.slice(2, 8);
  } else {
    return "False Register";
  }
}
console.log(getBirthday("АА98012241"));

//Region
const region  = ["А" = "Arkhangai", 'Б' = 'Bayankhongor'];
function getBirthdayRegion(register) {
  if (
    alphabet.includes(register[0]) &&
    alphabet.includes(register[1]) &&
    Number.isInteger(Number(register.slice(2, 10))) &&
    register.length === 10
  )
    if (register[0] == "А") {
      return "Birth region is : Arkhangai";
    } else if (register[0] == "Б") {
      return "Birth region is : Bayan - Ulgii";
    } else if (register[0] == "В") {
      return "Birth region is : Bayankhongor";
    } else if (register[0] == "Г") {
      return "Birth region is : Gobi-Altai";
    } else {
      return "Birth region is False";
    }
  else {
    return "Birth region is False";
  }
}
console.log(getBirthdayRegion("АА98012241"));
// all info
function getRegisterInfo(register) {
  if (
    alphabet.includes(register[0]) &&
    alphabet.includes(register[1]) &&
    Number.isInteger(Number(register.slice(2, 10))) &&
    register.length === 10
  ) {
    if (register[8] % 2 == 0 && register[0] == "А") {
      return (
        "Gender : Female" +
        "\n" +
        "Birthday is: " +
        register.slice(2, 8) +
        "\n" +
        "Birth region is : Arkhangai"
      );
    } else {
      return "Gender : Male" + "\n" + "Birthday is: " + register.slice(2, 8);
    }
  }
}
console.log(getRegisterInfo("АА98012271"));
