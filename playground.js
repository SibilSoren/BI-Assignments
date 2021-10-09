function checkObj(obj, props) {
    if (obj.hasOwnProperty(props)) {
        return obj[props];
    } else {
        return "Not Found";
    }
}
// let myObj = { gift: "pony", pet: "kitten", bed: "sleigh" };
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));