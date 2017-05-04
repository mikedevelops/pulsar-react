export const database = {
    messages: [
        {
            text: 'This is a message that has come from our data source, this could be a database, service API or anything really, the data is simply fed to our timeline component and rendered using our JSX.',
            author: 'MS',
            avatar: 'red'
        },
        {
            text: 'It is fast, but probably not as fast as it seems, you are just perceiving it to be fast because we rendered a static page with no data as soon as you requested it, then hydrated the timeline with data',
            author: 'MS',
            avatar: 'red'
        },
        {
            text: 'React is awesome, I can\'t believe how fast everything loads!',
            author: 'JJ',
            avatar: 'teal'
        },
        {
            text: 'You certainly could, but you probably would have spent a load of time learning framework syntax and quirks, React is just javascript with a sprinkling of the HTML-like JSX markup, if you know javascript you can start writing React straight away',
            author: 'MS',
            avatar: 'red'
        },
        {
            text: 'Could this not just be done with Angular or Ember?',
            author: 'JJ',
            avatar: 'teal'
        },
        {
            text: 'We are nearlly done, hang in there',
            author: 'MS',
            avatar: 'red'
        },
        {
            text: 'I can not wait for this talk to be over, I just want to got home!',
            author: 'JJ',
            avatar: 'teal'
        }
    ]
}

export function fakeApiCall (path, timeout = 5000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (path) {
                case '/messages':
                    resolve(database.messages)
                    break
                default:
                    reject('didn\'t recognise that fake API path')
            }
        }, timeout)
    })
}
