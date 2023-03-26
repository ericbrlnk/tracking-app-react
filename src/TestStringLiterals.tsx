function stringLiterals()
{
    type MouseEvent = "click" | "doubleclick" | "mouseup" | "mousedown";
    let mouseEvent: MouseEvent;
    mouseEvent = "click"; // OK
    mouseEvent = "doubleclick"; // OK
    mouseEvent = "mouseup"; // OK
    mouseEvent = "mousedown"; // OK
    //mouseEvent = "mouseover"; // not OK
}

export default stringLiterals;