    let a = ["21","123","2"]
    //This code change array values to a Number
    let changed = [];//lalagyan ng new vals
    for (let i = 0; i < a.length;i++){
        changed.push(Number(a[i]))
        console.log(typeof(changed))
    }
    console.log(changed)
