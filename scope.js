const baperTaka = 100000;
function PatriChai(age, earning) {
  // console.log(trueAge);
  var decision = canMarry(15000);
  console.log(decision);
  console.log(age);
  console.log(earning);

  const trueAge = age + 7;

  function canMarry(expense) {
    const remaining = baperTaka + earning - expense;

    if (remaining > 1000) {
      var showing = 500;
      console.log(showing);
      return true;
    }
    return false;
  }
}
PatriChai(21, 50000);

//hoisting এর সরল অর্থ হচ্ছে উপরের দিকে উঠানো. সামনে variable দিয়ে ফাংশন তৈরি করলে তা hoisting হবে না, আর hoisting না হলে undefined দেখাবে। কারন ভেরিয়েবল দিয়ে কিছু ডিক্লেয়ার করলে তা শুধু var canMary=  বা, var true= এর বাম পাশের অংশটুকুই নেয়। ডানপাশের অংশটুকু নেয় না। তাই ভেরিয়েবল বাদে ফাংশন ডিক্লেয়ার করলে তা যেকোনো জায়গা থেকে ব্যবহার করা যেতে পারে।

// আবার var trueAge = age + 7; কে উপরে থেকে কল করলে undefined দেখালেও var এর পরিবর্তে const বা let ব্যবহার করলে তা আর hoisting হয় না। তাকে তার জায়গায়তেই রেখে দেয়। উপর থেকে কল করলে রেফারেন্স এরর দেখাবে। let বা const block বা {} এর ভিতরেই থেকে যায় আর এটাই ব্লক scope.

// scope chain হচ্ছে কোনো একটি মান যদি মেইন ফাংশনে ডিক্লেয়ার করা হয় তবে তার ভিতরের ফাংশন থেকেও ঐ মান চেইন আকারে গ্রহন করবে নতুন করে ডিক্লেয়ার করতে হবে না।
