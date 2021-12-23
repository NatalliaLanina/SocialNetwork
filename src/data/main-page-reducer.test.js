import mainPageReducer, {addPost, deletePost} from "./main-page-reducer";

let state = {
  postsData: [
    {id: 1, message: 'Hi, everybody!', likes: 13},
    {id: 2, message: 'how r u', likes: 5},
    {id: 3, message: 'how', likes: 0},
  ],
}

// TEST 1
test('new post should be added', () => {
  // start data
  let action = addPost('it is just a test of adding posts');

  // action
  let newState = mainPageReducer(state, action);

  // expectation
  expect (newState.postsData.length).toBe(4);
});

// TEST 2
test('new post text', () => {
  // start data
  let action = addPost('it is just a test of adding posts');

  // action
  let newState = mainPageReducer(state, action);

  // expectation
  expect(newState.postsData[3].message).toBe('it is just a test of adding posts');
});

// TEST 3
test('one message should be deleted', () => {
  // start data
  let action = deletePost(1);

  // action
  let newState = mainPageReducer(state, action);

  // expectation
  expect(newState.postsData.length).toBe(2);
});