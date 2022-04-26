function showSalary(users, age) {
  let newUsers = users.filter(item => item.age <= age);
  let names = newUsers.map(item => item.name);
  let balances = newUsers.map(item => item.balance);
  let result = [];

  for (let i = 0; i < Math.max(balances.length, names.length); i++){
   result = result.concat(names[i]).concat(balances[i]);
  }
  let newResult = [];
for(i=0;i<result.length;i=i+2)
{
  newResult.push(`${result[i]}, ${result[i+1]}`);
}
  newResult = newResult.join('\n');

  return newResult;
}
