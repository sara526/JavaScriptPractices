console.log("Day 15: JavaScript Array Master Course with Tapas");

{
    const mixedArray = [100, true, "tapaScript", {}];

    // index = The position of an element in the array is known as its index.
    // index starts with 0
    // index end with length - 1

    const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

    function Car(model) {
        this.model = model;
    }


    for (let i = 0; i <= salad.length - 1; i++) {
        console.log(`Element at index ${i} is ${salad[i]}`);
    }

    // push() -  end
    const ret = salad.push("🥜");
    console.log(ret); // 8
    console.log(salad);

    // unshift() - start

    const unRet = salad.unshift("🥜");
    console.log(unRet); // 9
    console.log(salad);

    // pop - end
    console.log(salad);
    const popRet = salad.pop();
    console.log(popRet);
    console.log(salad);

    // shift() - start
    console.log(salad);
    const shiftRet = salad.shift();
    console.log(shiftRet);
    console.log(salad);

    // slice() - copy

    // salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
    const saladCopy = salad.slice(2,4);
    console.log("Salad Before Copy", salad);
    console.log("Salad After Copy", saladCopy);
    console.log(salad !== saladCopy); // true

    //ex:

    let names =["Sara", "Maha"];
    const newNames = names.push("Rehab");
    console.log(newNames);
    const newPop = names.pop(); //remove end
    console.log(names);
    const newShift = names.shift();  //remove start
    console.log(names);
    const newUnShift = names.unshift("Sara", "Rehab");
    // console.log(names);
    for (let i = 0; i< names.length; i++) {
        console.log(names[i]);
        
    }

    // ----------- max/min pattern:

    let numbers = [7, 2, 9, 4, 1];
    let max = numbers[0];
    let min =numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max= numbers[i];
        }
        if (numbers[i] < min) {
           min= numbers[i];
        }        
        
    }
    console.log(max);
    console.log(min);

    //  ------- includes() & indexOf() , -1

    let student = ["Ahmed", "Eman", "Omar"];
     console.log(student.includes("Badr")); // false
     console.log(student.includes("Eman"));  // true
     console.log(student.indexOf("Omar")); // 2
     console.log(student.indexOf("Emam")); // -1       


}
