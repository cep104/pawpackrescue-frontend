export const createCaretakers = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/caretakers", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((newCaretaker) =>
        dispatch({
          type: "ADD_CARETAKER",
          payload: newCaretaker,
        })
      );
  };
};
export const editCaretaker = (data) => {
  // debugger;
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/caretakers/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((caretaker) => {
        if (caretaker.error) {
          alert("all fields must be filled out");
        } else {
          dispatch({ type: "EDIT_CARETAKER", payload: caretaker });
        }
      });
  };
};
export function fetchCaretakers() {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/caretakers")
      .then((res) => res.json())
      .then((caretakers) =>
        dispatch({
          type: "FETCH_CARETAKERS",
          payload: caretakers,
        })
      );
  };
}
// instead of connect automaticly dispatching an action we
// use thunk to we are aloud to pass in dispatch as an argument.
// we then want to dispatch an action to our reducer which is responsible to updating state based on the action that comes in through dispatch