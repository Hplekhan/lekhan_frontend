// const button = document.querySelector('.btn-1');
// const table = document.querySelector('.tab');

// button.addEventListener("click", showData);

// function showData() {
//     fetch(`https://p-9x7e.onrender.com/products/products`)
//         .then(res => res.json())
//         .then(response => {
//             console.log(response.data);

//             for (let i = 0; i < response.data.length; i++) {
//                 const tr = document.createElement('tr');

              
//                 const td1 = document.createElement('td');
//                 const td2 = document.createElement('td');
//                 const td3 = document.createElement('td');
//                 const td4 = document.createElement('td');

//                 td1.innerText = response.data[i].PName; 
//                 td2.innerText = response.data[i].Pdesc; 
//                 td3.innerText = response.data[i].Pprice; 
//                 td4.appendChild(img);
                
//                 const img = document.createElement('img');
//                 img.src = response.data[i].Pimg;
                

                
//                 tr.appendChild(td1);
//                 tr.appendChild(td2);
//                 tr.appendChild(td3);
//                 tr.appendChild(td4);

            
//                 table.appendChild(tr);
//             }
//         });
// }


const button = document.querySelector("#button-search-data");
const table = document.querySelector('#tab')

button.addEventListener("click",handleClick)

function handleClick(event){
    event.preventDefault();
    
    fetch('https://p-9x7e.onrender.com/products/products')
    .then(response => response.json())     
    .then(res => {
        console.log(res.data);
        for(let i=0;i<res.data.length;i++){
            const tr = document.createElement("tr")
            const td1 = document.createElement("td")
            const td2 = document.createElement("td")
            const td3 = document.createElement("td")
            const td4 = document.createElement("td")
            const td5 = document.createElement("td")
            td1.innerText = res.data[i]._id
            td2.innerText = res.data[i].pName
            td3.innerText = res.data[i].pDesc
            td4.innerText = res.data[i].pPrice
            td5.innerText = res.data[i].pImg

            tr.append(td1, td2, td3, td4, td5)

            table.append(tr)
        }
    })
}