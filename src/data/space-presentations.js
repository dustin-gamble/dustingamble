// Presentation metadata and optional demonstrations. The source lesson content stays intact.
export const presentationThemes = {
 'why-we-go': {title:'Why We Go', chapter:'01', color:'#9af1cf', hero:'world', tagline:'Big questions. Real benefits.', demo:'satellites', demoTitle:'Space is already part of your day.', question:'Which service would you notice first if it disappeared?'},
 'how-rockets-work': {title:'How Rockets Work', chapter:'02', color:'#ffb28b', hero:'rocket', tagline:'Push something back. Go forward.', demo:'forces', demoTitle:'The rocket pushes gas. The gas pushes back.', question:'Do these forces act on the same object—or on different objects?'},
 'missions': {title:'Missions & Bases', chapter:'03', color:'#80e1f3', hero:'world', tagline:'Choose a destination. Design the mission.'},
 'build-night': {title:'Build Night', chapter:'04', color:'#bda3ff', hero:'assembly', tagline:'Every part has a job.', demo:'assembly', demoTitle:'From a pile of parts to a flying system.', question:'Point to the part that stabilizes the rocket. Then find its recovery system.'},
 'mission-control': {title:'Mission Control', chapter:'05', color:'#a4efb3', hero:'radar', tagline:'One crew. One clear decision.', demo:'readiness', demoTitle:'One no-go stops the countdown.', question:'Who can call a hold? What has to happen before you continue?'},
 'debrief': {title:'What the Data Said', chapter:'06', color:'#f3c27d', hero:'data', tagline:'A surprise is the start of an explanation.', demo:'results', demoTitle:'Your prediction meets the real flight.', question:'If everyone flew lower than predicted, what would you investigate?'},
 'rocket-math': {title:'Rocket Math', chapter:'07', color:'#93dbf4', hero:'rocket', tagline:'Make the numbers move.'},
};
export function presentationDeck(deck) {
 const theme=presentationThemes[deck.id];
 const slides=[...deck.slides];
 if(theme?.demo)slides.splice(1,0,{type:'experiment',experiment:theme.demo,heading:theme.demoTitle,question:theme.question,notes:theme.demo==='readiness'?'This is a classroom simulation only. Actual range procedures, safety distances and authority are covered in the lesson.':theme.demo==='results'?'These are illustrative numbers. Replace them with a Scout’s prediction and measured result using the sliders.':'Let the automatic demonstration run once, then ask a Scout to make a prediction and take over the controls.'});
 return {...deck,slides};
}
