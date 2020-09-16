
// function createHtmlRow(i) {
//     let checkUserId;
//     const testUserScores = testUserScore[i];
//     const weekPlans = weekPlan[i];
//     if (testUserScores.userId != checkUserId){return};
//     let userScore = testUserScores.score;
//     let lowerTestScore = '2';
//     let upperTestScore = '4';
//     //const checkedHtml = task.isDone ? 'checked="checked"' : '';
//         return `<tr>
//                         <td>${task.person}</td>
//                         <td>${task.description}</td>
//                         <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
//                         <td>${task.dateDone}</td>
//                         <td>
//                             <button onclick="deleteTask(${i})">Slett</button>
//                         </td>
//                     </tr>
//                     `;
// }


function checkUser(i){
    const testUserScores = testUserScore[i];
    testId = !(testUserScores.userID != checkUserId);
}