/* const bank = (owner) => {
  balance = 0;
  return (amount) => {
    // balance=balance+amount;
    balance += amount;
    return balance;
  };
}; */

const bank = (owner) => {
  balance = 0; //array function object এর ন্যায় তাই এর ভিতরে balance একটি প্রোপার্টি মত আচরন করতে পারে;
  return {
    deposit: (amount) => {
      // balance = balance + amount;
      balance += amount;
      return balance;
    },
    withdraw: (amount) => {
      // balance = balance - amount;
      balance -= amount;
      return balance;
    },
  };
};

const mofijBank = bank("Mofij");
console.log(mofijBank.deposit(100));
console.log(mofijBank.deposit(300));
console.log(mofijBank.deposit(50));
console.log(mofijBank.balance);
console.log(mofijBank.deposit(200));
console.log(mofijBank.withdraw(100));
console.log(mofijBank.withdraw(200));

// closure হচ্ছে কোনো একটি ফাংশনের ভিতরে যদি কোনো একটি ফাংশনকে কল করা হয় অথবা রিটার্ন করা হয় তবে তার ভিতরের ফাংশনটি তার ইন্টার্নাল প্রোপার্টি access করতে পারে, modify করতে পারে কিন্তু বাহির থেকে এগুলো পরিবর্তন করা যাবে না। কারন সে(যেমন bank ফাংশনটি) একটা closure তৈরি করে।
