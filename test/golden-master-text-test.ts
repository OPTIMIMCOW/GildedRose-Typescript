const { Item, GildedRose } = require('../app/gilded-rose');

// Add a master test here
const nameAgedBrie = 'Aged Brie';
const nameSulfuras = 'Sulfuras, Hand of Ragnaros';
const nameBackStagePass = 'Backstage passes to a TAFKAL80ETC concert';

const initValSulfuras = 80;

const items = [
    new Item(nameAgedBrie, 10, 50),
    new Item(nameAgedBrie, 0, 10), 
    new Item(nameAgedBrie, 10, 15),
    new Item("Box", 10, 50),
    new Item("Box", 10, 0),
    new Item("Box", 0, 20),
    new Item(nameSulfuras, 0, initValSulfuras),
    new Item(nameSulfuras, 10, initValSulfuras),
    new Item(nameBackStagePass, 40, 50),
    new Item(nameBackStagePass, 40, 10),
    new Item(nameBackStagePass, 10, 10),
    new Item(nameBackStagePass, 5, 10),
    new Item(nameBackStagePass, 0, 10)
]
//console.log(items);

const gildedRose = new GildedRose(items);
gildedRose.updateQuality();
console.log(gildedRose);

// const testItem = [new Item(nameAgedBrie, 40, 60)];
// console.log(testItem);

// const gildedRose = new GildedRose(testItem);
// gildedRose.updateQuality();

// console.log(gildedRose);


////// EDGE CASES 
// Aged Brie value greater than 50 results in no change in value but reduction of sellin value. 
// Item(nameAgedBrie, 40, 60) the output of this should be value = 50. 

// console.log(items);
// console.log(gildedRose.updateQuality());

//console.log(items[0]['name']);


// describe("Edge Case tests", () => {
    
//     it("Brie Value Over 50 should return error", () => {
//         const pawn = new Pawn(Player.BLACK);
//         board.setPiece(Square.at(6, 0), pawn);
//         pawn.moveTo(board, Square.at(5, 0));

//         const moves = pawn.getAvailableMoves(board);
        
//         moves.should.have.length(1);
//         moves.should.deep.include(Square.at(4, 0));
//     });
// })
