import { Controller } from "@hotwired/stimulus"
import TomSelect from "tom-select"

export default class extends Controller {
  connect() {
    new TomSelect(this.element, {
      maxOptions: null, // Set to null to display all options
      maxItems: null,   // Set to null to allow selecting all options
      plugins: ['remove_button'], // Optional: Add plugins as needed
      // Additional configuration options if needed
    })
  }
}
