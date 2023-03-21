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

  getBalance() {
    return this.balance

  }

}

module.exports = BankAccount;