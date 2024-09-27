
/*
  A closure is javascript feature where an inner function
  has access to variable from its outer function even after the outer function
   has completed execution
   
  */


function createBankAccount(accountHolderName, initalBalance) {
     let balance = initalBalance;
     return {
          deposite: function (amount) {
               if (amount > 0) {
                    balance += amount;
                    console.log(`${accountHolderName} desposited $${amount},new balance is $${balance}`);
               }
               else {
                    console.log('Deposite amount must be positive');
               }
          },

          withDraw: function (amount) {
               if (amount > 0 && amount <= balance) {
                    balance -= amount;
                    console.log(`${accountHolderName} withdraw $${amount},reamaining balance is $${balance}`);
               } else {
                    console.log('Insufficient balance or invalid withdraw amount');
               }
          },

          getBalance: function () {
               return balance;
          }
     }
}


const johnAccount = createBankAccount('john', 1000);
johnAccount.deposite(500);
johnAccount.withDraw(200);
console.log(`john current balance :$${johnAccount.getBalance()}`);