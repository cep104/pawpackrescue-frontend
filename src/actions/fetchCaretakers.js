export function fetchCaretakers() {
    console.log('inside fetchAccounts')
    fetch('http://localhost:3000/api/v1/caretakers')
    .then(res => res.json())
    .then(data => console.log(data))
}
