import { HttpInterceptorFn } from '@angular/common/http';



const baseUrl = 'https://upskilling-egypt.com:3007/api/';
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
  
const cloneReq = req.clone({
  url:baseUrl+req.url
});

return next(cloneReq);


};
