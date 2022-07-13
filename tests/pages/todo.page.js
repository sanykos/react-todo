// const { OpenInBrowser } = require('@material-ui/icons');
const Page = require('./page');

class TodoPage extends Page {
  get inputAddTodo() {
    return $('#addTodo');
  }

  async addTodo(title) {
    await this.inputAddTodo.setValue(title);
    await browser.keys('Enter');
  }

  open() {
    return super.open('react-todo');
  }
}

module.exports = new TodoPage();
