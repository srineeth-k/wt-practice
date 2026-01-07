//Implement a 'BankAccount' class with private balance field, deposit(), withdraw(), and getBalance() methods
class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    }
  }
  getBalance() {
    return this.#balance;
  }
}

let acc1=new BankAccount();
acc1.deposit(1000);
acc1.withdraw(300);
console.log("Available Balance ",acc1.getBalance());
