const db = require('../data/dbConfig.js');
const Guests = require('./guestsModel');

describe('guests model', () => {

    describe('add guest', () => {
        beforeEach(async () => {
            await db('guests').truncate();
        })
        it('should have the right length after insert', async () => {
            await Guests.addGuest({ firstName: 'Allen', lastName: 'Vest' });
            await Guests.addGuest({ firstName: 'Diana', lastName: 'Ortiz' });

            const guest = await db('guests');
            expect(guest).toHaveLength(2);
        });

        it('should return what was added', async () => {
            let guest = await Guests.addGuest({ firstName: 'Diana', lastName: 'Ortiz' });
            expect(guest.firstName).toBe('Diana');
            expect(guest.lastName).toBe('Ortiz');

            guest = await Guests.addGuest({ firstName: 'Allen', lastName: 'Vest' });
            expect(guest.firstName).toBe('Allen');
            expect(guest.lastName).toBe('Vest');
        });
    })

    describe('remove guest', () => {

        it('should remove guest from the database', async () => {
            let guest = await Guests.removeGuest({ id: 1 });
            expect(guest.firstName).toEqual(undefined);
            expect(guest.lastName).toEqual(undefined);
        })
    })
})