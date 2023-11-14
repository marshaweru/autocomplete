//Create array containing suggested search terms
let availableKeyWords = [
    'React JS',
    'Artificial Intelligence',
    'LLM',
    'Python',
    'Software entrepreneurship',
    'Food fight',
    'SaaS',
    'FullStack engineering',
    'Back-end engineering',
    'Mercedes Benz',
    'Porsche',
    'F-16',
    'Audi',
];

//Add variables for elements
const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

//Function for execution when we type anything in input box
inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeyWords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);//To call 
}
//Function to display result
function display(result){
    const content = result.map((list)=>{
        return "<li onlcick=selectInput(this)>" + list + "</li>";
    });
//to give result/display content of unordered list
    resultBox.innerHTML = "<ul" + content.join('') + "</ul>";
}
//To display list in input field
function selectInput