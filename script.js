let obj = {
    name: 'awdawd',
    age: 123,
    options: {
        image: 'awd',
        friends: [
            {
                name: 'friend1',
                age: 123,
            },
            {
                name: 'friend2',
                age: 142,
            }
        ]
    }
}

function deepClone(data) {
    let result;

    if (Array.isArray(data)) {
        result = []
        for (let key in data) {
            result.push(deepClone(data[key]))
        }

    } else if (typeof data === 'object') {
        result = {}
        for (let key in data) {
            result[key] = deepClone(data[key])
        }

    } else {
        result = data
    }
    return result
}

const clone = deepClone(obj)


console.log(clone)