const planList = document.querySelector('.plan-list');

//Making the objekt
function renderPlan(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;

    li.appendChild(name);
    li.appendChild(city);

    cafeList.appendChild(li);
}

// getting data
collection('testScores').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderPlan(doc);
    });
});

var tasksTable = document.getElementById('tasksTable');
show();

function show() {
    for (let i = 0; i < tasks.length; i++) {
        createHtmlRow(i);
    }
    tasksTable.innerHTML = html;
}
