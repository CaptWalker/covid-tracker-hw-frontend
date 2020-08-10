import { Address } from './address';

export interface PatientRegistrationDetail{
    firstName: string;
    lastName: string;
    password: string;
    dateOfBirth: Date;
    dateOfRegistration: Date;
    email: string;
    mobileNo: number;
    aadhar: string;
    address: Address;
}