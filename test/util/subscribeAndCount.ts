import { ObservableQuery } from '../../src/core/ObservableQuery';
import { ApolloQueryResult } from '../../src/core/types';
import { Subscription } from '../../src/util/Observable';

import wrap from './wrap';

export default function(done: MochaDone, observable: ObservableQuery<any>,
    cb: (handleCount: number, result: ApolloQueryResult<any>) => any): Subscription {
  let handleCount = 0;
  return observable.subscribe({
    next: wrap(done, result => {
      handleCount++;
      cb(handleCount, result);
    }),
    error: done,
  });
};
