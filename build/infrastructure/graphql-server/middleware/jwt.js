// import { sign, verify } from "jsonwebtoken";
// import { NextFunction ,Response,Request} from "express";
// import { jwtPayload } from "../config/jwtPayload";
// export class JwtToken {
//   private static privateKey = process.env.JWT_TOKEN_KEY;
//   private static refreshTokenKey = process.env.REFRESH_TOKEN_KEY;
//    static async signAccessToken(userId: string):Promise<string> {
//     return  await new Promise((resolve, reject) => {
//       const payload=jwtPayload(userId)
//       sign(payload, JwtToken.privateKey,(err, token) => {
//         if (err) throw new Error('Failed to generate signAccessToken !');
//         resolve(token);
//       });
//     });
//   }
//    static  signRefreshToken(userId: string):Promise<string>  {
//     return  new Promise((resolve, reject) => {
//       const payload=jwtPayload(userId)
//       sign(payload, JwtToken.refreshTokenKey, (err, token) => {
//         if (err) throw new Error('Failed to generate signRefreshToken !');
//         resolve(token);
//       });
//     });
//   }
//   //to change
//   static  verifyRefreshToken(refreshToken: string) {
//     if (typeof refreshToken !== "undefined") {
//         return new Promise((resolve,reject)=>{
//              verify(refreshToken, JwtToken.refreshTokenKey, (error, payload) => {
//                 if (error) throw new Error('Unauthorized')
//                  return resolve(payload)
//             });
//         })
//     } 
// }
//   static async  verifyGraphqlToken(token: string) {
//     try {
//       const accessToken = token.split(" ")[1];
//      await  verify(accessToken, JwtToken.privateKey, (error, payload) => {
//         if (error){
//           throw new Error('Unauthorized')
//         } 
//       });
//     } catch (error) {
//       throw new Error("Unauthorize");
//     }
//   }
//    static async VerifyExpressToken( req: Request, res: Response, next: NextFunction ) {
//     try {
//       const token = req.headers?.authorization
//       const accessToken = token.split(" ")[1];
//       await  verify(accessToken, JwtToken.privateKey, (error, payload) => {
//         if (error){
//           throw new Error('Unauthorize')
//         }else{
//           next()
//         }
//       });
//     } catch (error: any) {
//       res.status(401).send({ message: "Unauthorize" });
//     }
//   }
// }
//# sourceMappingURL=jwt.js.map