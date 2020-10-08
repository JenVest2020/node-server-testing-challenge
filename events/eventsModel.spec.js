const Events = require('./eventsModel');
const db = require('../data/dbConfig');

describe('events model', () => {

    describe('add event', () => {
        beforeEach(async () => {
            await db('events').truncate();
        })
        it('should have the right length after insert', async () => {
            await Events.addEvent({ name: 'ThanksGiving Party' });
            await Events.addEvent({ name: 'Halloween Party' });

            const events = await db('events');
            expect(events).toHaveLength(2);
        });

        it('should return what was added', async () => {
            let event = await Events.addEvent({ name: 'ThanksGiving Party' });
            expect(event.name).toBe('ThanksGiving Party');

            event = await Events.addEvent({ name: 'Halloween Party' });
            expect(event.name).toBe('Halloween Party');
        });
    })

    describe('remove event', () => {

        it('should remove event from the database', async () => {
            let event = await Events.removeEvent({ id: 2 });
            expect(event.name).toEqual(undefined);
        })
    })
})