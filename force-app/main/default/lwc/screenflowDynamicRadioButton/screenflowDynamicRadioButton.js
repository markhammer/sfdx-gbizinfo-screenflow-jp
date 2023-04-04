import { LightningElement, api } from "lwc";

export default class ScreenflowDynamicRadioButton extends LightningElement {
  @api label;
  @api labelOptions;
  @api valueOptions;
  @api value;
  @api required;

  handleChange(event) {
    this.value = event.target.value;
  }

  get options() {
    const result = [];
    for (let i = 0; i < this.labelOptions.length; i++) {
      result.push({
        label: this.labelOptions[i],
        value: this.valueOptions[i]
      });
    }
    return result;
  }
}
