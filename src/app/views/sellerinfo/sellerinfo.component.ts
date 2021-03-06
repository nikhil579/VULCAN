import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { MustMatch } from "./_helper/must-match.validators";

@Component({
  templateUrl: "sellerinfo.component.html",
  styleUrls: ["./sellerinfo.component.css"],
})
export class SellerinfoComponent implements OnInit {
  states: Array<String> = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu', 'Jharkhand', 'Karnataka', 'Kashmir', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal'];
  reactiveForm: FormGroup;
  // user = { 'fname': 'Nikhil', 'lname': 'Sonawane' };
  userGender: Array<String> = ['Male', 'Female', 'Other'];
  userOccupation: Array<String> = ['Self Employed', 'Service','Other'];
  selectedOccupationValues = [];
  favOccupationError: Boolean = true;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {

    // console.log('Initial Value', this.user);
    this.reactiveForm = this._fb.group({
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["",[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      dateOfBirth: [null, Validators.required],
      gender: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      occupation: this.addOccupation(),
      address: this._fb.group({
        addressType: [null, Validators.required],
        // expiryDate: [null, this.expiryDateValidator],
        streetAddress: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        zipcode: [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]]
      })
    });
  }

  // triggerExpiryValidator() {
  //   this.expiryDate.updateValueAndValidity();
  // }
  // expiryDateValidator(control: AbstractControl) {
  //   if (control) {
  //     const group = <FormGroup>control.root.get('address');
  //     if (group) {
  //       const addControl = group.controls.addressType;
  //       if (addControl) {
  //         if (addControl.value === 'temporary') {
  //           if (control.value === null || control.value === undefined || control.value === '') {
  //             return {'date_error' : 'Date cannot be blank.'};
  //           }
  //         }
  //       }
  //     }
  //   }

  //   return null;
  // }
  addOccupation() {
    const arr = this.userOccupation.map(() => {
      return this._fb.control(false);
    });

    return this._fb.array(arr);
  }
  get OccupationArray() {
    return <FormArray>this.reactiveForm.get('occupation');
  }
  getOccupation() {
    this.selectedOccupationValues = [];
    this.OccupationArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedOccupationValues.push(this.userOccupation[i]);
      }
    });

    this.favOccupationError =  this.selectedOccupationValues.length > 0 ? false : true;
  }
  checkOccupationControlsTouched() {
    let flg = false;
    this.OccupationArray.controls.forEach(control => {
      if (control.touched) {
        flg = true;
      }
    });

    return flg;
  }
  get zipcode() {
    const temp = <FormGroup>this.reactiveForm.controls.address;
    return temp.controls.zipcode;
  }

  get state() {
    const temp = <FormGroup>this.reactiveForm.controls.address;
    return temp.controls.state;
  }

  get city() {
    const temp = <FormGroup>this.reactiveForm.controls.address;
    return temp.controls.city;
  }

  get streetAddress() {
    const temp = <FormGroup>this.reactiveForm.controls.address;
    return temp.controls.streetAddress;
  }

  get addressType() {
    const temp = <FormGroup>this.reactiveForm.controls.address;
    return temp.controls.addressType;
  }

  // get expiryDate() {
  //   const temp = <FormGroup>this.reactiveForm.controls.address;
  //   return temp.controls.expiryDate;
  // }

  get firstName() {
    return this.reactiveForm.get('firstName');
  }

  get lastName() {
    return this.reactiveForm.get('lastName');
  }
  get email() {
    return this.reactiveForm.get('email');
  }
  get gender() {
    return this.reactiveForm.get('gender');
  }
  get phoneNumber() {
    return this.reactiveForm.get('phoneNumber');
  }
  get dateOfBirth() {
    return this.reactiveForm.get('dateOfBirth');
  }
  

  

  submitHandler() {
    console.log(this.reactiveForm);
    // console.log('Final Value', this.user);
  }
}
