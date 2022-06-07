const SPEED = 0.02;

export default class Paddle {
    constructor(elem){
        this.paddleElem = elem; 
        this.reset();
    }

    get position(){
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue('--position'));
    }

    set position(value){
        this.paddleElem.style.setProperty('--position', value);
    }

    rect(){
        return this.paddleElem.getBoundingClientRect();
    }

    reset(){
        this.position = 50;
    }


    update(delta, ballHeight){
        this.position += SPEED * delta * (ballHeight - this.position)
    }
}