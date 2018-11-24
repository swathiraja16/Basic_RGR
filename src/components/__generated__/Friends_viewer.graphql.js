/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FriendsList_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Friends_viewer$ref: FragmentReference;
export type Friends_viewer = {|
  +id: string,
  +$fragmentRefs: FriendsList_viewer$ref,
  +$refType: Friends_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Friends_viewer",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "FriendsList_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd759b3799b3efbf0ec54018e7d1a8ec5';
module.exports = node;
