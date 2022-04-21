window.onload = () => {
    let button = document.querySelector("#btn");
    let reset = document.querySelector("#reset");
    button.addEventListener("click", callulatefinance);
    reset.addEventListener("click", clear);

}
function callulatefinance(){
    let carprice = document.querySelector("#carprice").value;
    let downpayment = document.querySelector("#downpayment").value;
    let mouths = document.querySelector("#mouths").value;
    let interest = document.querySelector("#interest").value;
    let downtotal = carprice * (downpayment / 100);
    let pricetotal = carprice-downtotal;
    let rate = interest/12;
    let total = pricetotal * (rate/100) * mouths;
    let monthly = pricetotal + total;
    let pay = (monthly/mouths).toFixed(2);
    let result = document.querySelector("#result");
    if(downpayment > 15) {
        alert('ค่าดาวน์เกินกว่า 15% กรุณากรอกข้อมูลใหม่');
        clear()
    }else if(mouths < 12){
        alert('จำนวนเดือนต้องมากกว่า 12 เดือน');
        clear()
    }else result.innerHTML = `<p>เงินที่ต้องจ่ายต่อเดือน : ${pay} บาท</p>`;

}
function clear(){
    document.querySelector("#carprice").value = "";
    document.querySelector("#downpayment").value = "";
    document.querySelector("#mouths").value = "";
    document.querySelector("#interest").value = "";
}
