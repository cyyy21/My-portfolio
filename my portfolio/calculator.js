const resultbtn = document.getElementById("text");
//do your onclick function
//on your html numberbtn () is our onlick function
const numberbtn = (number) => {
  resultbtn.value += number;
};
//do your result onclick function

const result = () => {
  try {
    resultbtn.value = eval(resultbtn.value);
  } catch (err) {
    alert("Syntax Error");
  }
};
//clear
function clr() {
  resultbtn.value = "";
}
//del
function del() {
  resultbtn.value = resultbtn.value.slice(0, -1);
}
