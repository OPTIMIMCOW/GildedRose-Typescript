export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }


    updateQuality() {

        const nameAgedBrie = 'Aged Brie';
        const nameSulfuras = 'Sulfuras, Hand of Ragnaros';
        const nameBackStagePass = 'Backstage passes to a TAFKAL80ETC concert';

        for (let i = 0; i < this.items.length; i++) {

            if (this.items[i].name != nameSulfuras) {
                if (this.items[i].name != nameAgedBrie && this.items[i].name != nameBackStagePass) {
                    if (this.items[i].quality > 0) {
                        this.items[i].quality -= 1
                    }
                } else {
                    if (this.items[i].quality < 50) {
                        if (this.items[i].name == nameBackStagePass) {
                            if (this.items[i].sellIn <= 0) {
                                this.items[i].quality = 0;
                            } else if (this.items[i].sellIn < 6) {
                                this.items[i].quality += 3;
                            } else if (this.items[i].sellIn < 11) {
                                this.items[i].quality += 2;
                            } else {
                                this.items[i].quality += 1;
                            }
                        } else {
                            this.items[i].quality = this.items[i].quality + 1;
                        }
                    }
                }
                this.items[i].sellIn -= 1;
            }
        }
        return this.items;
    }
}
