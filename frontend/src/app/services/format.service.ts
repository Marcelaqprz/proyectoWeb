import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  constructor() { }
  getDateFormat() { return formatDate(Date.now(), 'yyyy-MM-dd', 'en-US') }
}
