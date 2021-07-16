export const formatName = ({ displayName, givenName, familyName }) => {
  if (givenName && familyName) return `${givenName} ${familyName}`
  if (givenName) return givenName
  if (displayName) return displayName
  return
}
