// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-method-definitions
es6id: 14.3
description: >
  Get accessor method may not have a formal parameter (regardless of the
  presence of an initializer)
info: |
  Syntax

  MethodDefinition[Yield] :

    get PropertyName[?Yield] ( ) { FunctionBody }
features: [default-parameters]
negative:
  phase: parse
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

0, { get a(param = null) {} };
