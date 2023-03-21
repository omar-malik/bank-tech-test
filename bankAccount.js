class BankAccount {
  constructor() {
    this.balance = 0
    this.statement = []
  }

  deposit(amount) {
    this.balance += amount
    this.statement.push({"date": new Date().toLocaleDateString('en-UK'), 
    "credit": amount.toFixed(2), 
    "debit": null, 
    "balance": this.getBalance()})
  }

  withdraw(amount) {
    this.balance -= amount
    this.statement.push({"date": new Date().toLocaleDateString('en-UK'), 
    "credit": null, 
    "debit": amount.toFixed(2), 
    "balance": this.getBalance()})
  }

  getBalance() {
    return this.balance

  }

  printStatement() {
    let statementString = "date || credit || debit || balance\n"
    this.statement = this.statement.reverse()
    this.statement.forEach(transaction => {
      statementString += `${transaction.date} || ${transaction.credit || ""} || ${transaction.debit || ""} || ${transaction.balance.toFixed(2)}\n`
    })
    console.log(statementString)
    return statementString
  }


}

module.exports = BankAccount;