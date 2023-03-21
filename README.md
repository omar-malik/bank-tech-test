# bank-tech-test
 
Hi there, this is a mock technical test by makers academy to produce code that has some functionaltiy that represents a bank account, including deposits, withdrawals and viewing a statement of transactions. The output should look something like this


<!-- Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00  -->

For my test I wanted to use JS, I chose JS so that I could practice using it. 

I used Jest for testing, so you can run the command 'jest' in the terminal to test the code.

To interact with the code in the REPL, type node to enter the REPL, and then you can type the following commands to get an output that is similar to the example above:

const BankAccount = require('./bankAccount.js')
const bankAccount = new BankAccount
bankAccount.deposit(1000)
bankAccount.deposit(2000)
bankAccount.withdraw(500)

Note: I decided to use the actual date, I felt like it made the code more personal, and that you were actually interacting with it rather than printing preset values. Thanks for reading