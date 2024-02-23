const sentences = [{
        html: '<p id="in-focus">"I\'m..."</p>'
    },
    {
        html: '!!end'
    },
    {
        html: '<p id="in-focus">"My name is..."</p>'
    },
    {
        html: '!!end'
    },
    {
        html: '<p id="left-aligned">"My name...is 9S."</p>'
    },
    {
        html: '<p id="left-aligned">A newly manufactured Scanner model.</p>'
    },
    {
        html: '<p id="left-aligned">"January 30th, 11942."</p>'
    },
    {
        html: '<p id="left-aligned">"Rolled out at 4:25 AM, Bunker time."</p>'
    },
    {
        html: '<p id="left-aligned">"I will fight for humanity with all my strength."</p>'
    },
    {
        html: '<p id="left-aligned">"The pleasure is mine, Commander."</p>'
    },
    {
        html: '!!end'
    },
    {
        html: '<p id="left-aligned">I lie collapsed in a space of blinding white.</p>'
    },
    {
        html: '<p id="left-aligned">The pain is...gone.</p>'
    },
    {
        html: '<p id="left-aligned">The light envelops me. It’s so <em>warm.</em></p>'
    },
    {
        html: '!!end'
    },
    {
        html: '<p id="left-aligned">I was anxious.</p>'
    },
    {
        html: '<p id="left-aligned">A soldier from the moment I was born, thrown into the world alone.</p>'
    },
    {
        html: '<p id="left-aligned">Nothing to rely on.</p>'
    },
    {
        html: '<p id="left-aligned">No God to believe in.</p>'
    },
    {
        text: ''
    },
    {
        html: '<p id="left-aligned">I was alone.</p>'
    },
    {
        html: '<p id="left-aligned">Tasked with infiltrating enemy territory to gather intelligence.</p>'
    },
    {
        html: '<p id="left-aligned">In the fog.</p>'
    },
    {
        html: '<p id="left-aligned">In the flames.</p>'
    },
    {
        html: '<p id="left-aligned">Alone.</p>'
    },
    {
        html: '!!end'
    },
    {
        html: '<p id="left-aligned">“My name’s 9S. I’m here to provide support.”</p>'
    },
    {
        text: ''
    },
    {
        html: '<p id="left-aligned">2B came off as being rather aloof. Cold, even.</p>'
    },
    {
        html: '<p id="left-aligned">She must have wanted to distance herself from me.</p>'
    },
    {
        html: '<p id="left-aligned">I guess she didn’t want to be attached to someone she had to kill again and again and again.</p>'
    },
    {
        text: ''
    },
    {
        html: '<p id="left-aligned">But... I...</p>'
    },
    {
        html: '!!end'
    },
    {
        html: '<p id="left-aligned">“Scanners like me mostly work alone. Scouting out enemy lines and all that?”</p>'
    },
    {
        html: '<p id="left-aligned">“I don’t usually get a partner. It’s kind of fun!”</p>'
    },
    {
        text: ''
    },
    {
        html: '<p id="left-aligned">I was so happy to be with someone.</p>'
    },
    {
        text: ''
    },
    {
        html: '<p id="left-aligned">It was like I had a family.</p>'
    },
    {
        html: '!!end'
    },
    {
        html: '<p id="left-aligned">My damage worsens.</p>'
    },
    {
        html: '<p id="left-aligned">I start to lose my memories.</p>'
    },
    {
        html: '<p id="left-aligned">The space fills up with pure white light.</p>'
    },
    {
        html: '<p id="left-aligned">It\'s like being buried in snow.</p>'
    },
    {
        text: ''
    },
    {
        html: '<p id="left-aligned">It\'s a little bit cold.</p>'
    },
    {
        html: '<p id="left-aligned">It\'s a little bit frightening.</p>'
    },
    {
        html: '<p id="left-aligned">Will my soul...disappear?.</p>'
    },
    {
        html: '!!end'
    },
    {
        html: '<p id="left-aligned">A dark fog clouds my vision.</p>'
    },
    {
        html: '<p id="left-aligned">As it ebbs and flows in its slow, dreamlike way, it gradually takes human shape.</p>'
    },
    {
        text: ''
    },
    {
        html: '<p id="left-aligned">It’s the red girl.</p>'
    },
    {
        text: ''
    },
    {
        html: '<p id="left-aligned">She slowly begins to speak.</p>'
    },
    {
        html: '!!end'
    },
    {
        html: '<p id="left-aligned">This tower is a colossal cannon built to destroy the human server.</p>'
    },
    {
        html: '<p id="left-aligned">Destroy the server...and rob the androids of their very foundation.</p>'
    },
    {
        html: '<p id="left-aligned">That was the plan devised by those girls.</p>'
    },
    {
        text: ''
    },
    {
        html: '<p id="left-aligned">But they changed their mind.</p>'
    },
    {
        html: '<p id="left-aligned">They saw us androids. They saw Adam. And Eve.</p>'
    },
    {
        html: '<p id="left-aligned">They saw how we lived, considered the meaning of existence,</p>'
    },
    {
        html: '<p id="left-aligned">and came to a different conclusion.</p>'
    },
    {
        html: '!!end'
    },
    {
        html: '<p id="left-aligned">This tower doesn’t fire artillery. It fires an <em>ark</em>.</p>'
    },
    {
        html: '<p id="left-aligned">An ark containing memories of the foolish machine lifeforms.</p>'
    },
    {
        html: '<p id="left-aligned">An ark that sends those memories to a new world.</p>'
    },
    {
        text: ''
    },
    {
        html: '<p id="left-aligned">Perhaps they’ll never reach that world.</p>'
    },
    {
        html: '<p id="left-aligned">Perhaps they’ll simply wander an empty sky for eternity.</p>'
    },
    {
        html: '<p id="left-aligned">It’s all the same to the girls. For them, time is without end.</p>'
    },
    {
        html: '!!end'
    },
    {
        html: '<p id="left-aligned">Adam and Eve are inside the ark.</p>'
    },
    {
        html: '<p id="left-aligned">Eve is asleep.</p>'
    },
    {
        html: '<p id="left-aligned">Adam holds him in a gentle embrace. He seems to be smiling at me.</p>'
    },
    {
        text: ''
    },
    {
        html: '<p id="left-aligned">I try to look up at him, but my body refuses to move.</p>'
    },
    {
        html: '<p id="left-aligned">Looks like the damage has spread to my motor functions as well.</p>'
    },
    {
        html: '!!end'
    },
    {
        html: '<p id="left-aligned">“Will you come with us?” asks Adam.</p>'
    },
    {
        html: '<p id="left-aligned">The question was completely free of malice.</p>'
    },
    {
        html: '<p id="left-aligned">It seemed I no longer had a reason to hate machines.</p>'
    },
    {
        html: '<p id="left-aligned">Maybe I never had a reason in the first place.</p>'
    },
    {
        text: ''
    },
    {
        html: '<p id="left-aligned">What have I been fighting for?</p>'
    },
    {
        html: '<p id="left-aligned">Who have I been <em>living</em> for?</p>'
    },
    {
        html: ''
    },
    {
        html: '<p id="left-aligned">I don’t know anymore.</p>'
    },
    {
        html: '!!end'
    },
    {
        html: '<p id="left-aligned">I try to speak my mind, but the words don\' come out right.</p>'
    },
    {
        html: '<p id="left-aligned">My thought routines are losing cohesion.</p>'
    },
    {
        html: '<p id="left-aligned">I don\'t... I can\'t remember my name.</p>'
    },
    {
        html: ''
    },
    {
        html: '<p id="left-aligned">\"I\'m...\"</p>'
    },
    {
        html: '!!end'
    },
    {
        html: '<p id="left-aligned">Mustering all my strength, I force out the words...</p>'
    },
];

export default sentences;