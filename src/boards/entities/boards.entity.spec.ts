import { BoardsEntity as Boards } from './boards.entity';

describe('title validate', () => {
    it('should return back a Error', () => {
        const title = '';
        const contents = '';
        const spaceShipId = () => Boards.validate(title, contents);

        expect(spaceShipId).toThrow(Error);
    });

    it('should return back a valid title', () => {
        const title = 'g';
        const contents = 'script';

        expect(Boards.validate(title, contents)).toBeTruthy();
    });
});