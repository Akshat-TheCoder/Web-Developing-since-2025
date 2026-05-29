let input = document.querySelector("#hapinp");
let postbtn = document.querySelector("#postbtn");
let postdiv = document.querySelector("#postdiv");

function postFn(e) {
  if (e) {
    let div = document.createElement("div");
    let currdate = new Date();
    let day = currdate.getDate();
    let mon = currdate.getMonth();
    let Hrs = currdate.getHours();
    let min = currdate.getMinutes();
    let time = `${Hrs}:${min}`;

    div.classList = "mt-4";
    div.innerHTML = `
        <h3>Trending in India</h3>
                <div class="font-bold text-xl">#${e}</div>
                <div>${time} ${day}/${mon}</div>`;
    postdiv.append(div);
  }
}

postbtn.addEventListener("click", () => {
  const inp = input.value;
  let promise = new Promise((resolve) => {
    postFn(inp);
  });
  promise.then((input.value = ""));
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    postbtn.click();
  }
});

