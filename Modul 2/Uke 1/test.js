var app = document.getElementById('app');
show();

const mainpageHeader =
    `   <div class="grid-container">
                <div class="grid-item grid-item-1">
        
                    <div class="headerdiv1">Du er logget inn som 'CSSKANDØ'</div>
                    <img class="logo" src="vgo_logo.jpg" alt="VGO-stasjonen" onclick="retur()" >
                    <div class="headerdiv2">
                
                    <button class="info" onclick="omOssMainPage()">Om oss</button>
                    <button class="tests" onclick="testMainPage()">test deg selv</button>
                    <button class="profile" onclick="profileMainPage()">profil</button>
                    <button class="chat" onclick="chatMainPage()">chat</button>
                </div>
        </div> `;

let mainpageContent = 
    
        `<div class="grid-item grid-item-2">infobox/feed, her kan det    legges til artikler eller annet nyttig</div>
         <div id="scoreboard" class="grid-item grid-item-3">Scoreboard
             </div>
         <div id="planbox" class="grid-item grid-item-4">ukentlig plan
         </div>`;

function show() {

    app.innerHTML = mainpageHeader + mainpageContent;

}