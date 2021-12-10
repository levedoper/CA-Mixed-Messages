const subject = ['bear', 'wasp', 'cricket', 'dog', 'cat', 'owl', 'human', 'robot', 'alien', 'martian', 'crocodile', 't-rex', 'beaver'];
const adjectives = ['chubby', 'fat', 'skinny', 'funny', 'scaredy', 'retired', 'lonely', 'silly', 'flying', 'spatial', 'sexy'];
const verb = ['dancing in', 'telling a bad joke in', 'flying over', 'getting drunk in', 'configuring a wifi modem in', 'getting high in', 'designing the smartphone of the future in'];
const place =['the pub', 'a McDonalds', 'the himalayas', 'the oven', 'the dam', 'the forest', 'the desert', 'an office', 'a sewer']
console.log(`The ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${subject[Math.floor(Math.random() * subject.length)]} was ${verb[Math.floor(Math.random() * verb.length)]} ${place[Math.floor(Math.random() * place.length)]}`)

