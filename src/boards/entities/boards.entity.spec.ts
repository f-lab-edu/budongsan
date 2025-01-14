import { BoardsEntity as Boards } from './boards.entity';

describe('title validate', () => {
    it('should return back a Error', () => {
        const title = '';
        const spaceShipId = () => Boards.validate(title);

        expect(spaceShipId).toThrow(Error);
    });

    it('should return back a valid title', () => {
        const title = 'g';

        expect(Boards.validate(title)).toBeTruthy();
    });
});