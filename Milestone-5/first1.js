// All li
// const liCollection = document.getElementsByTagName("li");
// console.log(liCollection);
// for (const i of liCollection) {
//   console.log(i.innerText);
// }

// hll h1
// const allHeading = document.getElementsByTagName('h1');
// for (const i of allHeading) {
//   console.log(i.innerText);
// }

// all paragraph
// const allParagraph = document.getElementsByTagName('p');
// for (const i of allParagraph) {
//   console.log(i.innerText);
// }

//getElementByID
// const foodSection = document.getElementById('food-title');
// console.log(foodSection.innerText);
// console.log(foodSection.innerText = 'Food Makes Me Happy');
// foodSection.style.backgroundColor = 'yellow';
// foodSection.style.borderRadius = '20px';
// foodSection.style.padding = '30px';
// foodSection.style.margin = '20px';
// foodSection.style.textAlign = 'center';
// foodSection.style.color = 'black';



// getElementByID
// const bideshiKhabar = document.getElementById('bideshi-vegitable');
// console.log(bideshiKhabar.innerText);
// console.log(bideshiKhabar.innerText = 'Bideshi Khabar valona');

// change li
// const bandElement = document.getElementById('dal');
// console.log(bandElement.innerText);
// console.log(bandElement.innerText = 'Bono Bamboo Band');

// getELementsByClassName
// const forienFood = document.getElementsByClassName('forigen');
// console.log(forienFood);
// for (const i of forienFood) {
//     console.log(i.innerText);
//  }

// getELementsByClassName
// const desiKhabar = document.getElementsByClassName('deshi-vegitable');
// console.log(desiKhabar);
// for (const i of desiKhabar) {
//     console.log(i.innerText);
//  }


// QuerySelectorAll
// const querySelect = document.querySelectorAll(".food .forigen");
// console.log(querySelect);


// QuerySelectorAll
// const idThekeClassSpanSob = document.querySelectorAll(".khabar p span");
// console.log(idThekeClassSpanSob);
// for (const i of idThekeClassSpanSob) {
//     console.log(i.innerText);
//  }



// QuerySelector  =>Álways first element ta dibe sob dibe na
// const selectOne = document.querySelector('.khabar p span');
// console.log(selectOne.innerText);


// style all section ei ta akta way js er vitore kora
// const sections = document.querySelectorAll('section')
// for (const i of sections) {
//     console.log(i);
//     i.style.backgroundColor = 'lightgreen'
//     i.style.padding = '10px'
//     i.style.margin = '5px'
//     i.style.border = '2px solid black'
//  }

 // style all section ei ta arakta way css file er vitore kora jeta ekhane add korbo
// const sections = document.querySelectorAll('section')
// for (const i of sections) {
//    i.classList.add('section-card')
//  }

 

//  js diye html code likhbo 

// 1. age create tar por set text
// const newChild = document.createElement('li');
// newChild.innerText = "New Born Child Player";
// // 2. find parent where you add it 
// const playerList = document.getElementById('player-list');
// // 3. append child to the parent
// playerList.appendChild(newChild);




// Easier to create HTML
// const mainContainer = document.getElementById('main-container');
// // 
// const bookSection = document.createElement('section')
// bookSection.innerHTML = `
// <h1>The Books i want to read</h1>

// <ul>
//   <li> Physics </li>
//   <li> Chemistry </li>
// </ul>
// `

// mainContainer.appendChild(bookSection);