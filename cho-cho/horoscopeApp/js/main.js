let peeps = document.getElementsByClassName('peeps')

/*FUNCTION*/

const generate = () => {
    let dob = document.querySelector('#dob').value;
    let dobArray = dob.split('-');
    for (let peep of peeps) {
        peep.classList.add('hidden');
    }
    switch(true) {
        case dobArray[1]=='01' && dobArray[2]<= '19' || dobArray[1]=='12' && dobArray[2] >='22':
            return dwight.classList.remove('hidden');
        case dobArray[1]=='01' && dobArray[2]>= '20' || dobArray[1]=='02' && dobArray[2] <='18':
            return pam.classList.remove('hidden');
        case dobArray[1]=='02' && dobArray[2]>= '19' || dobArray[1]=='03' && dobArray[2] <='20':
            return kelly.classList.remove('hidden');
        case dobArray[1]=='03' && dobArray[2]>= '21' || dobArray[1]=='04' && dobArray[2] <='19':
            return meredith.classList.remove('hidden');
        case dobArray[1]=='04' && dobArray[2]>= '20' || dobArray[1]=='05' && dobArray[2] <='20':
            return kevin.classList.remove('hidden');
        case dobArray[1]=='05' && dobArray[2]>= '21' || dobArray[1]=='06' && dobArray[2] <='20':
            return ryan.classList.remove('hidden');
        case dobArray[1]=='06' && dobArray[2]>= '21' || dobArray[1]=='07' && dobArray[2] <='22':
            return stanley.classList.remove('hidden');
        case dobArray[1]=='07' && dobArray[2]>= '23' || dobArray[1]=='08' && dobArray[2] <='22':
            return jim.classList.remove('hidden');
        case dobArray[1]=='08' && dobArray[2]>= '23' || dobArray[1]=='09' && dobArray[2] <='22':
            return phyllis.classList.remove('hidden');
        case dobArray[1]=='09' && dobArray[2]>= '23' || dobArray[1]=='10' && dobArray[2] <='22':
            return toby.classList.remove('hidden');
        case dobArray[1]=='10' && dobArray[2]>= '23' || dobArray[1]=='11' && dobArray[2] <='21':
            return angela.classList.remove('hidden');
        case dobArray[1]=='11' && dobArray[2]>= '22' || dobArray[1]=='12' && dobArray[2] <='21':
            return michael.classList.remove('hidden');
        default:
            console.log('I DECLARE..BANKRUPTCY!!!') 
    }
}
document.querySelector('#generate').addEventListener('click', generate)