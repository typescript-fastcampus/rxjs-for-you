import {Observable, pipe} from 'rxjs';
import {Point} from './lib/test-source';
import {UnaryFunction} from 'rxjs/interfaces';

export function filterClosePoints(distance: number): UnaryFunction<Observable<Point>, Observable<Point>> {
  return pipe(
    // TODO
  );
}