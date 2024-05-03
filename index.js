function checkClick(){
    firstTeamname.textContent = firstTeam.value;
    //firstTeamname.innerText = firstTeam.value;
    secondTeamname.textContent = secondTeam.value;
    thirdTeamname.textContent = thirdTeam.value;
    forthTeamname.textContent = forthTeam.value;
    fifthTeamname.textContent = fifthTeam.value;
    sixthTeamname.textContent = sixthTeam.value;
}

function downloadClick(){
    html2canvas(document.querySelector("#target")).then(canvas => {
        document.body.appendChild(canvas)
    });

    // const el = document.querySelector("#target");
    // if (!el) {
    //   console.error("要素が見つかりませんでした。");
    //   return;
    // }
  
    // html2canvas(el).then((canvasEl) => {
    //   const aEl = document.createElement("a");
    //   aEl.href = canvasEl.toDataURL("image/jpg");
    //   aEl.download = "result.jpg";
    //   aEl.click();
    // });
}
  
  let firstTeam = document.getElementById('firstTeam');
  let firstTeamname = document.getElementById('firstTeamname');
  let secondTeam = document.getElementById('secondTeam');
  let secondTeamname = document.getElementById('secondTeamname');
  let thirdTeam = document.getElementById('thirdTeam');
  let thirdTeamname = document.getElementById('thirdTeamname');
  let forthTeam = document.getElementById('forthTeam');
  let forthTeamname = document.getElementById('forthTeamname');
  let fifthTeam = document.getElementById('fifthTeam');
  let fifthTeamname = document.getElementById('fifthTeamname');
  let sixthTeam = document.getElementById('sixthTeam');
  let sixthTeamname = document.getElementById('sixthTeamname');
  
  let checkButton = document.getElementById('checkButton');
  checkButton.addEventListener('click', checkClick);
  let downloadButton = document.getElementById('downloadButton');
  downloadButton.addEventListener('click', downloadClick);