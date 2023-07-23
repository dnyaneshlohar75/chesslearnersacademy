// import { request } from "http";
// import { NextResponse } from "next/server";
// export const middleware = (request:any) => {
//     const origin = request.headers.get('origin');
//     console.log(origin);

//     const response = NextResponse.next();
//     response.headers.set('Access-Control-Allow-Origin', '*');
//     response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     response.headers.set('Access-Control-Max-Age', '86400');

//     console.log('Middleware!');
//     console.log(request.method);
//     console.log(request.url);
// }

// export const config = {
//     matcher: '/api/:path=*',
// };

import { NextRequest, NextResponse } from 'next/server'
 
export function middleware(request) {

    const origin = request.headers.get('origin');
    const response = NextResponse.next();
    
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Max-Age', '86400');
    
    console.log('Middleware Hit!');
    return response;
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:path*",
}