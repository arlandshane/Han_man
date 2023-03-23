const buttons = [
	"#button-a",
	"#button-b",
	"#button-c",
	"#button-d",
	"#button-e",
	"#button-f",
	"#button-g",
	"#button-h",
	"#button-i",
	"#button-j",
	"#button-k",
	"#button-l",
	"#button-m",
	"#button-n",
	"#button-o",
	"#button-p",
	"#button-q",
	"#button-r",
	"#button-s",
	"#button-t",
	"#button-u",
	"#button-v",
	"#button-w",
	"#button-x",
	"#button-y",
	"#button-z",
];

const easyWords = [
	"APPLE",
	"BANANA",
	"ORANGE",
	"GUAVA",
	"PAPAYA",
	"BIRYANI",
	"SHAWARMA",
	"INSTAGRAM",
	"TIGER",
	"CARROT",
	"PETROL",
	"CUCUMBER",
	"GARLIC",
	"PEPPER",
	"POTATO",
	"MANGO",
	"SPINACH",
	"TOMATO",
	"SLOTH",
	"COCONUT",
	"GALLERY",
	"CHOCOLATE",
	"CHICKEN",
];

const mediumWords = [
	"JUPITER",
	"BUTTER",
	"YOGURT",
	"KEYBOARD",
	"MUSTARD",
	"INCEPTION",
	"COMPUTER",
	"BRIDGE",
	"UNIVERSE",
	"KETCHUP",
	"RELISH",
	"PICTURE",
	"PEPPER",
	"SUGAR",
	"CINNAMON",
	"VODKA",
	"WHISKEY",
	"BRANDY",
];

const hardWords = [
	"DOLPHIN",
	"MAYONNAISE",
	"VINEGAR",
	"CRANBERRY",
	"PASSIONFRUIT",
	"BROCCOLI",
	"HEADPHONES",
	"TELEVISION",
	"WATERMELON",
	"PINEAPPLE",
	"STRAWBERRY",
	"POMEGRANATE",
	"TANGERINE",
	"DRAGONFRUIT",
	"AVOCADO",
	"PSYCHOLOGY",
	"QUANTUM",
	"CHEMISTRY",
	"ZOOLOGY",
];

const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
var match = 0;
var wrong = 0;
var hit = 0;
var misses = 0;

document.addEventListener("DOMContentLoaded", () => {
	var answer;
	var blanks;

	easy.addEventListener("click", () => {
		document.getElementById("mode-chosen").innerText = "Easy";
		answer = easyWords[Math.floor(Math.random() * easyWords.length)];
		// console.log(answer);
		blanks = "";
		for (let iteration = 0; iteration < answer.length; iteration++) {
			blanks = blanks + "_";
		}
		document.querySelector(".level").style.opacity = "0.5";
		document.querySelector(".level").style.pointerEvents = "none";
		buttonClicks();
	});

	medium.addEventListener("click", () => {
		document.getElementById("mode-chosen").innerText = "Medium";
		answer = mediumWords[Math.floor(Math.random() * mediumWords.length)];
		// console.log(answer);
		blanks = "";
		for (let iteration = 0; iteration < answer.length; iteration++) {
			blanks = blanks + "_";
		}
		document.querySelector(".level").style.opacity = "0.5";
		document.querySelector(".level").style.pointerEvents = "none";
		buttonClicks();
	});

	hard.addEventListener("click", () => {
		document.getElementById("mode-chosen").innerText = "Hard";
		answer = hardWords[Math.floor(Math.random() * hardWords.length)];
		// console.log(answer);
		blanks = "";
		for (let iteration = 0; iteration < answer.length; iteration++) {
			blanks = blanks + "_";
		}
		document.querySelector(".level").style.opacity = "0.5";
		document.querySelector(".level").style.pointerEvents = "none";
		buttonClicks();
	});

	function buttonClicks() {
		document.getElementById("word").textContent = answer;
		document.getElementById("guess").textContent = blanks;
		document.getElementById("no-of-letters").innerText =
			"(" + answer.length + " letters)";
		const word = document.getElementById("word").innerText;
		const replace = document.getElementById("guess");

		match = 0;
		wrong = 0;
		hit = 0;
		misses = 0;

		buttons.forEach(function (buttonSelector) {
			const button = document.querySelector(buttonSelector);
			button.addEventListener("click", function () {
				this.style.display = "none";
				for (let iteration = 0; iteration < word.length; iteration++) {
					if (this.innerText === word.charAt(iteration)) {
						hit++;
						let letter = word.charAt(iteration);
						replace.innerText =
							replace.innerText.substring(0, iteration) +
							letter +
							replace.innerText.substring(
								iteration + 1,
								word.length
							);
					} else misses++;
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
						document.getElementById("pole").style.display =
							"inline";
						break;
					case 2:
						document.getElementById("support").style.display =
							"inline";
						break;
					case 3:
						document.getElementById("harness").style.display =
							"inline";
						break;
					case 4:
						document.getElementById("head").style.display =
							"inline";
						break;
					case 5:
						document.getElementById("torso").style.display =
							"inline";
						break;
					case 6:
						document.getElementById("left-hand").style.display =
							"inline";
						break;
					case 7:
						document.getElementById("right-hand").style.display =
							"inline";
						break;
					case 8:
						document.getElementById("left-leg").style.display =
							"inline";
						break;
					case 9:
						document.getElementById("right-leg").style.display =
							"inline";
						break;
					default:
						console.error();
						break;
				}
				hit = 0;
				misses = 0;
				if (match > word.length - 1) {
					alert("you won");
					document.getElementById("word").style.display = "inline";
				} else if (wrong >= 9) {
					alert("you lost");
					document.getElementById("word").style.display = "inline";
				}
			});
		});
	}
});
