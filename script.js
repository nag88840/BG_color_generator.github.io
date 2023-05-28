/* Function to generate a random color in hexadecimal format
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
     for (var i = 0; i <6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Function to change the background color of the body
  function changeColors() {
    var body = document.querySelector('body');
    body.style.backgroundColor = getRandomColor();
  }
  */
 
function getRandomColor(){
  var letters='0123456789ABCDEF';
  var color='#';

  for(let i=0;i<6;i++)
  {
    color +=letters[Math.floor(Math.random()*16)]
  }
  return color;
}

function changeColors(){
  
  var body =document.getElementsByTagName('body')[0];
  body.style.backgroundColor = getRandomColor();
}

