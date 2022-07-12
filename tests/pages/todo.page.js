const Page = require('./page');

class TodoPage extends Page {
  get inputAddTodo() {
    return $('#addTodo');
  }

  async addTodo(title) {
    await this.inputAddTodo.setValue(title);
  }

  open() {
    return super.open('react-todo');
  }
}

module.exports = new TodoPage();
