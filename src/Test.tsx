function test()
{
    console.log("TEST");
    const product = getProduct(4);
    console.log(`The product ${product.name} costs ${product.price}`);

    let greeting : (name: string) => string;

    greeting = function(name: string)
    {
        return `${name}`;
    }

    let gr: string = greeting("Jane");
    console.log(gr);

    // any type
    const json = `{"latitude": 10.11, "longitude":12.12}`;

    // parse JSON to find location
    const currentLocation = JSON.parse(json);
    console.log(currentLocation);
}

interface Product
{
    id: number,
    name: string,
    price: number
}

function getProduct(id : number) : Product
{
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
      }
}

let person:
{
    name: string;
    age: number;
}

person = 
{
    name: "John",
    age: 44
}

export default test;