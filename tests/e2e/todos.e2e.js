const TodoPage = require('../pages/todo.page');

describe('My todo add ', () => {
  it('should enter title', async () => {
    await TodoPage.open();

    await TodoPage.addTodo('You are late for 15 minutes, Bitch');
    // await TodoPage.a
    // await driver.TodoPag
    // await expect(SecurePage.flashAlert).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
  });
});
