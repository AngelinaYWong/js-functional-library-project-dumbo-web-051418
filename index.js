fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (const element of collection) {
          callback(element)
        }
      } else if (typeof collection === "object") {
        for (const key in collection) {
          callback(collection[key])
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      const array = []
      if (Array.isArray(collection)) {
        for (const element of collection) {
          array.push(callback(element))
        }
      } else if (typeof collection === "object") {
        for (const key in collection) {
          array.push(callback(collection[key]))
        }
      }
      return array
    },

    reduce: function(collection, callback, acc) {
      let sum = 0
      if (!!acc) {
        for (const element of collection) {
        sum+=callback(0, element, collection)
        }
        return sum + acc
      } else {
        for (const element of collection) {
          sum+=callback(0, element, collection)
        }
        return sum
      }
    },

    find: function(collection, condition) {
      for (const element of collection) {
        if (condition(element) === true) {
          return element
        }
      }
    },

    filter: function(collection, condition) {
      const array = []
      for (const element of collection) {
        if (condition(element) === true) {
          array.push(element)
        }
      }
      return array
    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function(array, numOfElements) {
      if (!!numOfElements) {
        return array.slice(0, numOfElements)
      } else {
        return array[0]
      }
    },

    last: function(array, numOfElements) {
      if (!!numOfElements) {
        return array.slice(-numOfElements)
      } else {
        return array.slice(-1)[0]
      }
    },

    compact: function(array) {
      const truthyArray = []
      for (const element of array) {
        if (!!element) {
          truthyArray.push(element)
        }
      }
      return truthyArray
    },

    sortBy: function(array, condition) {
      const anythingArray = []
      const result = array.slice().sort((a,b) => {
        return condition(a) - condition(b)
      })
        result.map((element)=> {
          anythingArray.push(condition(element))
          // console.log(element)
        })
      // console.log(result)
      return anythingArray
    },

  }
})()

fi.libraryMethod()
