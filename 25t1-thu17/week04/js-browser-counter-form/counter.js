const counter = document.getElementById("counter");

counter.innerText = "0";

const increment = document.getElementById("increment");
increment.addEventListener("click", () => {
    const currentCount = parseInt(counter.innerText);
    if (currentCount >= 10) {
        alert("Counter cannot exceed 10!");
    } else {
        counter.innerText = currentCount + 1;
    }

});

const decrement = document.getElementById("decrement");
decrement.addEventListener("click", () => {
    const currentCount = parseInt(counter.innerText);
    if (currentCount <= 0) {
        alert("Counter cannot go below 0!");
    } else {
        counter.innerText = currentCount - 1;
    }
});