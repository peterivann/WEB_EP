

export default function(tm) {
    return ` <style>
  @import url(../../../../../../../dist/app.css)
</style>   <div class="menu">
      <img class="logo_2" src="../../../../../../../dist/images/f94d8650f8fffb1c591ac648dc3e9cdc.png" width="262,5" height="165" alt="">
      <nav class="nav_1">
        <a id="main_1">${tm._bt1}</a>
        <a id="main_2">${tm._bt2}</a>
        <a id="main_3">${tm._bt3}</a>
        <div id="${tm._indicator}"></div>
      </nav>
       <h3>Hello, <span>${localStorage.getItem("login")}</span></h3>
      <a id="exit"><img class="logo_2" src="../../../../../../../dist/images/1e3021361dba0681521e6d43b207b8bf.png" width="25" height="25" style="margin-left: 35px; margin-top: -30px" alt=""></a>
    </div>
`}