import { TravelDetail } from "./travelDetail";

export interface PatientPhysicalAndMedicalDetails{
    weightKg: number;
    heightCm: number;
    gender: string;
    age: number;
    travelIn15Days: boolean;
    travelDetail: TravelDetail[];
    quarantineIn15Days: boolean;
    bodyMassIndex: number;
    symptoms: string;
    cough: string;
    cold: string;
    throatPain: string;
    bloodPressure: string;
    diabetes: string;
    lungDisease: string;
    heartPatient: string;
    boneFracture: string;
    accidentalHistory: string;
    workType: string;
    junkFoodConsumptionFreq: number;
    exerciseDurationPerDay: number;
    medicalInsurance: boolean;
}