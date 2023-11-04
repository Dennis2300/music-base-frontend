describe('Artist', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/');
    cy.viewport(1224, 1268)
  });

  it('can create a new artist', () => {
    cy.get('#show-artists-btn').click();
    cy.get('#create-artist-header-btn').click();
    cy.get('#artist-form').should('exist');
    cy.get('#name').type('Test Artist');
    cy.get('#birthdate').type('1990-01-01');
    cy.get('#activeSince').type('2000');
    cy.get('#image').type(
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F345932815122640574%2F&psig=AOvVaw0jxQ9Y9w8xU8q8LW2f7Z2s&ust=1620230127066000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjR1q7xwvACFQAAAAAdAAAAABAD'
    );
    cy.get('#website').type('https://www.google.com/');
    cy.get('#shortDescription').type('Test Description');
    cy.get('#form-genres').select('Rock');
    cy.get('#selected-genres').should('contain', 'Rock');
    cy.get('#form-labels').select('Atlantic Records');
    cy.get('#selected-labels').should('contain', 'Atlantic Records');
    cy.get('#form-albums').select('The Fame');
    cy.get('#selected-albums').should('contain', 'The Fame');
    cy.get('#form-songs').select('Firework');
    cy.get('#selected-songs').should('contain', 'Firework');

    cy.get('#submit-btn').click();

    cy.get('#artistsTableBody tr').contains('Test Artist');
  });

  it('can edit an artist', () => {
    cy.get('#show-artists-btn').click();
    cy.get('#artistsTableBody tr')
      .contains('Test Artist')
      .get('button')
      .contains('Edit')
      .click();
    cy.get('#name').clear().type('Test Artist 2');
    cy.get('#birthdate').type('1990-01-01');
    cy.get('#activeSince').clear().type('2000');
    cy.get('#image')
      .clear()
      .type(
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F345932815122640574%2F&psig=AOvVaw0jxQ9Y9w8xU8q8LW2f7Z2s&ust=1620230127066000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjR1q7xwvACFQAAAAAdAAAAABAD'
      );
    cy.get('#website').clear().type('https://www.google.com/');
    cy.get('#shortDescription').clear().type('Test Description');
    cy.get('#form-genres').select('Rap');
    cy.get('#selected-genres').should('contain', 'Rap');
    cy.get('#selected-genres').should('contain', 'Rock');
    cy.get('#form-genres').select('Rock');
    cy.get('#selected-genres').should('not.contain', 'Rock');

    cy.get('#form-labels').select('Capitol Records');
    cy.get('#selected-labels').should('contain', 'Capitol Records');
    cy.get('#selected-labels').should('contain', 'Atlantic Records');
    cy.get('#form-labels').select('Atlantic Records');
    cy.get('#selected-labels').should('not.contain', 'Atlantic Records');

    cy.get('#form-albums').select('Scorpion');
    cy.get('#selected-albums').should('contain', 'Scorpion');
    cy.get('#selected-albums').should('contain', 'The Fame');
    cy.get('#form-albums').select('The Fame');
    cy.get('#selected-albums').should('not.contain', 'The Fame');

    cy.get('#form-songs').select('Yellow');
    cy.get('#selected-songs').should('contain', 'Yellow');
    cy.get('#selected-songs').should('contain', 'Firework');
    cy.get('#form-songs').select('Firework');
    cy.get('#selected-songs').should('not.contain', 'Firework');

    cy.get('#submit-btn').click();

    cy.get('#artistsTableBody tr').contains('Test Artist 2');
  });

  it('can delete an artist', () => {
    cy.get('#show-artists-btn').click();
    cy.get('#artistsTableBody tr')
      .contains('Test Artist 2')
      .get('button')
      .contains('Delete')
      .click();

    cy.get('#artistsTableBody tr').should('not.contain', 'Test Artist 2');
  });
});
