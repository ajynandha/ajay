let dict = {
    name: "puppy",
    age: 18,
    "fur color": "grey",
    likes: ["catnip", "milk"],
    birthday: { month: 7, day: 17, year: 1994 },
  };
  
  console.log(dict);
  
  let key = "name";
  let val = "sassy";
  dict[key] = val;
  console.log(dict);