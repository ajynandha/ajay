let profileDetails = {
    name: "RAHUL ATTULURI",
    age: 25,
    image:
      "https://news-cdn.softpedia.com/images/news2/microsoft-founder-bill-gates-again-the-richest-man-in-the-world-514123-2.jpg",
  };
  
  document.getElementById("photo").src = profileDetails.image;
  document.getElementById("name").textContent = profileDetails.name;
  document.getElementById("age").textContent = profileDetails.age;