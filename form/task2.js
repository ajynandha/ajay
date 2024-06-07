let name = [
    {
      name: "printing press",
      invented: "johanes",
    },
    {
      name: "light bulb",
      invented: "edison",
    },
    {
      name: "telephone",
      invented: "bell",
    },
    {
      name: "aeroplane",
      invented: "wright",
    },
    {
      name: "computer",
      invented: "charles",
    },
  ];
  
  function person(a) {
    for (let b of name) {
      console.log(b[a]);
    }
  }
  
  person("invented");