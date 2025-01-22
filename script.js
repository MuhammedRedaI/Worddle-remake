function IsValid(value) {
    return /^[a-zA-Z]$/.test(value);
}

const wordURL = "https://words.dev-apis.com/word-of-the-day";
const validationURL = " https://words.dev-apis.com/validate-word";

async function validation(word) {
    const promise = await fetch(validationURL, {
        method: "POST",
        body: JSON.stringify({"word" : word})
    });
    const data = await promise.json();
    return data.validWord;
}

async function getWord() {
    const promise = await fetch(wordURL);
    const processedResponse = await promise.json();
    return processedResponse.word;
}

async function init() {
    const inputs1 = document.querySelectorAll(".row-1 input");
    const inputs2 = document.querySelectorAll(".row-2 input");
    const inputs3 = document.querySelectorAll(".row-3 input");
    const inputs4 = document.querySelectorAll(".row-4 input");
    const inputs5 = document.querySelectorAll(".row-5 input");
    const inputs6 = document.querySelectorAll(".row-6 input");
    const worddle = await getWord();
    const worddleArr = worddle.split("");
    let guessArr = [];

    function Gear(inputs) {
        inputs.forEach(function(input, index) {
            input.addEventListener('input', (e) => {
                const value = e.target.value;
                if (IsValid(value)) {
                    guessArr[index] = value.toUpperCase(); // Store the value in guessArr at the correct index
                    e.target.value = value.toUpperCase();
                    if (index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                } else {
                    e.target.value = "";
                }
            });

            // Add keydown event listener to handle Enter and Backspace keys
            input.addEventListener('keydown',async function(e) {
                if (e.key === 'Enter' && index === inputs.length - 1) {
                    const guessWord = guessArr.join("");
                    if (await validation(guessWord.toLowerCase())) {
                        if (guessWord.toLowerCase() === worddleArr.join("")) {
                            inputs.forEach((input) =>{
                                input.style.color = "white";
                            input.style.backgroundColor = "green";
                            inputs.disabled = true;
                            })
                            const title = document.querySelector(".title");
                            title.classList.add("rainbow");
                            alert("You guessed It Right!!");
                            
                            
                        }else {
                            let doneBefore = [];
                            guessArr.forEach((ch,idx) => {
                                ch = ch.toLowerCase();
                                if(ch === worddleArr[idx] && idx === worddleArr.indexOf(worddleArr[idx])){
                                    inputs[idx].style.backgroundColor = "green";
                                    inputs[idx].style.color = "white";
                                    inputs[idx].disabled = true;
                                    

                                }else if (worddleArr.includes(ch) && !doneBefore.includes(ch) ){
                                    inputs[idx].style.backgroundColor = "yellow";
                                    inputs[idx].style.color = "white";
                                    doneBefore.push(ch);
                                    inputs[idx].disabled = true;
                                    
                                }else{
                                    inputs[idx].style.backgroundColor = "gray";
                                    inputs[idx].style.color = "white";
                                    inputs[idx].disabled = true;

                                }
                            })
                            
                        }
                    } else {
                        inputs.forEach(input => {
                            input.style.borderColor = 'red';
                        });
                        setTimeout(() => {
                            inputs.forEach(input => {
                                input.style.borderColor = '';
                            });
                        }, 500);
                    }
                } else if (e.key === "Backspace") { 
                    
                    if (input.value === "" && index > 0) {
                        inputs[index - 1].focus();
                    } else {
                        input.value = "";
                        guessArr[index] = ""; // Clear the corresponding entry in guessArr
                    }
                }
            });
        });
    }

    Gear(inputs1);
    Gear(inputs2);
    Gear(inputs3);
    Gear(inputs4);
    Gear(inputs5);
    Gear(inputs6);
}

init();