export const addressThatIUse = () => {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : process.env.NODE_ENV === 'production'

      ? 'https://teloresumoasinomas.herokuapp.com'
      : null
}
