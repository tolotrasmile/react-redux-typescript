export const findBooks = (name: string, page: number) => {
  return { type: 'FIND_BOOKS', payload: { name, page } }
}

export const findBookById = (id: string) => {
  return { type: 'FIND_BOOK_BY_ID', payload: { id } }
}
