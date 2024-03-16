//Eslint esversion:6
"use strict";

function TemplateProcessor(template) {
  this.template = template;
}

TemplateProcessor.prototype.fillIn = function (dictionary) {
  let filledTemplate = this.template.replace(/{{(.*?)}}/g, (match, property) => {
    return dictionary[property] || "";
  });
  return filledTemplate;
};
