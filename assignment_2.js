function isValidAscii(value) {
    return (value >= 32 && value <= 126);
}

function main(string) {
    const ASCII_value_arr = string.split('').map(a => a.charCodeAt());
    var new_ASCII_value_arr = [...ASCII_value_arr];

    // console.log(string,new_ASCII_value_arr)

    for (let i = 0; i < new_ASCII_value_arr.length; i++) {
        if (new_ASCII_value_arr[i] % 2 === 0 && i < new_ASCII_value_arr.length -1) {
            if (new_ASCII_value_arr[i+1] == ASCII_value_arr[i+1]) {
                new_ASCII_value_arr[i+1] = new_ASCII_value_arr[i+1] + new_ASCII_value_arr[i] % 7
            }
        }
        
        if(new_ASCII_value_arr[i] % 2 !== 0 && i > 0){
            if (new_ASCII_value_arr[i-1] == ASCII_value_arr[i-1]) {
                new_ASCII_value_arr[i-1] = new_ASCII_value_arr[i-1] - new_ASCII_value_arr[i] % 5
            }
        }
    }

    // console.log(new_ASCII_value_arr)


    new_ASCII_value_arr = new_ASCII_value_arr.map(a => {
        if (isValidAscii(a)) {
            return String.fromCharCode(a);
        }else{
            return String.fromCharCode(83);
        }
    })

    const new_string = new_ASCII_value_arr.join('')
    console.log("\nString After Conversion :",new_string,"\n")
}


var string = "sHQen}";
console.log("\nGiven String :",string)
main(string)

// Note: In your example, you marked 125 as an invalid ASCII code, but it's actually a valid ASCII code representing the character '}'.

