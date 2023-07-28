/*
            <div class="card">
                <div class="top">
                    <div class="left">
                        <p class="status Approved">Approved</p>
                        <p class="number">0291029</p>
                    </div>
                    <div class="right">
                        <div class="date">March 23, 2023, 9:45:10 AM</div>
                    </div>
                </div>
                <div class="bottom">
                    <h4 class="title">Bangalure spake late</h4>
                    <p class="address">Bangalure spake late, karnataka India</p>
                    <h5 class="price">222</h5>
                </div>
            </div>
*/


 async function fetchData () {
    let url = "https://gauravgitacc.github.io/postAppData/auctionData.json";
    let response = await fetch(url);
    let data = await response.json();
    createCards(data);
    console.log(data);
}

fetchData ();

let container =  document.querySelector(".container");

function createCards(data) {
    data.forEach((singleCard) => {
        let card = document.createElement("div");
    card.classList.add("card");
    let innerCard = `<div class="top">
                        <div class="left">
                            <p class="status ${singleCard.status}">${singleCard.status}</p>
                            <p class="number">${singleCard.caseNumber}</p>
                        </div>
                        <div class="right">
                            <div class="date">${singleCard.date}</div>
                        </div>
                    </div>
                    <div class="bottom">
                        <h4 class="title">${singleCard.fromLocation}</h4>
                        <p class="address">${singleCard.toLocation}</p>
                        <h5 class="price">${singleCard.fare}</h5>
                    </div>`
    card.innerHTML =  innerCard;
    container.appendChild(card);
    })
}