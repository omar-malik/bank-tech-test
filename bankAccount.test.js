const BankAccount = require('./bankAccount.js')

describe('BankAccount', () => {
  it('deposits 1000', () => {
    const bankAccount = new BankAccount;
    bankAccount.deposit(1000)
    expect(bankAccount.getBalance()).toBe(1000)
  })

  it('withdraws 500', () => {
    const bankAccount = new BankAccount;
    bankAccount.deposit(1000)
    bankAccount.withdraw(500)
    expect(bankAccount.getBalance()).toBe(500)
  })

  it('returns a statement', () => {
    const bankAccount = new BankAccount;

    bankAccount.deposit(1000.00)
    bankAccount.deposit(2000.00)
    bankAccount.withdraw(500.00)
    expect(bankAccount.getBalance()).toBe(2500)
    expect(bankAccount.printStatement()).toEqual(
      `date || credit || debit || balance\n${new Date().toLocaleDateString('en-UK')} ||  || 500.00 || 2500.00\n${new Date().toLocaleDateString('en-UK')} || 2000.00 ||  || 3000.00\n${new Date().toLocaleDateString('en-UK')} || 1000.00 ||  || 1000.00\n`)
})
})