import { getGreeting } from '../support/app.po';

describe('about', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    getAbout().should((t) => expect(t.length).equal(2));
    getAddAboutButton().click();
    getAbout().should((t) => expect(t.length).equal(3));
    // Function helper example, see `../support/app.po.ts` file
    });
});
