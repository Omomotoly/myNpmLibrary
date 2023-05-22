const calculatePolygonAngleSum = require('./index');


describe ('calculatePolygonAngleSum', () => {


  test ('should calculate sum of angle for a valid polygon', () => {

    const actualOutput = calculatePolygonAngleSum(7)
    const expectedOutput = 900

    expect (actualOutput).toBe(expectedOutput)
  });

  test ('should throw error for invalid number of sides', () => {

    const actualOutput = calculatePolygonAngleSum(2)
    const expectedOutput = 'number of sides must be an integer greater than or equal to 3'

    expect (actualOutput).toBe(expectedOutput)
  })

  test ('should throw error for non-integer number of sides', () => {
      
      const actualOutput = calculatePolygonAngleSum(6.5)
      const expectedOutput = 'number of sides must be an integer greater than or equal to 3'
   
      expect (actualOutput).toBe(expectedOutput) 
  })

  test ('should throw error if number of sides is a number string', () => {

    expect (() => calculatePolygonAngleSum('6'))
      .toThrow(TypeError)
  })

   test('number of polygon side format should be a number', () => {
    expect (() => calculatePolygonAngleSum('xyz'))
     .toThrow(TypeError)
  }) 
})