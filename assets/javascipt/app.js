
var correct = 0;
var incorrect = 0;
var unanswered = 0;

var triviaQuestions = [
    {
        question: "In Spirited Away, what do soot sprites love to eat?",
        choice1: "Flowers",
        choice2: "Acorns",
        choice3: "Candy",
        choice4: "Sushi",
        rightAnswer: "choice3",
    },
    {
        question: "What gift did Totoro give to Satsuki and Mei?",
        choice1: "Nuts and seeds",
        choice2: "Toys",
        choice3: "White Cat",
        choice4: "Red Umbrella",
        rightAnswer: "choice1",
    },
    {
        question: "In Howl's Moving Castle, who had Howl's heart?",
        choice1: "The Witch of the Waste",
        choice2: "Sophie",
        choice3: "Turnip head",
        choice4: "Calcipher",
        rightAnswer: "choice4",
    },
    {
        question: "What mystical creature did Ashitaka see in the lurking in the trees?",
        choice1: "Forest Spirit",
        choice2: "Glowing Owl",
        choice3: "Kodama",
        choice4: "Fairies",
        rightAnswer: "choice2",
    },
    {
        question: "What is the name of the boy who found Ponyo?",
        choice1: "Sōsuke",
        choice2: "Kōichi",
        choice3: "Granmamare",
        choice4: "Fujimoto",
        rightAnswer: "choice1",
    },
    {
        question: "What is the name of the black cat in Kiki's Delivery Service?",
        choice1: "Yakul",
        choice2: "Gigi",
        choice3: "Teto",
        choice4: "Hin",
        rightAnswer: "choice2",
    },
    {
        question: "In Nausicaä of the Valley of the Wind, what was mainly responsible for the creation of the Toxic Jungle and the Seven Days of Fire?",
        choice1: "Asbel",
        choice2: "Ohms",
        choice3: "Princess Kushana",
        choice4: "Giant Warriors",
        rightAnswer: "choice4",
    },
    {
        question: "In The Cat Returns, what did Haru share with Yuki so she wouldnt starve?",
        choice1: "Shrimp",
        choice2: "Strawberry cake",
        choice3: "Fish crackers",
        choice4: "Curry and rice",
        rightAnswer: "choice3",
    },
];
for (var i = 0; i<triviaQuestions.length; i++){
    var newQuestion = $('<h2>');
    newQuestion.text(triviaQuestions[i].question);
    var choiceContainer = $("<div>");
    var choice1 = $('<input type="radio">');
    choice1.attr('name', 'q' + (i + 1));
    choice1.attr('value', triviaQuestions[i].choice1);
    choiceContainer.append(choice1);
    choiceContainer.append(triviaQuestions[i].choice1);
   
    var choice2 = $('<input type="radio">');
    choice2.attr('name', 'q' + (i + 1));
    choice2.attr('value', triviaQuestions[i].choice2);
    choiceContainer.append(choice2);
    choiceContainer.append(triviaQuestions[i].choice2);
    $('#questions').append(newQuestion);
    $('#questions').append(choiceContainer);

    var choice3 = $('<input type="radio">');
    choice3.attr('name', 'q' + (i + 1));
    choice3.attr('value', triviaQuestions[i].choice3);
    choiceContainer.append(choice3);
    choiceContainer.append(triviaQuestions[i].choice3);
    $('#questions').append(newQuestion);
    $('#questions').append(choiceContainer);

    var choice4 = $('<input type="radio">');
    choice4.attr('name', 'q' + (i + 1));
    choice4.attr('value', triviaQuestions[i].choice4);
    choiceContainer.append(choice4);
    choiceContainer.append(triviaQuestions[i].choice4);
    $('#questions').append(newQuestion);
    $('#questions').append(choiceContainer);
   
}

$("#start-button").text("Start");
$("#timer").hide();
$('#questions').hide()
$("#done-button").text("Done").hide();
$("#all-done").text("All done!").hide();
$("#correct-answers").text("Correct: " + correct).hide();
$("#incorrect-answers").text("Incorrect: " + incorrect).hide();
$("#unanswered").text("Unanswered: " + unanswered).hide();

$("#start-button").on("click", function () {
    var startButton = $('<button>');
    console.log("Start button");
    $('#timer').show();
    $('#done-button').show();
    $('#questions').show();
    var time = 10;
    $("#timer").text(time);
    var gameTimer = setInterval(function(){
        time--
        $("#timer").text(time);
        if (time === 0){
            clearInterval(gameTimer);
            setTimeout(function(){
                console.log("Game over")
            },1)            
        }
    },1000)
})

$("#done-button").on("click", function () {
    var q1 = $('input[name="q1"]:checked').val();
    var q2 = $('input[name="q2"]:checked').val();
    var q3 = $('input[name="q3"]:checked').val();
    var q4 = $('input[name="q4"]:checked').val();
    var q5 = $('input[name="q5"]:checked').val();
    var q6 = $('input[name="q6"]:checked').val();
    var q7 = $('input[name="q7"]:checked').val();
    var q8 = $('input[name="q8"]:checked').val();
    console.log(q1, q2, q3, q4, q5, q6, q7, q8);
})