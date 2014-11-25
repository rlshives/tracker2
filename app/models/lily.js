import DS from 'ember-data';

var Lily = DS.Model.extend({
	text: DS.attr('string'),
	context: DS.attr('string'),
	choices: DS.attr()
});

Lily.reopenClass ({
	FIXTURES: [
		{ id: 1, text: "Did you have any of the following symptoms today as a result of your MS? Please indicate Yes by checking the box.", context: 0,
		choices: [
		{ id: 1, text: 'Loss of Co-ordination or Dexterity', value: 'locd', checked: false },
		{ id: 2, text: 'Weakness or Heavyness in Your Arms', value: 'whArms', checked: false },
		{ id: 3, text: 'Weakness or Heavyness in Your Legs', value: 'whLegs', checked: false },
		{ id: 4, text: 'Unsteadyness or Loss of Balance', value: 'ulBal', checked: false },
		{ id: 5, text: 'Altered or loss of sensation (eg numbness, tingling, pins and needles)', value: 'numbTing', checked: false },
		{ id: 6, text: 'Problems with your bladder or bowel', value: 'bladBowel', checked: false },
		{ id: 7, text: 'Difficulties thinking clearly, or forgetting things', value: 'cogForget', checked: false },
		{ id: 8, text: 'Fatigue or lack of energy', value: 'Fatigue', checked: false },
		{ id: 9, text: 'Choking or coughing when eating or drinking', value: 'chokeCough', checked: false },
		{ id: 10, text: 'Muscle stiffness or spasms', value: 'stiffSpasm', checked: false },
		{ id: 11, text: 'Blurred, double or shaky vision', value: 'vision', checked: false },
		{ id: 12, text: 'Pain', value: 'pain', checked: false },
		{ id: 13, text: 'Feeling sad or down', value: 'sad', checked: false },
		{ id: 14, text: 'Feeling frustrated', value: 'frustrated', checked: false }
		] }
	]
});

export default Lily;