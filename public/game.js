const buttons = [
    '#button-a',
    '#button-b',
    '#button-c',
    '#button-d',
    '#button-e',
    '#button-f',
    '#button-g',
    '#button-h',
    '#button-i',
    '#button-j',
    '#button-k',
    '#button-l',
    '#button-m',
    '#button-n',
    '#button-o',
    '#button-p',
    '#button-q',
    '#button-r',
    '#button-s',
    '#button-t',
    '#button-u',
    '#button-v',
    '#button-w',
    '#button-x',
    '#button-y',
    '#button-z'
];

const words = [
    "APPLE",
    "BANANA",
    "ORANGE",
    "PEACH",
    "GRAPE",
    "WATERMELON",
    "MANGO",
    "KIWI",
    "SLOTH",
    "PLUM",
    "PINEAPPLE",
    "LEMON",
    "LIME",
    "CHERRY",
    "BLUEBERRY",
    "STRAWBERRY",
    "RASPBERRY",
    "BLACKBERRY",
    "APRICOT",
    "AVOCADO",
    "DOLPHIN",
    "COCONUT",
    "JUPITER",
    "GUAVA",
    "POPCORN",
    "PAPAYA",
    "POMEGRANATE",
    "TANGERINE",
    "DATE",
    "DRAGONFRUIT",
    "BIRYANI",
    "SHAWARMA",
    "ROBBERY",
    "INSTAGRAM",
    "KEYBOARD",
    "CRANBERRY",
    "PASSIONFRUIT",
    "TIGER",
    "BRIDGE",
    "BROCCOLI",
    "CARROT",
    "INCEPTION",
    "PETROL",
    "CUCUMBER",
    "GARLIC",
    "LETTUCE",
    "MUSHROOM",
    "ONION",
    "PEPPER",
    "POTATO",
    "PUMPKIN",
    "RADISH",
    "SPINACH",
    "SWEET POTATO",
    "TOMATO",
    "PICTURE",
    "GALLERY",
    "CHICKEN",
    "FISH",
    "SAUSAGE",
    "SHRIMP",
    "TURKEY",
    "COFFEE",
    "CHEESE",
    "MILK",
    "BUTTER",
    "YOGURT",
    "CREAM",
    "MAYONNAISE",
    "MUSTARD",
    "KETCHUP",
    "RELISH",
    "VINEGAR",
    "SALT",
    "PEPPER",
    "SUGAR",
    "FLOUR",
    "YEAST",
    "CINNAMON",
    "GINGER",
    "VANILLA",
    "CHOCOLATE",
    "WINE",
    "BEER",
    "VODKA",
    "WHISKEY",
    "BRANDY",
    "WATER",
    "MILKSHAKE",
    "COCKTAIL",
    "SOUP",
    "CHILI",
    "SPAGHETTI",
    "LASAGNA",
    "PIZZA",
    "TACO",
    "BURRITO",
    "SUSHI",
    "RICE",
    "NOODLES",
    "BREAD",
    "CROISSANT",
    "PANCAKE",
]

const answer = words[Math.floor(Math.random() * words.length)]
let blanks = ''
for (let iteration = 0; iteration < answer.length; iteration++) {
    blanks = blanks + '_'
}

document.getElementById('guess').textContent = blanks + '(' + answer.length + ' letters)'
document.getElementById('word').textContent = answer

document.addEventListener('DOMContentLoaded', () => {

    const word = document.getElementById('word').innerText;
    const replace = document.getElementById('guess')
    let match = 0
    let wrong = 0
    let hit = 0
    let misses = 0

    //Add a click event listener to each button
    buttons.forEach(function (buttonSelector) {
        const button = document.querySelector(buttonSelector);
        button.addEventListener('click', function () {
            this.style.display = 'none';
            for (let iteration = 0; iteration < word.length; iteration++) {
                if (this.innerText === word.charAt(iteration)) {
                    hit++;
                    let letter = word.charAt(iteration)
                    replace.innerText = replace.innerText.substring(0, iteration) + letter + replace.innerText.substring(iteration + 1, word.length);
                }
                else misses++;
            }
            if (hit > 0) {
                match = match + hit;
                console.log(match);
            }
            if (misses > word.length - 1) {
                wrong++;
            }
            switch (wrong) {
                case 1:
                    document.getElementById('pole').style.display = 'inline';
                    break;
                case 2:
                    document.getElementById('support').style.display = 'inline';
                    break;
                case 3:
                    document.getElementById('harness').style.display = 'inline';
                    break;
                case 4:
                    document.getElementById('head').style.display = 'inline';
                    break;
                case 5:
                    document.getElementById('torso').style.display = 'inline';
                    break;
                case 6:
                    document.getElementById('left-hand').style.display = 'inline';
                    break;
                case 7:
                    document.getElementById('right-hand').style.display = 'inline';
                    break;
                case 8:
                    document.getElementById('left-leg').style.display = 'inline';
                    break;
                case 9:
                    document.getElementById('right-leg').style.display = 'inline';
                    break;
                default:
                    console.error();
                    break;
            }
            hit = 0; misses = 0;
            if (match > word.length - 1) {
                alert('you won')
                document.getElementById('word').style.display = 'inline';
            } else if (wrong >= 9) {
                alert('you lost')
                document.getElementById('word').style.display = 'inline';
            }
        });
    });
})