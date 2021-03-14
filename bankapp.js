const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let accounts = {
    "anthony": {
        "password": "frog",
        "balance": 500,
    },
    "george": {
        "password": "nerd",
        "balance": 6969.42
    },
    "jeff": {
        "password": "mynamea",
        "balance": 420.69
    }
}

let currentuser = ''
let passwordattempt = 0

function menu() {
      rl.question("What can I do for you today? Withdraw, Deposit, Check Balance, Transfer, Quit\n", (answer) => {
          answer = answer.toLowerCase().replace(/\s/g, '')
          switch(answer) {
              case "withdraw":
                    withdraw();
                    break;
                case "deposit":
                    deposit();
                    break;
                case "checkbalance":
                    checkbalance();
                    break;
                case "transfer":
                              ;
                case "quit":
                    quit();
                    break;
                default:
                    console.log("I'm sorry I dont understand please try again")
                    menu();             
                    }
                });
            }

            
function withdraw() {
    rl.question("How much are you looking to withdraw today?\n", (answer) => {
        let integer = 0
        integer = parseFloat(answer)
        let value = accounts.currentuser.balance - integer
        if (value < 0){
            console.log("Insufficient Funds")
            console.log(`Your balance is: ${accounts.currentuser.balance}`)
            withdraw();
        } else if (value >= 0) {
            console.log(`Withdrawing: ${integer}`)
            accounts.currentuser.balance -= integer
            console.log(`Balance remaining: ${accounts.currentuser.balance}`)
            anythingelse()
        } else {
            console.log("Error: Please try again")
            withdraw();
        }
    }
    )
}

function anythingelse() {
    rl.question("Anything else?\n", (answer) => {
        answer = answer.toLowerCase().replace(/\s/g, '')
        if (answer === "yes") {
            menu()
        } else {
            quit()
        }
    })
}


function quit() {
    console.log("Have a nice day")
    process.exit();
}

function deposit() {
    rl.question("How much are you looking to deposit?\n", (answer) => {
        let integer = 0
        integer = parseFloat(answer)
        accounts.currentuser.balance += integer
        console.log(`Your new balance is: ${accounts.currentuser.balance}`)
        anythingelse()
    })
}

function checkbalance() {
    console.log(`Your current balance is: ${accounts.currentuser.balance}`)
    anythingelse();
}


function login() {
    console.log("Welcome to the banking app")
    rl.question("Please enter your Account Name to continue\n", (answer) => {
        answer = answer.toLowerCase().replace(/\s/g, '')
        for (const [key] of Object.entries(accounts)) {
            if (key === answer) {
                currentuser = answer
                passwordpart();
            }
          }
        }               
    )
}

function passwordpart() {
    if (passwordattempt === 3) {
        console.log("Password failure attempts at maximum")
        quit()
    }
    rl.question(`Please enter your password ${currentuser}\n`, (answer) => {
        answer = answer.toLowerCase().replace(/\s/g, '')
        for (const [key, value] of Object.entries(accounts[currentuser])) {
                        if (value === answer) {
                            console.log(`Welcome ${currentuser}` )
                            menu();
                            break;
                        } else {
                            console.log("Wrong Password")
                            console.log("Please try again")
                            passwordattempt++
                            passwordpart()
                        }
                    }
                })
            }
        
        

login();
