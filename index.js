require('dotenv').load()


module.exports = ({ override, delimiter } = {
  override: true,
  delimiter: ',',
}) => {
  const update = (value) => {
    let match
    const delim = delimiter.charAt(0)

    if (typeof value === 'string') {
      match = value.trim().match(/^`(.+)`$|^(.+)\*$/)

      if (match) {
        return match[1]
      }

      match = value.trim()
        .match(new RegExp(`^(?:[^${delim}]+\${delim})*[^${delim}]+$`))

      if (match) {
        return value.split(delim)
      }
    }

    return value
  }

  return Object.keys(process.env).reduce((acc, key) => {
    const updated = update(process.env[key])

    if (override) {
      process.env[key] = updated
    }

    acc[key] = updated

    return acc
  }, {})
}
