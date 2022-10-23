let protein_goal = 0;
let cal_goal = 0;
let sugar_goal = 0;
let smoothie_choice;

const smoothies = [
    {
        "name": "Strawberry Banana Blast",
        "cals": 250,
        "protein": 11,
        "sugar": 5
    },
    {
        "name": "Choco-Nut Machine",
        "cals": 420,
        "protein": 16,
        "sugar": 12
    },
    {
        "name": "Tropical C-Monster",
        "cals": 350,
        "protein": 10,
        "sugar": 3
    },
    {
        "name": "Lean-and-Green",
        "cals": 100,
        "protein": 13,
        "sugar": 3
    },
    {
        "name": "Aloha Acai",
        "cals": 300,
        "protein": 10,
        "sugar": 3
    },
    {
        "name": "Goin' Bananas",
        "cals": 200,
        "protein": 20,
        "sugar": 3
    },
]

function hideshow_lose() {
    const box = document.getElementById('lose_weight');
    box.style.display = 'block';
    document.getElementById("goal_buttons").style.display = "none";
    document.getElementById("select_goal").style.display = "none";
    document.getElementById("goal_line").style.display = "none";
    document.getElementById("nutrient_buttons").style.display = "block";
    document.getElementById("select_nutrient").style.display = "block";
}

function hideshow_gain() {
    const box = document.getElementById('gain_weight');
    box.style.display = 'block';
    document.getElementById("goal_buttons").style.display = "none";
    document.getElementById("select_goal").style.display = "none";
    document.getElementById("goal_line").style.display = "none";
    document.getElementById("nutrient_buttons").style.display = "block";
    document.getElementById("select_nutrient").style.display = "block";
}

function hideshow_same() {
    const box = document.getElementById('same_weight');
    box.style.display = 'block';
    document.getElementById("goal_buttons").style.display = "none";
    document.getElementById("select_goal").style.display = "none";
    document.getElementById("goal_line").style.display = "none";
    document.getElementById("nutrient_buttons").style.display = "block";
    document.getElementById("select_nutrient").style.display = "block";
}

function getProtein() {
    protein_goal = document.getElementById("num_protein").value;
}

function getSmoothieProtein() {
    smoothie_choice = document.getElementById("smoothies").value;
}

function getNumSmoothiesProtein() {
    let chosen = smoothies.find(chosen => chosen.name === smoothie_choice);
    let num_smoothies = protein_goal/chosen.protein;
    document.getElementById("chosen_display_protein").innerHTML = "Number of " + smoothie_choice+  " Smoothies needed to satisfy your goal: <br/>";
    document.getElementById("chosen_display_protein_num").innerHTML = Math.ceil(num_smoothies);
}

function hideshow_smoothies() {
    const box = document.getElementById('smoothie_select');
    box.style.display = 'block';


}

function hideshow_numSmoothies() {
    const box = document.getElementById('num_smoothies_protein');
    box.style.display = 'block';
}

function hideshow_cal_intake() {
    const box = document.getElementById('cal_intake');
    box.style.display = 'block';
    document.getElementById("nutrient_buttons").style.display = "none";
    document.getElementById("select_nutrient").style.display = "none";
    document.getElementById("nutrient_line").style.display = "none";
}

function hideshow_protein_intake() {
    const box = document.getElementById('protein_intake');
    box.style.display = 'block';
    document.getElementById("nutrient_buttons").style.display = "none";
    document.getElementById("select_nutrient").style.display = "none";
    document.getElementById("nutrient_line").style.display = "none";
}

function hideshow_sugar_intake() {
    const box = document.getElementById('sugar_intake');
    box.style.display = 'block';
    document.getElementById("nutrient_buttons").style.display = "none";
    document.getElementById("select_nutrient").style.display = "none";
    document.getElementById("nutrient_line").style.display = "none";
}

function getCal() {
    cal_goal = document.getElementById("num_cal").value;
}

function getSmoothieCal() {
    smoothie_choice = document.getElementById("smoothies2").value;
    // alert(smoothie_choice);
}

function getNumSmoothiesCal() {
    let chosen = smoothies.find(chosen => chosen.name === smoothie_choice);
    let num_smoothies = cal_goal/chosen.cals;
    document.getElementById("chosen_display_cal").innerHTML = "Number of " + smoothie_choice +  " Smoothies needed to satisfy your goal: <br/>"
    document.getElementById("chosen_display_cal_num").innerHTML = Math.ceil(num_smoothies);
}

function hideshow_smoothies_cal() {
    const box = document.getElementById('smoothie_select_cal');
    box.style.display = 'block';
}

function hideshow_numSmoothies_cal() {
    const box = document.getElementById('num_smoothies_cal');
    box.style.display = 'block';
}



function getSugar() {
    sugar_goal = document.getElementById("num_sugar").value;
}

function getSmoothieSugar() {
    smoothie_choice = document.getElementById("smoothies3").value;
}

function getNumSmoothiesSugar() {
    let chosen = smoothies.find(chosen => chosen.name === smoothie_choice);
    let num_smoothies = sugar_goal/chosen.sugar;
    document.getElementById("chosen_display_sugar").innerHTML = "Number of " + smoothie_choice +  " Smoothies needed to satisfy your goal: <br/>";
    document.getElementById("chosen_display_sugar_num").innerHTML = Math.ceil(num_smoothies);
}

function hideshow_smoothies_sugar() {
    const box = document.getElementById('smoothie_select_sugar');
    box.style.display = 'block';
}

function hideshow_numSmoothies_sugar() {
    const box = document.getElementById('num_smoothies_sugar');
    box.style.display = 'block';
}

function test() {
    prompt("hey");
}
