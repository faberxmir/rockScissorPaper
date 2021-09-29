
export class ViewController {

    FLEX = 'flex';
    BLOCK = 'block';
    NONE = 'none'
    ROCKIMAGE = '../img/rock.png';
    SCISSORIMAGE = '../img/scissor.png';
    PAPERIMAGE = '../img/paper.png';

    constructor(){
    }

    enableMenuView(){
        this.changeDisplayValue(this.getMenuView(), this.FLEX);
    }

    enableGameView(){
        this.changeDisplayValue(this.getGameView(), this.FLEX);
    }

    enableCounter(){
        this.changeDisplayValue(this.getCounter(), this.BLOCK);
    }

    disableCounter(){
        this.disableView(this.getCounter());
    }

    updateCounter(value){
        this.updateInnerHTML(this.getCounter(), value);
    }

    updateInnerHTML(view, value){
        view.innerHTML = value;
    }

    changeDisplayValue(view, value){
        view.style.display = value;
    }

    disableView(view){
        view.style.display = this.NONE;
    }

    updatecomputerChoice(imgURL){
        this.getComputerChoice().src = imgURL;
    }

    updateplayerChoice(imgURL){
        this.getPlayerChoice().src = imgURL;
    }

    //-----------------GETTERS---------------------------
    getMenuView(){
        return document.querySelector("#menu");
    }
    getGameView(){
        return document.querySelector("#gameSection");
    }

    getPlayButton(){
        return document.querySelector("#playbutton");
    }

    getCounter(){
        return document.querySelector("#counter");
    }

    getComputerChoice(){
        return document.querySelector("#computerchoice");
    }

    getPlayerChoice(){
        return document.querySelector("#userchoice");
    }
}

