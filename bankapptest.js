let accounts = {
    "anthony": {
        password: "frog",
        balance: 500,
    },
    "george": {
        password: "nerd",
        balance: 6969.42
    },
    "jeff": {
        password: "mynamea",
        balance: 420.69
    }
}

let currentuser = ""

function login() {
    console.log("Welcome to the banking app")
    rl.question("Please log in to continue\n", (answer) => {
        answer = answer.toLowerCase().replace(/\s/g, '')
        for (const [key] of Object.entries(accounts)) {
            if (answer === key) {
                currentuser = answer
                rl.question(`Please enter your password ${currentuser}\n`, (answer) => {
                    if (answer === accounts.currentuser.password) {
                        console.log(`Welcome ${currentuser}`)
                        menu();
                    } else {
                        console.log("Wrong Password")
                        console.log("Please try again")
                    }
                })

            }
          }
        }               
    )
}

