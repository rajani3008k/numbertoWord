import { Component } from '@angular/core';
import { NumberConverterService } from './number-converter.service';
@Component({
  selector: 'app-number-form',
  templateUrl: './number-form.component.html',
  styleUrls: ['./number-form.component.css']
})
export class NumberFormComponent {
  number: string = '';
  response: any = null;
  loading: boolean = false;

  constructor(private  numberConverterService: NumberConverterService) { }

  onSubmit() {
    const numValue = parseInt(this.number, 10);
    if (isNaN(numValue) || numValue < 0 || numValue > 999) {
      this.response = { status: 'error', message: 'Please enter a valid number between 0 and 999' };
      return;
    }

    this.loading = true;
    this.numberConverterService.convertNumber(numValue).subscribe(
      res => {
        this.response = res;
        this.loading = false;
      },
      err => {
        this.response = { status: 'error', message: 'An error occurred' };
        this.loading = false;
      }
    );
  }
}
