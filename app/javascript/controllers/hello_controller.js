import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]

  connect() {
  }
  greet() {
    this.outputTarget.textContent =
      `Hello Mr., ${this.nameTarget.value}!`
  }
}
