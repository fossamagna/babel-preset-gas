'use strict';

import transformEs3MemberExpressionLiterals from 'babel-plugin-transform-es3-member-expression-literals';
import transformEs3PropertyLiterals from 'babel-plugin-transform-es3-property-literals';

export default {
  plugins: [
    transformEs3MemberExpressionLiterals,
    transformEs3PropertyLiterals
  ]
};
