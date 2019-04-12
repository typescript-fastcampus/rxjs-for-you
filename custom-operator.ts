import {Observable, pipe} from 'rxjs';
import {Point} from './lib/test-source';
import {UnaryFunction} from 'rxjs/interfaces';
import {distinctUntilChanged} from "rxjs/operators";

export function filterClosePoints(distance: number): UnaryFunction<Observable<Point>, Observable<Point>> {
  return pipe(
    distinctUntilChanged((p1, p2) => Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2) < distance)
  );
}