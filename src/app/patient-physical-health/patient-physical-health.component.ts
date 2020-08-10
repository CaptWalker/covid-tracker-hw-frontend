import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-patient-physical-health',
  templateUrl: './patient-physical-health.component.html',
  styleUrls: ['./patient-physical-health.component.scss']
})
export class PatientPhysicalHealthComponent implements OnInit {

  physicalAndHealthForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  symptomStatus = false;
  isDisabled = false;
  medicalInsuranceStatus = false;
  agreementStatus = false;

  // symptomsList = [
  //   {
  //     id: 1,
  //     symptom: 'Cough',
  //     checked: false
  //   },
  //   {
  //     id: 2,
  //     symptom: 'Diarrhoea',
  //     checked: false
  //   },
  //   {
  //     id: 3,
  //     symptom: 'Vomitting',
  //     checked: false
  //   },
  //   {
  //     id: 4,
  //     symptom: 'Fever',
  //     checked: false
  //   },
  //   {
  //     id: 5,
  //     symptom: 'Body Ache',
  //     checked: false
  //   },
  //   {
  //     id: 6,
  //     symptom: 'Abdominal Pain',
  //     checked: false
  //   },
  //   {
  //     id: 7,
  //     symptom: 'Breathlessness',
  //     checked: false
  //   },
  //   {
  //     id: 8,
  //     symptom: 'Nausea',
  //     checked: false
  //   },
  //   {
  //     id: 9,
  //     symptom: 'Haemoptysis',
  //     checked: false
  //   },
  //   {
  //     id: 10,
  //     symptom: 'Sore Throat',
  //     checked: false
  //   },
  //   {
  //     id: 11,
  //     symptom: 'Chest pain',
  //     checked: false
  //   },
  //   {
  //     id: 12,
  //     symptom: 'Nasal discharge',
  //     checked: false
  //   },
  //   {
  //     id: 13,
  //     symptom: 'Sputum',
  //     checked: false
  //   }
  // ];

  // existingDiseaseList = [
  //   {
  //     id: 1,
  //     disease: 'Blood Pressure',
  //     checked: false
  //   },
  //   {
  //     id: 2,
  //     disease: 'Diabetes',
  //     checked: false
  //   },
  //   {
  //     id: 3,
  //     disease: 'Thyroid',
  //     checked: false
  //   },
  //   {
  //     id: 4,
  //     disease: 'Asthma',
  //     checked: false
  //   },
  //   {
  //     id: 5,
  //     disease: 'Pneumonia',
  //     checked: false
  //   },
  //   {
  //     id: 6,
  //     disease: 'Chronic Lung Disease',
  //     checked: false
  //   },
  //   {
  //     id: 7,
  //     disease: 'Malignancy',
  //     checked: false
  //   },
  //   {
  //     id: 8,
  //     disease: 'Heart Disease',
  //     checked: false
  //   },
  //   {
  //     id: 9,
  //     disease: 'Chronic liver disease',
  //     checked: false
  //   },
  //   {
  //     id: 10,
  //     disease: 'Hypertension',
  //     checked: false
  //   },
  //   {
  //     id: 11,
  //     disease: 'Chronic renal disease',
  //     checked: false
  //   },
  //   {
  //     id: 12,
  //     disease: 'Other',
  //     checked: false
  //   }
  // ];

  // medicalHistoryList = [
  //   {
  //     id: 1,
  //     history: 'Bone Fracture',
  //     checked: false
  //   },
  //   {
  //     id: 2,
  //     history: 'Fatal Accident',
  //     checked: false
  //   }
  // ];

  // habitsList = [
  //   {
  //     id: 1,
  //     habit: 'Eating Junkfood',
  //     checked: false
  //   },
  //   {
  //     id: 2,
  //     habit: 'Occasional Drinker',
  //     checked: false
  //   },
  //   {
  //     id: 3,
  //     habit: 'Chronic Drinker',
  //     checked: false
  //   },
  //   {
  //     id: 4,
  //     habit: 'Smoker',
  //     checked: false
  //   },
  // ];

  ngOnInit(): void {
    this.physicalAndHealthForm = this.formBuilder.group({
      heightCm: [null],
      weightKg: [null],
      travelIn15Days: [],
      age: [null],
      travelHistory: this.formBuilder.array([
        this.initTravel()
      ]),
      quarantineIn15Days: [null],
      bodyMassIndex: [],
      symptoms: [],
      cough: [],
      cold: [],
      throatPain: [],
      bloodPressure: [],
      diabetes: [],
      lungDisease: [],
      heartPatient: [],
      boneFracture: [],
      accidentalHistory: [],
      workType: [],
      junkFoodConsumptionFreq: [1],
      exerciseDurationPerDay: [],
      medicalInsurance: [],
      doctorDetailDTO: []
    });
  }

  initTravel = () => {
    return this.formBuilder.group({
      travel: [],
      dateOfTravel: [],
      fromPlace: [],
      toPlace: [],
      stayDurationInDay: []
    });
  }

  addTravel = () => {
    const control = <FormArray> this.physicalAndHealthForm.controls['travelHistory'];
    control.push(this.initTravel());
  }

  removeTravel = (i: number) => {
    const control = <FormArray> this.physicalAndHealthForm.controls['travelHistory'];
    control.removeAt(i);
  }

  registerHealthAndPhysicalData = (data) => {         // I have to put patientid physicalData and doctorDetailDTO as a object a for request
    data.junkFoodConsumptionFrequency = data.junkFoodConsumptionFrequency === null ? 1 : data.junkFoodConsumptionFrequency;
    data.bodyMassIndex = (data.weightKg * 100 * 100) / (data.heightCm * data.heightCm);
    data.doctorDetailDTO = { doctorId: null };
    console.log(data);
  }

  // onSymptomsChange = (id) => {
  //   this.symptomsList[id - 1].checked = !this.symptomsList[id - 1].checked;
  // }

  // onExistingDiseaseChange = (id) => {
  //   this.existingDiseaseList[id - 1].checked = !this.existingDiseaseList[id - 1].checked;
  // }

  // onExistingDiseaseChangeNone = () => {
  //   this.isDisabled = !this.isDisabled;
  // }

  // onMedicalHistoryChange = (id) => {
  //   this.medicalHistoryList[id - 1].checked = !this.medicalHistoryList[id - 1].checked;
  // }

  // onHabitsChange = (id) => {
  //   this.habitsList[id - 1].checked = !this.habitsList[id - 1].checked;
  // }

  symptomStatusToggle = () => {
    this.symptomStatus = !this.symptomStatus;
  }

  medicalInsuranceToggle = () => {
    this.medicalInsuranceStatus = !this.medicalInsuranceStatus;
  }

  agreementToggle = () => {
    this.agreementStatus = !this.agreementStatus;
  }
}
