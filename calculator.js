function displayNum(num)
{
    display.value+=num
    //display.value=display.value+num
}
function allclear()
{
    display.value=""
}
function evaluateExp()
{
    //exp=display.value
    //out=eval(exp)
    //display.value=out
    display.value=eval(display.value)
}
function removeElement()
{
    curExp=display.value
    display.value=curExp.slice(0,-1)
}
