export const story = [
    {
        smileySays: 'hi! How are you?',
        options: {
            [-1]: 'None of your business!!!',
            0: 'I am good, thanks.',
        }
    },
    {
        smileySays: 'how much wood would a woodchuck chuck if a woodchuck could chuck wood?',
        options: {
            1: 'wow, that\'s a great question! :D',
            0: '4..?'
        }
    },
    {
        smileySays: 'which is better, Svelte or React?',
        options: {
            2: 'Svelte is the future!',
            [-1]: 'React 4evaaaaaaaa'
        }
    },
    {
        smileySays: 'do you want to hear the final question?',
        options: {
            [-1]: 'No..',
            1: 'Yeah!',
        }
    },
    {
        smileySays: 'do you love me?',
        options: {
            0: 'ummmmmm......',
            1: 'I sure do!',
            [-2]: 'I definitely just hate you.'
        }
    },
    {
        end: {
            nice: 'I think smiley likes you.',
            neutral: 'I can\'t tell if smiley likes you..',
            mean: 'Smiley does not like you..',
        },
        options: {
            'reset': 'Reset'
        }
    }
];