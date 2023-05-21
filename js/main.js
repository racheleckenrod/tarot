fetch("https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=10")
  .then(function (response) {
    console.log(response)
    return response.json();
  })
  .then(function (response) {
    console.log(response)
    // handle ten random cards
    console.log(response.cards[0])
    document.querySelector('h1').innerText += "  " + response.cards[0].name
    document.querySelector('h3').innerText += "  " + response.cards[0].desc
    document.querySelector('.upright').innerText += "  " + response.cards[0].meaning_up
    document.querySelector('.reversed').innerText += "   " + response.cards[0].meaning_rev
    document.querySelector('img').src = `img/big/${response.cards[0].name_short}.jpg`
    document.querySelector('.shuffle').innerText = "Welcome, scroll down for your reading."

    console.log(`${response.cards[0].name_short}`)

  })
  .catch(function (error) {
    // handle what went wrong
  });


  function reversedOrNot(){
    let orient = Math.random() * 10
    console.log(orient)
    if(orient < 5){
        document.querySelector('img').classList.toggle('orientation')
    }
}

reversedOrNot() 

document.querySelector("button").addEventListener('click', reload)

function reload(){
  location.reload();
}

// let card = fetch('https://indiealchemy.com/apis/plateautarot/')
// .then(res => res.json())
// .then(data2 =>{
//     console.log(data2)
//     console.log(data2.cards[0].name)
//     document.querySelector('img').src = data2.cards[0].imageURL
//     console.log(card)
//     return data2.cards[0].name
    
    
// })

// console.log(card)
// card.then(card => {

//     fetch('https://rws-cards-api.herokuapp.com/api/v1/cards')
//     .then(res => res.json())
//     .then(data =>{
//     console.log(data)
//     console.log(data.cards[0].name)
//     data.find((item => item.name = card ))
//     let match = item
//     console.log(item)

//     document.querySelector('h1').innerText = data.cards[0].name
//     document.querySelector('h3').innerText = data.cards[0].desc
//     document.querySelector('.upright').innerText += "  " + data.cards[0].meaning_up
//     document.querySelector('.reversed').innerText += "   " + data.cards[0].meaning_rev
// })

// })
// const card2 = fetch("https://indiealchemy.com/apis/plateautarot/")
// public key from The Game Crafter: 658C01B6-E32A-11EC-B001-46E7D356B98B
// private key from the game crafter: Hu5Smr706/fwurSXgzFDLPA1f1FCl50oEFVq

// const cards = fetch("https://tarot-yn.herokuapp.com/cards")


// const card = fetch("https://tarot-yn.herokuapp.com/cards")
//   .then((res) => res.json())
//   .then((data2) => {
//       console.log(data2)
//     document.querySelector("img").src = data2.cartas[0].url;
//     return data2.cards[0].name;
//   });


//   fetch("https://rws-cards-api.herokuapp.com/api/v1/cards")
//     .then((res) => res.json())
//     .then((data)=> {
//       console.log(data)
//     })
// card.then((card) => {
//   fetch("https://rws-cards-api.herokuapp.com/api/v1/cards")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         const matched = data.cards.find((item) => item.name === card);

//         document.querySelector("h1").innerText = matched.name;
//         document.querySelector("h3").innerText = matched.desc;
//         document.querySelector(".upright").innerText += "  " + matched.meaning_up;
//         document.querySelector(".reversed").innerText +=
//             "   " + matched.meaning_rev;
//     });
// });


