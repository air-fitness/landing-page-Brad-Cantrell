class TeamPanel {
    constructor(domElement){
        this.domElement = domElement;

        this.viewButton = this.domElement.querySelector('.viewButton');
        // this.bioBox = this.domElement.querySelector('bio');
        
            this.viewButton.addEventListener('click', () => this.viewBio());
    //     this.viewButton.addEventListener('click', () => this.viewBio());
    }

    viewBio() {
        this.viewButton.style.background= "red";
    }
}

let teamBoxes = document.querySelectorAll('.pic-box');

teamBoxes.forEach(function(x) {
    return new TeamPanel(x);
});

