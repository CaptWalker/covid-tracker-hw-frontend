import { PatientRegistrationDetail } from './patientRegistrationDetail';
import { PatientPhysicalAndMedicalDetails } from './patientPhysicalAndMedicalDetails';
import { DoctorDetail } from './doctorDetail';
import { CovidData } from './covidData';

export interface PatientRegistration{
    patientId: string;
    patientRegistrationDetail: PatientRegistrationDetail;
    patientPhysicalAndMedicalDetails: PatientPhysicalAndMedicalDetails;
    doctorDetail: DoctorDetail;
    covidDataList: CovidData[];
}