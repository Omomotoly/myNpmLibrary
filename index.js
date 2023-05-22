function calculatePolygonAngleSum (n) {

  if ( typeof n !== 'number' ) throw new TypeError()
  if ( !Number.isInteger(n) || n < 3 ) return 'number of sides must be an integer greater than or equal to 3'
  //if ( typeof n === 'string' ) n = parseInt(n)
  return (n-2) * 180;
}

module.exports = calculatePolygonAngleSum; 
