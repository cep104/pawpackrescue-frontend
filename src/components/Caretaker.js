import React from 'react'
import DogContainer from '../containers/DogContainer'
import CaretakerEdit from './CaretakerEdit'
    
const Caretaker = (props) => {
    if (props.caretakers.length === 0 ) return null;

    const editFoster = (e) => {
        let form = document.getElementById('editform')
        form.style.display = "block";
        console.log(form)
    }
    
    const hideFoster = (e) => {
        let form = document.getElementById('editform')
        form.style.display = "none";
    }

  

   
    // let caretaker = props.caretakers[props.match.params.id - 1]
    let caretaker = props.caretakers.filter(caretaker => caretaker.id == props.match.params.id)[0]
    if (caretaker.img_src == ''){ caretaker.img_src = 'https://www.clipartkey.com/mpngs/m/207-2074740_pawprint-svg-bear-transparent-dog-paw-print.png'}
    return (
        <div id='caretakerinfo'>
            <div id='careimg'>
                <img src={caretaker.img_src} alt={caretaker.name}/>
            </div>
            <div id='careinfoinfo'>
                <h1>{caretaker ? caretaker.name : null }</h1>
                <p>Location: {caretaker ? caretaker.location : null }</p>
                <p>Living Situation: {caretaker ? caretaker.setting : null }</p>
                <button onClick={editFoster}>Edit Foster</button>
                <div id='editform'>
                    <CaretakerEdit caretaker={caretaker} hideFoster={hideFoster}/>
                </div><br/>
            </div> 
            <DogContainer caretaker={caretaker} hideFoster={ hideFoster }/>
        </div>
    )
}
export default Caretaker


















