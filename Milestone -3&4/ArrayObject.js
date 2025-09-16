const student = [
    {name: 'Alice', Id: 467, University: 'Daffodil', Phone: '0177-3562177'},
    {name: 'Bob', Id: 127, University: 'Daffodil', Phone: '0174-7354297'},
    {name: 'Jhon', Id: 122, University: 'Daffodil', Phone: '0177-7342096'},
    {name: 'Doe', Id: 454, University: 'Daffodil', Phone: '0179-6343232'},
    {name: 'Berlin', Id: 190, University: 'Daffodil', Phone: '0187-3032227'}
]
// console.log(student); //show all value contain this array
// console.log(student[1]); //show all value contain this array index is 1
// console.log(student[1].name, student[1].Phone); //show name and phone for index 1 
// console.log(student[0].name,student[1].name,student[2].name,student[3].name,student[4].name); //print all name


// Value Change
student[0].name = 'shehab';

// Access using for-of loop
for(let i of student){
    // console.log(i);
    console.log(i.University,i.name,i.Id);
}

