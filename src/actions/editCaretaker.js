export const editCaretaker = (data) => {
    // debugger;
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/caretakers/${data.id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          method: 'PATCH',
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(caretaker => {
          if (caretaker.error){
            alert('all fields must be filled out')
          }else{dispatch({type: 'EDIT_CARETAKER', payload: caretaker})
        }
      }
      )
      }
    }
    
   