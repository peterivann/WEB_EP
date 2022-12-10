export default function() {
    return `<style>
  @import url(css/style.css)
</style>
<div class="main_2">
    <div>        
        <div class="apli">
            <h1><span>Creating</span> an application</h1>
            <div class="menu">
                <div>
                    <h2 class="h2_"><span>Choose</span> a topic</h2>
                    <div class="select" tabindex="1">
                        <input class="selectopt" name="test" type="radio" id="opt1" value='Computer Maintenance' checked>
                        <label for="opt1" class="option">Computer Maintenance</label>
                        <input class="selectopt" name="test" type="radio" id="opt2" value='Network Engineering'>
                        <label for="opt2" class="option">Network Engineering</label>
                        <input class="selectopt" name="test" type="radio" id="opt3" value='Network security and data security'>
                        <label for="opt3" class="option">Network security and data security</label>
                        <input class="selectopt" name="test" type="radio" id="opt4" value='Setup server deployment and management'>
                        <label for="opt4" class="option">Setup server deployment and management</label>
                    </div>
                </div>
                <div class="input_contact">
                    <h2 class="h2_"><span>Specify</span> contacts</h2>
                    <div class="input-container number">
                        <input id= "contact_in" type="text" required=""/>
                        <label>Contact</label>
                    </div>
                </div>
            </div>
            <h2 class="h2_"><span>Describe</span> the problem</h2>
            <textarea id= "comment_in" class="textarea" placeholder="Enter a message..."></textarea>
        </div>
        <button id= "okey" class="bt3 ok">ok</button>
    </div>
</div>
`}