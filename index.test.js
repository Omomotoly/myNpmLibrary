const polygonAngleSum = require('./index');


describe ('polygonAngleSum', () => {


  test ('should calculate sum of angle for a valid polygon', () => {

    const actualOutput = polygonAngleSum(7)
    const expectedOutput = 900

    expect (actualOutput).toBe(expectedOutput)
  });

  test ('should throw error for invalid number of sides', () => {

    const actualOutput = polygonAngleSum(2)
    const expectedOutput = 'number of sides must be an integer greater than or equal to 3'

    expect (actualOutput).toBe(expectedOutput)
  })

  test ('should throw error for non-integer number of sides', () => {
      
      const actualOutput = polygonAngleSum(6.5)
      const expectedOutput = 'number of sides must be an integer greater than or equal to 3'
   
      expect (actualOutput).toBe(expectedOutput) 
  })

  test ('should throw error if number of sides is a number string', () => {

    expect (() => polygonAngleSum('6'))
      .toThrow(TypeError)
  })

   test('number of polygon side format should be a number', () => {
    expect (() => polygonAngleSum('xyz'))
     .toThrow(TypeError)
  }) 
})