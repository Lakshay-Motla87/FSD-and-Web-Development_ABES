const quotes = [
    "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    "Excellence is a continuous process, not an accident.",
    "You have to dream before your dreams can come true.",
    "If you want to shine like a sun, first burn like a sun."
];

let index = 0;

function changeQuote() {
    index = (index + 1) % quotes.length;
    document.getElementById("quote").innerText = quotes[index];
}
