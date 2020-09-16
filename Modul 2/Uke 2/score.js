const output = document.querySelector('#output');
const addResult = document.querySelector('#add-result');

function renderScore(doc){
    let li = document.createElement('li');
    let gender = document.createElement('li');
    let scoreValue = document.createElement('li');

    li.setAttribute('data-id', doc.id);
    gender.textContent = doc.data().gender;
    scoreValue.textContent = doc.data().scoreValue;

    li.appendChild(gender);
    li.appendChild(scoreValue);

    output.appendChild(li);
}

//Henter data

db.collection('score').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderScore(doc)
    })
})

// Leverer data
addResult.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('score').add({
        gender: addResult.gender.value,
        scoreValue: addResult.scoreValue.value
    });
    addResult.gender.value ='';
    addResult.scoreValue.value = '';
})