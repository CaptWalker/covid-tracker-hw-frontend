export interface CovidData{
    patientId: string;
    bcgVaccine: string;
    fluVaccine: string;
    specimenType: string[];
    collectionDate: Date;
    sampleId: number;
    patientCategory: string;
    immunoCompromisedCondition: string;
    covidTestResult: string;
}