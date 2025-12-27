const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let allPrices = document.querySelectorAll(".price");
	let tbody = document.querySelector("tbody");
        let tr = document.createElement("tr");
        let td = document.createElement("td");

        let sum =0;

        allPrices.forEach((element)=>{
            sum+= +element.innerText;
        })

        td.innerText= `Sum: ${sum}`;

        td.colSpan = 2;
        tr.append(td);
        tbody.append(tr);

};

getSumBtn.addEventListener("click", getSum);

