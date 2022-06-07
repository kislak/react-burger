export const API_ERROR = "API_ERROR"

export const errorHandler =
  () =>
    (store) =>
      (next) =>
        (action) => {
          if (action.type === API_ERROR) {
            const error = action.payload

            console.log("api error:", error.message)
            return
          }
          return next(action)
        }
