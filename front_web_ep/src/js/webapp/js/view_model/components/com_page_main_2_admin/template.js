export default function() {
    return `<style>
  @import url(../../../../../../../dist/app.css)
</style>
<div class="main_2">
    <div>
                        <h1><span>All</span> users</h1>
                        <table id= "table_app" class="table_dark" align="center">
                                <tr>
                                        <th class="aaa"></th>
                                        <th>№</th>
                                        <th>ID</th>
                                        <th>Login</th>
                                        <th>Role</th>
                                    </tr>
                            </table>
                <br>
                <h5 id="massage" style="color: #ea4c88"></h5>
                <div class="container-buttons">
                    <button id="delete_" class=" delete">Delete</button>
                <button id="updat_" class=" delete">Сhange role</button>
                </div>
                </div>
        </div>
    <input type="text" class="span1" name="pozs" required>`}