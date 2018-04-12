'use strict';
import { declare } from '@babel/helper-plugin-utils';
import transformEs3MemberExpressionLiterals from 'babel-plugin-transform-es3-member-expression-literals';
import transformEs3PropertyLiterals from 'babel-plugin-transform-es3-property-literals';

export default declare((api) => {
  api.assertVersion(7);
  return {
    plugins: [
      transformEs3MemberExpressionLiterals,
      transformEs3PropertyLiterals
    ]
  };
});
