import image from './assets/image.png';
import { TextBlock, ColumnsBlock, ImageBlock, TitleBlock } from './classes/blocks'

const text = 'This app was created as a simple example that shows functional advantages of JavaScript. ' +
  'Author: Aliaksei Deboi'
const instruction = 'For adding elements on the page, you need to use sidebar on the left. Use ' +
  'value and styling, for example: value = "Hello!", style = color: green;'
const shadow = '1px 1px 2px black, 0 0 1em black'
const mail = 'jagnat18@gmail.com';


export const model = [
  new TitleBlock('Site constructor on pure JavaScript', {
    tag: 'h1',
    styles: {
      'text-shadow': shadow,
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem',
    }
  }),

  new TextBlock(instruction, {
    styles: {
      'font-size': '16px',
      'text-shadow': shadow,
      'text-align': 'center',
      color: '#fff',
      padding: '1rem',
      'font-weight': 'bold',
    }
  }),

  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto',
    },
    alt: 'Just a picture'
  }),
  new ColumnsBlock([
    'App was created on pure JavaScript, without any frameworks',
    'I used SOLID statements and OOP here',
    'JavaScript is simple and cool!',
  ], {
    styles: {
      'text-shadow': shadow,
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold',
      'text-align': 'center',
    }
  }),
  new TextBlock(text, {
    styles: {
      'font-size': '18px',
      'text-shadow': shadow,
      'text-align': 'center',
      color: '#fff',
      padding: '1rem',
      'font-weight': 'bold',
    }
  }),
  new TextBlock(mail, {
    styles: {
      'font-size': '16px',
      'text-shadow': shadow,
      'text-align': 'center',
      color: '#fff',
      padding: '1rem',
      'font-weight': 'bold',
    }
  }),
]
