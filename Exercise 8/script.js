function titleCase(str)
{
    let arr = str.split(" ");

    for(let i = 0; i < arr.length; i++)
    {
        arr[i].toLowerCase();
        let char = arr[i].charAt(0);
        char.toUpperCase();
    }

    let string = arr.join(" ");

    console.log(string);
}

let string = "hEllO WorLd";