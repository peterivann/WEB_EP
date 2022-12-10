export default function() {
    return `   <style>
  @import url(css/style.css)
</style>   
<div class="main_2">
    <div>  
        <h1><span>All</span> applications</h1>
        <table id= "table_app" class="table_dark table_admin" align="center">
            <tr>
                <th class="aaa"></th>
                <th>№</th>
                <th>User id</th>
                <th>Topic</th>
                <th>Contact</th>
                <th>Comment</th>
                <th>Status</th>
            </tr>
        </table>
                <br>
                <h5 id="massage" style="color: #ea4c88"></h5>
        <div class="container-buttons">
            <button id="delete_" class=" delete">Delete</button>
            <button id="answer_" class=" delete">Answer</button>
        </div>
    </div>
</div>
<input type="text" class="span1" name="pozs" required>`}