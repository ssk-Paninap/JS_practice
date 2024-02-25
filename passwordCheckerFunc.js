        let btn1 = document.getElementById("btn1");
        let tb1 = document.getElementById("tb1");
        let myh3 = document.getElementById("myh3");
        let tb2 = document.getElementById("tb2");

        btn1.onclick = function (){
            let password = tb2.value;

            const passwordChecker = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;
            if (passwordChecker.test(password)){
                myh3.textContent = `Welcome ${tb1.value} you had successfully logged in.`
            }
            else {
                myh3.textContent = `Password must have 6 chars, number, symbol, lower and uppercase letter`;
            }

        console.log(password);

    }
