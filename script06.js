let years = [1990, 2004, 1945, 1895, 1994];

function printFullAge(years){
  let ages = [];
  let fullAges = [];
  
for( let i = 0; i < years.length; i ++){
  ages[i] = 2016- years[i];
  console.log(ages[i]);
}

for(i = 0; i < ages.length; i++){
  if(ages[i] >= 18){
    console.log('Orang ' + (i+1) + ' umurnya ' + ages[i] + ' tahun, maka umurnya lebih. ');
    fullAges.push(true);
  } else{
        console.log('Orang ' + (i+1) + ' umurnya ' + ages[i] + ' tahun, maka umurnya penuh/kurang. ');
        fullAges.push(false)
  }
}

return fullAges;
}


printFullAge(years);
