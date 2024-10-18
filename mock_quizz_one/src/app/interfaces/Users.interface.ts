export interface User {
   Id: number,
   Username: string,
   Email: string,
   RegistrationTime: Date,
   LastLogin: Date,
   status: 'Confirmed' | 'Blocked'
}