// Immediately Invoked Function Expressions (IIFE)
/* Encapsulation: IIFEs create a new scope for variables, preventing them from polluting the global scope. 
This helps avoid naming conflicts and unintended interactions with other scripts or libraries.*/
/* Overall, IIFEs are a powerful tool in JavaScript for creating encapsulated, private scopes,
initializing scripts, and avoiding common issues like global namespace pollution and hoisting problems. */
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');
//Always end IIFE with a semi colon ; to show end of execution or else you ll get an error
