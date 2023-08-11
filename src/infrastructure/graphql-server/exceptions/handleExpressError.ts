import { logErrorToFile } from "../winston/logErrorToFile";



export const handleExpressError = async (err, req, res, next) => {
  // Check if the error is an authentication-related error
  if (err) {
    // Handle the authentication error here
    if (err.name == "AuthorizationError") {
      const clientUrl = process.env.CLIENT_URL;
     return res.redirect(`${clientUrl}`);
    } else {

      await logErrorToFile(err,'express-error')

      return res.status(500).json({ error: err.name });
    }
  }

  next(err);
};



