const submitBtn = document.querySelector(".card__btn");
submitBtn.addEventListener("click", submit);

function checkRates() {
  const rateSelectors = document.querySelectorAll(".card__rate input");
  let selectedRate = 0;

  rateSelectors.forEach((selector) => {
    if(selector.checked){
      selectedRate = selector.id;
    }
  })

  return selectedRate
}
function submit() {
  const selectedRate = checkRates();
  if(selectedRate !== 0){
    document.getElementsByClassName("card thank-you")[0].style.display = "block";
    document.getElementsByClassName("card")[0].style.display = "none";
    document.getElementById("selected-rate").innerText = selectedRate
  } 
}