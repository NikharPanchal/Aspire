const quiz = new Map();

quiz.set('question', "Who is the Prime Minister of India..?");
quiz.set(1, '1. Mannohan singh');
quiz.set(2, '2. Narendra modi');
quiz.set(3, '3. Rahul Gandhi');
quiz.set(4, '4. none of these');
quiz.set('answer', 2);
quiz.set(true, "Correct Answer");
quiz.set(false, "Wrong Answer");

for (const [key, value] of quiz)
    typeof key === 'number' ? console.log(quiz.get(key)) : ''

const input_data = Number(prompt("Enter your choise "));
const check = quiz.has(input_data);
if (check) {
    if (input_data === quiz.get("answer")) {
        console.log(quiz.get(true));
    }
    else {
        console.log(quiz.get(false));
    }
}
else {
    console.log("Option is not available");
}