const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogs: [
    {
      id: 2,
      name: "Danil",
      ava: "https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg",
    },
    {
      id: 3,
      name: "Arut",
      ava: "https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg",
    },
    {
      id: 4,
      name: "Sasha",
      ava: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
    },
  ],
  messages: [{ id: 1, message: "Hello" }],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = { id: 6, message: action.newMessageText };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }

    default:
      return state;
  }
};

export let addMessageActionCreator = (newMessageText) => {
  return { type: ADD_MESSAGE, newMessageText };
};

export default dialogsReducer;
