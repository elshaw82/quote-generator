var quotes = [
    '\"May the wings of liberty never lose a feather.\"',
    '\"Terrific, a six-demon bag. Sensational. What\'s in it, Egg?\"',
    '\"Okay. You people sit tight, hold the fort and keep the home fires burning. And if we\'re not back by dawn... call the president.\"',
    '\"I was born ready.\"',
    '\"I\'m a reasonable guy. But, I\'ve just experienced some very unreasonable things.\"',
    '\"Jack Burton just looks that big ol\' storm right square in the eye and he says, \"Give me your best shot, pal. I can take it\".',
    '\"I know, there\'s a problem with your face.\"',
    '\"Like I told my last wife, I says, \"Honey, I never drive faster than I can see. Besides that, it\'s all in the reflexes\".',
    '\"Is it getting hot in here, or is it just me?\"',
    '\"Sooner or later I rub everybody the wrong way.\"',
    '\"What the hell does that mean? huh? China is here, I don\'t even know what the hell that means, all I know is this Lo Pan character comes out of thin air in the middle of a goddamn alley while his buddies are flying around on wires cutting everybody to shreds, and he just stands there waiting for me to drive my truck straight through him, with light coming out of his mouth!/"',
    '\"Which Lo Pan? Little old basket case on wheels or the ten foot tall roadblock?\"',
    '\"Are you crazy… Is that your problem?\"',
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('displayQuote').innerHTML = quotes[randomNumber]
}


