const btn = document.querySelector(".btn");

btn.onclick = function (e) {
  const span = document.createElement("span");

  btn.append(span);

  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;

  span.style.left = x + "px";
  span.style.top = y + "px";
  setTimeout(() => {
    span.remove();
  }, 300);
};
