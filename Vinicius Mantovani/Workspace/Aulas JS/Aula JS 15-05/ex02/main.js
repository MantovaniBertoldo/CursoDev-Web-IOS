let array2 = [["HTML", 1993, "CSS", 1996], ["Bootstrap", 2011, "JS", 1995], ["React", 2013, "Java", 1995]];

console.log(array2);

console.log(array2.length);

console.log(array2[1][2]);

array2[1][2] = "JavaScript";
console.log(array2);

array2[2].pop();
console.log(array2);

array2.push(["pipoca"]);
console.log(array2);