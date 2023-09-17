// Immediately Invoked Function Expression (IIFE) :- Global scope ke wajah se pollute hota h koi specific function uske lie we use iife.



(function lala(){  // "named IIFE" kyuki is function ka nam hai
    console.log(`DB Connected`);    //-->> is tarah se function ko parenthisis ke andr wrap kr skte hain iife k lie
})();       //--> semicolon islie kyui iife ko btana pdega ki function execute krke end kaha krna h


( (name) => {    //-->> "unnamed IIFE " kyuki function ka nam ni h
    console.log(`DB Connected Two ${name}`);

})('Pranav')
