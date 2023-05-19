function calculatePolygonAngleSum(n) {
  if (!Number.isInteger(n) || n < 3) {
    throw new Error("Number of sides must be an integer greater than or equal to 3.");
  }
  const angleSum = (n - 2) * 180;
  return `The sum of angles in a polygon with ${n} sides is ${angleSum} degrees.`;
}