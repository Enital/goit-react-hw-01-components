export const randomColor = () => {
    let redColor = Math.random() * 200;
    let greenColor = Math.random() * 200;
    let blueColor = Math.random() * 200;
    return `rgb(${redColor} ${greenColor} ${blueColor})`;
}
