import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'learning-bindings',
    templateUrl: './learning-bindings.component.html'

})
export class LearningBindingsComponent {

    /**
     * mouse events
     * 
     */
    public onMouseOut() {
        console.log('mouseout');

    }

    public onClick() {
        console.log('click');

    }

    public onMouseOver() {
        console.log('mouseover');

    }

    public onKeyDown (){
        console.log('keydown');
        
    }

}
