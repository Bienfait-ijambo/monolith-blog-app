"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtPayload = void 0;
function jwtPayload(userId) {
    var payload = {
        iss: process.env.CLIENT_URL,
        sub: userId,
        aud: userId,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 + 60 * 60,
        iat: Math.floor(Date.now() / 1000), // Issued at: current time
        // role: 'admin',
        //  permissions: ['read', 'write'],
        //   customField: 'some value',
    };
    return payload;
}
exports.jwtPayload = jwtPayload;
//# sourceMappingURL=jwtPayload.js.map