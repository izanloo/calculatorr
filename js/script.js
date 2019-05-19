var sw = false,sw2 = false;
var a, b;
var n = ' ';

function keysubmit(key)
{

    if (document.getElementById("outtext").value == "0") document.getElementById("outtext").value="";

    var input = Number(key);

    if(input>=0 || input<=9)
    {
        document.getElementById("outtext").value += input;
    }
    else
    {
        if (sw2 == true)
        {
            document.getElementById("output").innerHTML = "  ";
        }
        if (sw == true)
        {
            switch (n)
            {
                case '+':
                    a += Number(document.getElementById("outtext").value);
                    break;
                case '-':
                    a -= Number(document.getElementById("outtext").value);
                    break;
                case '/':
                    a /= Number(document.getElementById("outtext").value);
                    break;
                case '*':
                    a *= Number(document.getElementById("outtext").value);
                    break;
            }
            document.getElementById("output").innerHTML += ' '+document.getElementById("outtext").value;
            document.getElementById("outtext").value ="";
            document.getElementById("output").innerHTML+= " "+key;
        }
        else
        {
            document.getElementById("output").innerHTML = "";
            a = Number(document.getElementById("outtext").value);
            document.getElementById("output").innerHTML = ' ' + document.getElementById("outtext").value+" "+key;
            document.getElementById("outtext").value = "";
            sw = true;
        }
        n = key;
    }
}


function equal()
{
    document.getElementById("output").innerHTML +=' '+document.getElementById("outtext").value;
    switch (n)
    {
        case '-':
            b = Number(document.getElementById("outtext").value);
            document.getElementById("outtext").value = a - b;
            a = a - b;
            break;
        case '+':
            b = Number(document.getElementById("outtext").value);
            document.getElementById("outtext").value = a + b;
            a = a + b;
            break;
        case '/':
            b = Number(document.getElementById("outtext").value);
            document.getElementById("outtext").value = a / b;
            a = a * b;
            break;
        case '*':
            b = Number(document.getElementById("outtext").value);
            document.getElementById("outtext").value = a * b;
            a = a * b;
            break;
    }
    document.getElementById("output").innerHTML +=" ="+ ' '+document.getElementById("outtext").value;
    sw2 = true;
    sw = false;
}

function ac() {
    document.getElementById("outtext").value=' ';

}