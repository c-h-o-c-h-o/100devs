let peeps = []
let dwight = document.getElementById('dwight')
let jim = document.getElementById('jim')
let michael = document.getElementById('michael')
let angela = document.getElementById('angela')
let kevin = document.getElementById('kevin')
let meredith = document.getElementById('meredith')
let phyllis = document.getElementById('phyllis')
let stanley = document.getElementById('stanley')
let ryan = document.getElementById('ryan')
let kelly = document.getElementById('kelly')
let toby = document.getElementById('toby')
let pam = document.getElementById('pam')

peeps.push(dwight, jim, michael, angela, kevin, meredith, phyllis, stanley, ryan, kelly, toby, pam)


/*FUNCTION*/

const generate = () => {
    let dob = document.querySelector('#dob').value;
    let dobArray = dob.split('-');
    peeps.forEach(peep => peep.classList.add('hidden'));
    switch(true) {
        case dobArray[1]=='01' && dobArray[2]<= '19' || dobArray[1]=='12' && dobArray[2] >='22':
            dwight.classList.remove('hidden');
            break;
        case dobArray[1]=='01' && dobArray[2]>= '20' || dobArray[1]=='02' && dobArray[2] <='18':
            pam.classList.remove('hidden');
            break;
        case dobArray[1]=='02' && dobArray[2]>= '19' || dobArray[1]=='03' && dobArray[2] <='20':
            kelly.classList.remove('hidden');
            break;
        case dobArray[1]=='03' && dobArray[2]>= '21' || dobArray[1]=='04' && dobArray[2] <='19':
            meredith.classList.remove('hidden');
            break;
        case dobArray[1]=='04' && dobArray[2]>= '20' || dobArray[1]=='05' && dobArray[2] <='20':
            kevin.classList.remove('hidden');
            break;
        case dobArray[1]=='05' && dobArray[2]>= '21' || dobArray[1]=='06' && dobArray[2] <='20':
            ryan.classList.remove('hidden');
            break;
        case dobArray[1]=='06' && dobArray[2]>= '21' || dobArray[1]=='07' && dobArray[2] <='22':
            stanley.classList.remove('hidden');
            break;
        case dobArray[1]=='07' && dobArray[2]>= '23' || dobArray[1]=='08' && dobArray[2] <='22':
            jim.classList.remove('hidden');
            break;
        case dobArray[1]=='08' && dobArray[2]>= '23' || dobArray[1]=='09' && dobArray[2] <='22':
            toby.classList.remove('hidden');
            break;
        case dobArray[1]=='10' && dobArray[2]>= '23' || dobArray[1]=='11' && dobArray[2] <='21':
            angela.classList.remove('hidden');
            break;
        case dobArray[1]=='11' && dobArray[2]>= '22' || dobArray[1]=='12' && dobArray[2] <='21':
            michael.classList.remove('hidden');
            break;
        default:
            console.log('I DECLARE..BANKRUPTCY!!!') 
    }
}
document.querySelector('#generate').addEventListener('click', generate)