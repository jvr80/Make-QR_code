let form = document.querySelector("form");
let input = document.querySelector("input");
let image = document.querySelector("img");

form.addEventListener("submit", getQR);

async function getQR(e) {
  e.preventDefault();
  let inputValue = input.value;

  let res = await fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${inputValue}`
  );
  let qrImage = res.url;

  image.setAttribute("src", qrImage);

  form.reset();
}