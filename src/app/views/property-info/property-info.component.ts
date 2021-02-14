import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.component.html',
  // styleUrls: ['./property-info.component.css']
})
export class PropertyInfoComponent implements OnInit {
  propertyForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.propertyForm = this.formBuilder.group(
      {
        title: ["", Validators.required],
        price: ["", Validators.required],
        description: ["", Validators.required],
        address: ["", Validators.required],
        bedroom: ["", Validators.required],
        bathroom: ["", Validators.required],
        area: ['',Validators.required],
        type: ['',Validators.required],
        image:[''],
        amenities : this.formBuilder.group(
          {
            garage: [""],
            pool: [""],
            garden: [""],
            security: [""],
            internet: [""],
            airconditioning: [""],
          }
        )

      }
    );
  }
  get f() {
    return this.propertyForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.propertyForm.invalid) {
      return;
    }

    // display form values on success
    alert("SUCCESS! \n\n" + JSON.stringify(this.propertyForm.value, null, 4));
  }
}
