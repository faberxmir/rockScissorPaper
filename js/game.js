import { ViewController} from './viewcontroller.js'

const viewHandler = new ViewController();

viewHandler.disableView(viewHandler.getMenuView());
viewHandler.enableGameView();
viewHandler.disableView(viewHandler.getCounter());
viewHandler.updatecomputerChoice(viewHandler.ROCKIMAGE);
viewHandler.updateplayerChoice(viewHandler.PAPERIMAGE);

