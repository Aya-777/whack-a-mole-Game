
document.querySelector(`.start-button`).addEventListener('click',()=>{
  const name = document.querySelector(`.input-name`).value;
  console.log(name);

  if(name===undefined){
    alert('Please enter ur name');
  }else{
    window.location.href = `playGame.html?name=${name}`;
  }

});