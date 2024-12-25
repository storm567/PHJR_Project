"use strict";
const validator = {
  "content": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "label": "留言内容/回复内容"
  },
  "imgs": {
    "rules": [
      {
        "format": "array"
      },
      {
        "arrayType": "file"
      },
      {
        "maxLength": 6
      }
    ],
    "label": "图片列表"
  },
  "contact": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "联系人"
  },
  "mobile": {
    "rules": [
      {
        "format": "string"
      },
      {
        "pattern": "^\\+?[0-9-]{3,20}$"
      }
    ],
    "label": "联系电话"
  }
};
exports.validator = validator;
