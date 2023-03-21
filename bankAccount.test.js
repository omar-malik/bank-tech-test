const BankAccount = require('./bankAccount.js')

describe('BankAccount', () => {
  it('deposits 1000', () => {
    const bankAccount = new BankAccount;
    bankAccount.deposit(1000)
    expect(bankAccount.getBalance()).toBe(1000)
  })


})