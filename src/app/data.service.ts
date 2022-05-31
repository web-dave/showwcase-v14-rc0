import { Injectable } from '@angular/core';
import { interval, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  data$ = interval(2500).pipe(map((i) => `data mit ${i}`));
  name = 'Andy Wand';
}
