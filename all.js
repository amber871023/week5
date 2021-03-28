let data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  }
];

const ticketCardList = document.querySelector("#ticketCardList");
//LV3
//新增ticket
const name = document.querySelector("#ticketName");
const imgUrl = document.querySelector("#ticketImgUrl");
const area = document.querySelector("#ticketRegion");
const price = document.querySelector("#ticketPrice");
const group = document.querySelector("#ticketNum");
const rate = document.querySelector("#ticketRate");
const description = document.querySelector("#ticketDescription");
const addBtn = document.querySelector("#addTicketBtn");
const form = document.querySelector(".addTicketForm");
// 地區搜尋
const regionFilter = document.querySelector(".regionFilter");
const filterResult = document.querySelector("#filterResult");
// 查無關鍵字
const cantFindArea = document.querySelector(".cantFind-area")


function init(){
let str = "";
data.forEach(function(item){
  str+= `
  <li class="col-4 ticketCard px-0 mb-10 mr-11">
  <div class="ticketImg">
    <a href="#">
      <img src=${item.imgUrl}" alt="${item.name}">
    </a>
    <div class="ticketRegion bg-secondary text-white">${item.area}</div>
    <div class="ticketRank bg-primary text-white">${item.rate}</div>
  </div>
  <div class="ticketContent d-flex flex-column justify-content-between bg-white p-11">
    <h3 class="ticketName text-primary font-weight-bold mb-11 pb-1">
    <a href="#">${item.name}</a>
    </a>
  </h3>
  <p class="ticketDescription text-dark ">${item.description}</p>
  
  <div class="ticketInfo d-flex align-items-end  justify-content-between text-primary font-weight-bold">
    <div class="ticketNum">
      <p><span class="material-icons">
        error
        </span>
        剩下最後
      <span>${item.group}</span>
    組</p>
    </div>
    <p class="ticketPrice">
      TWD$ <span>${item.price}</span>
    </p>
  </div>
</div>
</li>
`
});
ticketCardList.innerHTML = str;
}

init();

//新增套票+防呆
addBtn.addEventListener('click',function(e){
  e.preventDefault(); 
  if(form.ticketName.value == "" || form.ticketImgUrl.value == "" || form.ticketRegion.value == ""||form.ticketPrice.value == "" || form.ticketNum.value == "" || form.ticketRate.value == ""){
    alert("請填寫完整資料");
  }else if( form.ticketPrice.value < 1){
    alert("請填寫正確套票金額");
    return;
  }else if(form.ticketNum.value < 1){
    alert("請填寫正確套票組數");
  }else if(form.ticketRate.value < 1  || form.ticketRate.value > 10){
    alert("請填寫星級 1~10 星");
    
  }else if(form.ticketDescription.value.length > 100){
    alert("套票描述不得超過100字");
  } else {
    data.push({
      id: Date.now(),
      name: name.value,
      imgUrl: imgUrl.value,
      area: area.value,
      price: Number(price.value),
      group: Number(group.value),
      rate: Number(rate.value),
      description: description.value
  });
    alert("新增成功");
  };
  init();
  form.reset();
})

//資料新增不全

//搜尋資料
regionFilter.addEventListener("change", function (e) {
  let count = 0;
  let str = "";
  data.forEach(function (item, index) {
    let content = `<li class="col-4 ticketCard px-0 mb-10 mr-11">
    <div class="ticketImg">
      <a href="#">
        <img src=${item.imgUrl}" alt="${item.name}">
      </a>
      <div class="ticketRegion bg-secondary text-white">${item.area}</div>
      <div class="ticketRank bg-primary text-white">${item.rate}</div>
    </div>
    <div class="ticketContent d-flex flex-column justify-content-between bg-white p-11">
      <h3 class="ticketName text-primary font-weight-bold mb-11 pb-1">
      <a href="#">${item.name}</a>
      </a>
    </h3>
    <p class="ticketDescription text-dark ">${item.description}</p>
    
    <div class="ticketInfo d-flex align-items-end  justify-content-between text-primary font-weight-bold">
      <div class="ticketNum">
        <p><span class="material-icons">
          error
          </span>
          剩下最後
        <span>${item.group}</span>
      組</p>
      </div>
      <p class="ticketPrice">
        TWD$ <span>${item.price}</span>
      </p>
    </div>
  </div>
  </li>
  `;
    if (regionFilter.value == ""){
      count ++;
      str += content;
    } else if (regionFilter.value == item.area) {
      count ++;
      str += content;
    }
  })
  if(count === 0){
    cantFindArea.classList.add('d-block');
    cantFindArea.classList.remove('d-none');
  }else{
    cantFindArea.classList.add('d-none');
    cantFindArea.classList.remove('d-block');
  }
  ticketCardList.innerHTML = str;
  filterResult.textContent = `本次搜尋共 ${count} 筆資料`;
})
console.log(data);