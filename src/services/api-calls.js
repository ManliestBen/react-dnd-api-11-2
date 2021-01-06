const baseUrl = "https://www.dnd5eapi.co"

export function getClassList() {
  return fetch(`${baseUrl}/api/classes`)
  .then(res => res.json())
}

export function getDetails(apiUrl) {
  return fetch(`${baseUrl}${apiUrl}`)
  .then(res => res.json())
}