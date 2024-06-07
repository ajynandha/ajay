let myarray = [
    { name: "Chevrolet", country: "America" },
    { name: "Maruti Suzuki", country: "India" },
    { name: "Audi", country: "Germany" },
    { name: "Tata", country: "India" },
  ];
  for(a of myarray){
    if(a.country == 'India')
    console.log(a.name);
}
  