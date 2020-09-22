const functions = require('./functions')


// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database initialized...')
// const closeDatabase = () => console.log('Database closed...')

nameCheck = () => console.log('Checking Name...')


describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff'
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen'
    expect(user).toBe('Karen');
  });
});



// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(NaN);
});



// CHECK FOR TRUTHY AND FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false


// toBeNull
test('should be null', () => {
  expect(functions.isNull()).toBeNull();
})


// toBeFalsy
test('should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
})


// toBe does not work on an object you need toEqual
test('User should be Brad Traversy object', () => {
  expect (functions.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy'
  })
})

// Less than or greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600)
});

// Regex, the i is not specific to this example but a general input
test("Ther is no I in team", () => {
  expect('team').not.toMatch(/I/i)
});


test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// Working with async data
// assertions verifies a certain number of assertions are called
// make sure a callback is called
//

test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham');
    });
});

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham');
});
