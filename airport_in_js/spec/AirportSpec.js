describe('Airport', () => {

  // INSTRUCTIONS
  // 1. Uncomment the first test.
  // 2. Make it pass. Don't edit any of the test code. Ever! Only takeaway.rb
  // 3. When it passes, do a git commit.
  // 4. Uncomment the next test, make it pass, commit, etc.
  // 
  // 
  //  Some of them will ask you to talk to your coach after you've done them, but
  //  also feel free to reach out whenever you get stuck. It should be the same
  //  coach every time, the one who gave you this exercise. This is because they
  //  will be learning what your misconceptions are and helping you correct them.
  // 
  //  It's important that you understand what's going on and the code you're
  //  writing. If you're just trying out combinations, you should take a break.

  // In this exercise you'll do a version of the airport challenge.
  // You'll build one class, the Airport class
  // The first two tests don't care about weather
  // The third and fourth tests do
  // Don't be tempted to implement the weather before the third test!
  // You'll check the weather but it won't change
  // It just needs to be 'stormy' or 'sunny'

  // THE FIRST TEST

  // describe('land', () => {
  //   it('adds a plane to the hanger', () => {
  //     let airport = new Airport()
  //     let plane = {number: 'BA123'}

  //     airport.land(plane)

  //     expect(airport.hangar).toEqual([plane])
  //   })
  // })

  // INSTRUCTION: Do a commit before uncommenting the next test.

  // THE SECOND TEST

  // describe('take_off', () => {
  //   it('removes a specific plane from the hangar', () => {
  //     let airport = new Airport()
  //     let plane_one = {number: 'BA123'}
  //     let plane_two = {number: 'AA456'}
  //     airport.land(plane_one)
  //     airport.land(plane_two)

  //     airport.take_off('BA123')

  //     expect(airport.hangar).toEqual([plane_two])
  //   })
  // })

  // INSTRUCTION: Do a commit before uncommenting the next test.

  // THE THIRD TEST

  describe('weather', () => {
    // it('returns stormy, when the weather is stormy', () => {
    //   let weather = {condition: 'stormy'}
    //   let airport = new Airport(weather)
    //   expect(airport.weather).toEqual('stormy')
    // })

  // INSTRUCTION: Do a commit before uncommenting the next test.

  // THE FOURTH TEST

    // it('returns sunny, when the weather is sunny', () => {
    //   let weather = {condition: 'sunny'}
    //   let airport = new Airport()
    //   expect(airport.weather).toEqual('sunny')
    // })
  })

  
  describe('when the weather is stormy', () => {
    // INSTRUCTION: Do a commit before uncommenting the next test.
    // INSTRUCTION: Talk to your coach before moving on.

    // THE FOURTH TEST

    // describe('land', () => {
    //   it('does not add a plane to the hangar', () => {
    //     let local_weather = {condition: 'stormy'}
    //     let airport = new Airport(local_weather)
    //     let plane = {number: 'BA123'}

    //     airport.land(plane)

    //     expect(airport.hangar).toEqual([])
    //   })
    // })

    // INSTRUCTION: Do a commit before uncommenting the next test.

    // THE FIFTH TEST

    // describe('takeoff', () => {
    //   it('does not remove a plane from the hangar', () => {
    //     let local_weather = {condition: 'stormy'}
    //     let airport = new Airport(local_weather)
    //     let plane = {number: 'BA123'}
    //      // we can't use land here (but you can try it if you like) so...
    //     airport.hangar.push(plane)

    //     airport.take_off('BA123')

    //     expect(airport.hangar).toEqual([plane])
    //   })
    // })
  })
})

    // INSTRUCTION: Commit your work and get feedback from your coach.