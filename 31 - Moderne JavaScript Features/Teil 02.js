"use strict"

function t(strings, ...values) {
  console.log("strings: ", strings)
  console.log("values: ", values)

  const out = []
  for(const i in strings) {
    out.push(strings[i])
    if (values[i]) {
      if (values[i] instanceof Date) {
        const formatted = new Intl.DateTimeFormat('en-US').format(values[i])
        out.push(formatted)
      }
      else {
        out.push(values[i])
      }
    }
  }

  return out.join("")
}

const name = "Max"

console.log(t`Hello ${new Date()}!`)