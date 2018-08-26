class UIController {
  constructor() {
    this.initSelectors();
  }

  initSelectors() {
    //tabSelectors
    this.tabSelectors = {
      tab1: "#personal-tab",
      tab2: "#educational-tab",
      tab3: "#workExp-tab",
      tab4: "#final-tab"
    };

    //activetab
    this.activeTab = "personal-tab"

    //maintain touched state
    // this.touchedState = []

    //viewWrapper
    this.tabViewSelectors = {
      tab1: ".personal",
      tab2: ".educational",
      tab3: ".workExp",
      tab4: ".finalView"
    };

    //Buttons Selectors
    this.buttonSelectors = {
      next: "#nextBtn",
      back: "#backBtn",
      reset: "#resetBtn"
    };
  }

  setActiveTab = (tab)=>{
    this.activeTab = tab
  }


  buttonState(next, back, reset) {
    document.querySelector(this.buttonSelectors.next).style.display = next;
    document.querySelector(this.buttonSelectors.back).style.display = back;
    document.querySelector(this.buttonSelectors.reset).style.display = reset
  }
}

let ui = new UIController()

ui.buttonState('block','none','block')

