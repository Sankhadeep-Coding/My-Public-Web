// Variable to store food count
let food = 0;

// Function for Love Button
function ShowLove() {
    document.getElementById("message").innerHTML =
        "My pet is the Best!";
}
// Function for Feed Button
function FeedPet() {
    food = food + 1;
    document.getElementById("foodCount").innerHTML =
        "Food Given; " + food;
    if (food<=5)
    {
    document.getElementById("message").innerHTML =
        "Yummy Bruno is happy!";
}
else
{
    document.getElementById("message").innerHTML =
    "Please Stop. Bruno is no more hungry!";
}}
