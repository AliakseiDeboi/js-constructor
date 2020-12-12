import { block } from "../utils";
import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from "./blocks";

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector)
    this.update = updateCallback
    this.init()
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template)
    this.$el.addEventListener('submit', this.add.bind(this))
  }

  get template() {
    return [
      block('title'),
      block('text'),
    ].join('')
  }

  add(event) {
    event.preventDefault()

    const type = event.target.name
    const value = event.target.value.value
    const styles = event.target.styles.value

    let newBlock

    switch (type) {
      case 'text': {
        newBlock = new TextBlock(value, {styles})
        break
      }
      case 'title': {
        newBlock = new TitleBlock(value, {styles})
        break
      }
      case 'image': {
        newBlock = new ImageBlock(value, {styles})
        break
      }
      case 'columns': {
        newBlock = new ColumnsBlock(value, {styles})
        break
      }
      default: {
        throw new Error('Something is wrong.')
      }
    }

    this.update(newBlock)
    event.target.styles.value = ''
    event.target.value.value = ''
  }
}