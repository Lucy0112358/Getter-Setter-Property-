// The input is object, which `keys` are student's names and `values` are `array` of their scores. Find the student with the best average score.
let students = {
    John: [100, 90, 80],
    Bob: [100, 70, 80],
    Jon: [200, 150],
  };
  function getBestStudent(obj) {
    let arr = Object.values(obj);
    let result = [];
    let maximum = 0;
    for (let i = 0; i < arr.length; i++) {
      let av = arr[i].reduce((a, b) => a + b) / arr[i].length;
      result.push(av);
    }
    for (let i = 0; i < result.length; i++) {
      if (result[i] > maximum) {
        maximum = result[i];
      }
    }
    return result.indexOf(maximum);
  }
  console.log(getBestStudent(students));
  