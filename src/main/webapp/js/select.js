function select(){
    var tds = document.querySelectorAll('.applicat');
    var arr_ = [];
    console.log(tds);
    tds.forEach(function (item) {
        item.addEventListener("click", function () {
            console.log(1);
            var tdp = this.querySelectorAll('th');
            var a = tdp.item(0).textContent;
            this.classList.toggle('back');
            var n = 0;
            for (i = 0; i < arr_.length; i++) {
                if (a == arr_[i]) {
                    arr_.splice(i, 1);
                    n = 1;
                    break;
                }
            }
            if (n == 0) {
                arr_.push(a);
            }
            var b = "";
            for (i = 0; i < arr_.length; i++) {
                b = b + arr_[i] + " ";
            }
            document.querySelector('.span1').value = b;
            console.log(document.querySelector('.span1').value);
            arrr = arr_
        });
    });
}