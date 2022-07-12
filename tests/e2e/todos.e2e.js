const TodoPage = require('../pages/todo.page');

describe('My todo add ', () => {
  it('should enter title', async () => {
    await TodoPage.open();

    await TodoPage.addTodo('Title');
    // await expect(SecurePage.flashAlert).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
  });
});
