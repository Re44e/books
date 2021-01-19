export interface ILendBooksDTO {
  book_id: string
  logged_user_id: string
  to_user: string
}

export interface IReturnBooksDTO {
  logged_user_id: string
  book_id: string
}