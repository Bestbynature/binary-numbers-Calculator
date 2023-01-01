const buttons = document.getElementsByClassName('btn')
const display = document.getElementById("res")
let signs, left, operand, right;
Array.from(buttons).map(button =>{
    button.addEventListener("click", (e)=>{
        switch(e.target.innerText){
            case "0":
                if(display.innerHTML === "0")return;
                display.innerHTML += "0";
                break;
            case "1":
                display.innerHTML += "1";
                break;
            case "+":
                if(display.innerHTML === '') return;
                if ((display.innerHTML).slice(-1) === '+') return;
                signs = ["-", "*", "÷"]
                if(signs.includes((display.innerHTML).slice(-1))) display.innerHTML = (display.innerHTML).slice(0, -1);

                display.innerHTML += "+";
                left = (display.innerHTML).slice(0, -1); operand = "+";

                break;
            case "-":
                if(display.innerHTML === '') return;
                if ((display.innerHTML).slice(-1) === '-') return;
                signs = ["+", "*", "÷"]
                if(signs.includes((display.innerHTML).slice(-1))) display.innerHTML = (display.innerHTML).slice(0, -1);
                
                display.innerHTML += "-";
                left = (display.innerHTML).slice(0, -1); operand = "-";


                break;
            case "*":
                if(display.innerHTML === '') return;
                if ((display.innerHTML).slice(-1) === '*') return;
                signs = ["-", "+", "÷"]
                if(signs.includes((display.innerHTML).slice(-1))) display.innerHTML = (display.innerHTML).slice(0, -1);
                display.innerHTML += "*";
                left = (display.innerHTML).slice(0, -1); operand = "*";

                break;
            case "÷":
                if(display.innerHTML === '') return;
                if ((display.innerHTML).slice(-1) === '÷') return;
                signs = ["-", "+", "*"]
                if(signs.includes((display.innerHTML).slice(-1))) display.innerHTML = (display.innerHTML).slice(0, -1);
                display.innerHTML += "÷";
                left = (display.innerHTML).slice(0, -1); operand = "/";

                break;
            case "C":
                display.innerHTML = '';
                left = '', operand = '';
                break;
            default:
                if(display.innerHTML ==='')return;
                right = (display.innerHTML).slice(left.length+1)
                left = parseInt(left, 2); right = parseInt(right, 2)
                display.innerHTML = eval(`${left}${operand}${right}`).toString(2);
                // console.log(left, operand, right)
        }
    })
})

let str = "Aberdeen"
console.log(str.slice(0, -1))
