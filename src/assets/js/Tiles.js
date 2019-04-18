/**
 * @class Tiles
 */
export default class Tiles {
  constructor(baseWidth, baseScale) {
    this.maxValue = 4294967295;
    this.tileScale = baseScale
    this.tileList = [];
  
    this.map = [];
  
    this.startPosition = 0;
    this.currentPosition = 0;
    this.limitX = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.maxY = 0;

    for (let i = 1; i < 10; i++) {
      this.tileList.push({ x:i, y:i, width:i * this.tileScale, height:i * this.tileScale});
    }
    this.tileWidth = baseWidth / this.tileScale;
    this.tileMaxWidth = this.tileList.length;
  }

  next(b) {
    let confcnt = (b)?Math.floor(Math.random() * this.limitX):0;
    let tile = this.tileList[confcnt];
    let tileX = tile.x;
    let tileY = tile.y;
    
    this.startPosition = this.currentPosition + tileX;
    let p = this.currentPosition;
    for(let i = 0; i < tileY; i++){
      for(let j = 0; j < tileX; j++){
        this.map[p] = 1;
        p++;
      }
      p += this.tileWidth - tileX;
    }

    this.currentX = this.currentPosition % this.tileWidth * this.tileScale;
    this.currentY = this.currentPosition == 0 ? 0 : ( Math.ceil( this.currentPosition / this.tileWidth ) - 1 ) * this.tileScale;
    this.currentY = this.currentPosition % this.tileWidth == 0 ? this.currentPosition / this.tileWidth * this.tileScale : this.currentY;

    let nextPosition = this._getNextPosition();
    this.currentPosition = nextPosition.positon;
    this.limitX = nextPosition.countX;
    this.maxY = Math.max(this.maxY, (tile.height + this.currentY));
    
    return { x:this.currentX, y:this.currentY, width:tile.width, height:tile.height, maxY:this.maxY };
  }
  
  _getNextPosition(){
    let max = this.startPosition + 500;
    let positon = this.maxValue;
    let countX = 0;
    let doreturn = false;
    for( let i = this.startPosition; i < max; i++){
      if( i % this.tileWidth == 0 && i != this.startPosition ){
        doreturn = true;
      }
      if(!this.map[i] && positon == this.maxValue){
        positon = i;
        countX++
      }else if(countX >= this.tileMaxWidth){
        break;
      }else if(!this.map[i] && !doreturn){
        countX++
      }else if(positon != this.maxValue){
        break;
      }
    }
    return { positon:positon, countX:countX };
  }
}
  