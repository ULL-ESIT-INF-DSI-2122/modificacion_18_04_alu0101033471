type Figure = {
    name: string,
    sides?: number,
    area(...params: number[]): number
  };
  
  let rectangle: Figure = {
    name: "Rectangle",
    sides: 4,
    area: (base: number, height: number) => base * height,
  };
  
  let triangle = {
    name: "Triangle",
    sides: 3,
    area: (base: number, height: number) => (base * height) / 2,
  };
  
  let circle = {
    name: "Circle",
    area: (radius: number) => Math.PI * Math.pow(radius, 2),
  };
  
  const figures: Figure[] = [rectangle, triangle, circle];
  
  figures.forEach((figure) => {
    console.log(`I am a ${figure.name}, I have ${figure.sides} sides and my area is ${figure.area(3, 5).toFixed(2)}`);
  });