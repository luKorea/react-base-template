export function setStorage(key: string, value: any) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.log(error)
  }
}

export function getStorage(key: string) {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key) ?? '')
  }
}

export function deleteStorage(key: string) {
  localStorage.removeItem(key)
}
