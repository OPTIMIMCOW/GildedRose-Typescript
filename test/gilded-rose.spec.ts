import { expect } from 'chai';
//declare var require: any;
import { Item, GildedRose } from '../app/gilded-rose';


const nameAgedBrie = 'Aged Brie';
const nameSulfuras = 'Sulfuras, Hand of Ragnaros';
const nameBackStagePass = 'Backstage passes to a TAFKAL80ETC concert';

const initValSulfuras = 80;

describe('Gilded Rose', function () {

    it('check item name', function () {
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it('Sulfuras does not expire', function () {
        const gildedRose = new GildedRose([new Item(nameSulfuras, 20, initValSulfuras)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(20);
    });

    it('Box does expire', function() {
        const gildedRose = new GildedRose([new Item('Box', 20, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(19);
    });

    it('All does expire', function() {
        const gildedRose = new GildedRose([new Item('Box', 20, 30), new Item(nameAgedBrie, 20, 30),new Item(nameBackStagePass, 20, 30)]);

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).to.equal(19);
        expect(items[1].sellIn).to.equal(19);
        expect(items[2].sellIn).to.equal(19);
    });

    it('Quality of Box goes down by 1', function() {
        const gildedRose = new GildedRose([new Item('Box', 20, 30), new Item('Box', 4, 30),new Item('Box', 7, 30)]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(29);
        expect(items[1].quality).to.equal(29);
        expect(items[2].quality).to.equal(29);
    });

    it('Quality of Ticket increase wrong', function() {
        const gildedRose = new GildedRose([new Item(nameBackStagePass, 11, 10)]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(11);
    });

    
});
