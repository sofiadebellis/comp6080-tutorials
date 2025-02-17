const counter = document.getElementById("counter");

counter.innerText = "0";

const increment = document.getElementById("increment");
increment.addEventListener("click", () => {
    const curCounter = parseInt(counter.innerText);
    if (curCounter >= 10) {
        alert("Counter cannot exceed 10!");
    } else {
        counter.innerText = curCounter + 1;
    }
})

const decrement = document.getElementById("decrement");
decrement.addEventListener("click", () => {
    const curCounter = parseInt(counter.innerText);
    if (curCounter <= 0) {
        alert("Counter cannot be below 0!");
    } else {
        counter.innerText = curCounter - 1;
    }
})
