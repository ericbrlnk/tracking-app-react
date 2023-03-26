/*
function callUnion(a: any, b: any, c: any)
{
}
*/

function addWithUnion(a: number | string, b: number | string)
{
    if (typeof a === "number" && typeof b === "number")
    {
        return a + b; 
    }
    else if (typeof a === "string" && typeof b === "string")
    {
        return a.concat(b);
    }
    else
    {
        throw new Error("Numbers have to be either numbers or strings.");
    }
}

export default addWithUnion;