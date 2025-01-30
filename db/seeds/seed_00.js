export function seed(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
        { id: 3, name: 'Jim Doe', email: 'jim.doe@example.com' }
      ]);
    });
}