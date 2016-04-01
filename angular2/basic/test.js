var a = v => v + 1;
function f (x, y = 7, z = 42) {
    return x + y + z
}

document.getElementById("id1").innerHTML = "Paragraph changed! " + f(7);
console.log(a(5));
