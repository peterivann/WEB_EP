import mas from './pages_admin/p_main_2_admin.js';

export default function select(){
    let tds = document.querySelectorAll('.applicat');
    let arr_ = [];
    tds.forEach(function (item){
        item.addEventListener("click", function (){
            let tdp = this.querySelectorAll('th');
            let a = tdp.item(0).textContent;
            this.classList.toggle('back');
            let n = 0;
            for (let i = 0; i < arr_.length; i++) {
                if (a === arr_[i]) {
                    arr_.splice(i, 1);
                    n = 1;
                    break;
                }
            }
            if (n === 0) {
                arr_.push(a);
            }
            let b = "";
            for (let i = 0; i < arr_.length; i++) {
                b = b + arr_[i] + " ";
            }
            document.querySelector('.span1').value = b;
            console.log(document.querySelector('.span1').value);
            mas(b);
        });
    });
}