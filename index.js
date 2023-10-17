// Add your code here

const main = () => {
const configurationObject = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: /* Your data goes here */
        JSON.stringify({
            "dogName": "BennyHana",
            "dogBreed": "King of Hana",
        })
  };

fetch('http://localhost:3000/dogs', configurationObject)
.then((res) => res.json())
.then(data => console.log(data))
.catch(error => console.log(error.message))
}

// main() 

function submitData (userName, userEmail){
    
    const configurationObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify({name: userName, email: userEmail})

    }
    
    return fetch('http://localhost:3000/users', configurationObj)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const userID = data.id
            const domAdd = document.createElement('h1')
            domAdd.innerHTML = userID
            document.body.appendChild(domAdd)
        })
        .catch(error => {
            console.log(error.message)
            const errmsg = document.createElement('h1')
            errmsg.innerHTML = error.message
            document.body.appendChild(errmsg)
        })
}

submitData("Danny", "DannyTrades@wtftrades.com")