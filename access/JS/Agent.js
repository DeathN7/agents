 // Begin: Name and picture JS
 const Jett = document.querySelector('.js-jett')

 const JettName = document.querySelector('.js-jett-name')

 const Brimm = document.querySelector('.js-brimm')

 const BrimmShow = document.querySelector('.js-brimmstone')

 const Sova = document.querySelector('.js-sova')

 const SovaName = document.querySelector('.js-sova-name')

 const Omen = document.querySelector('.js-omen')

 const OmenName = document.querySelector('.js-omen-name')

 const Chamber = document.querySelector('.js-chamber')

 const ChamberName = document.querySelector('.js-chamber-name')

 function showJett() {
     Jett.classList.add('open')
     JettName.classList.add('open')
 }

 function CloseJett(){
     Jett.classList.remove('open')
     JettName.classList.remove('open')
     Jett.classList.add('close')
 }

 function showOmen() {
     Omen.classList.add('open')
     OmenName.classList.add('open')
 }

 function CloseOmen(){
     Omen.classList.remove('open')
     OmenName.classList.remove('open')
 }

 function showChamber() {
     Chamber.classList.add('open')
     ChamberName.classList.add('open')
 }

 function CloseChamber(){
     Chamber.classList.remove('open')
     ChamberName.classList.remove('open')
 }

 function showSova() {
     Sova.classList.add('open')
     SovaName.classList.add('open')
 }
 function CloseSova(){
     Sova.classList.remove('open')
     SovaName.classList.remove('open')
 }

 function showBrimm() {
     BrimmShow.classList.add('open')
     Brimm.classList.add('open')
 }

 function CloseBrimm() {
     BrimmShow.classList.remove('open')
     Brimm.classList.remove('open')
 }
 // End: Name and picture JS

 // Begin: Skill JS
 // Jett skill
 const OCJettskill = document.querySelector('.js-jett-skill')
 const JettSkillQ = document.querySelector('.js-Jett-Q')
 const JettSkillQin4 = document.querySelector('.js-Jett-Q-in4')
 const JettSkillE = document.querySelector('.js-Jett-E')
 const JettSkillEin4 = document.querySelector('.js-Jett-E-in4')
 const JettSkillC = document.querySelector('.js-Jett-C')
 const JettSkillCin4 = document.querySelector('.js-Jett-C-in4')
 const JettSkillX = document.querySelector('.js-Jett-X')  
 const JettSkillXin4 = document.querySelector('.js-Jett-X-in4')

 function showJettSkill() {
     OCJettskill.classList.add('open')
 }
 function CloseJettSkill() {
     OCJettskill.classList.remove('open')
     OCJettskill.classList.add('close')
 }

 function showJettQ() {
     JettSkillQ.classList.add('open')
     JettSkillQin4.classList.add('open')
 }
 
 function CloseJettQ() {
     JettSkillQ.classList.remove('open')
     JettSkillQin4.classList.remove('open')
     JettSkillQin4.classList.add('close')
     JettSkillQ.classList.add('close')
 }

 function showJettE() {
     JettSkillE.classList.add('open')
     JettSkillEin4.classList.add('open')
 }

 function CloseJettE() {
     JettSkillE.classList.remove('open')
     JettSkillEin4.classList.remove('open')
 }

 function showJettC() {
     JettSkillC.classList.add('open')
     JettSkillCin4.classList.add('open')
 }

 function CloseJettC() {
     JettSkillC.classList.remove('open')
     JettSkillCin4.classList.remove('open')
 }

 function showJettX() {
     JettSkillX.classList.add('open')
     JettSkillXin4.classList.add('open')
 }

 function CloseJettX() {
     JettSkillX.classList.remove('open')
     JettSkillXin4.classList.remove('open')
 }
 // End: Jett skill

 // Begin: Brimmstone skill
 const OCBrimmSkill = document.querySelector('.js-brimm-skill')
 const BrimmSkillQ = document.querySelector('.js-Brimm-Q')
 const BrimmSkillQin4 = document.querySelector('.js-Brimm-Q-in4')
 const BrimmSkillE = document.querySelector('.js-Brimm-E')
 const BrimmSkillEin4 = document.querySelector('.js-Brimm-E-in4')
 const BrimmSkillC = document.querySelector('.js-Brimm-C')
 const BrimmSkillCin4 = document.querySelector('.js-Brimm-C-in4')
 const BrimmSkillX = document.querySelector('.js-Brimm-X')
 const BrimmSkillXin4 = document.querySelector('.js-Brimm-X-in4')

 function showBrimmSkill() {
     OCBrimmSkill.classList.add('open')
 }
 function CloseBrimmSkill() {
     OCBrimmSkill.classList.remove('open')
 }

 function showBrimmQ() {
     BrimmSkillQ.classList.add('open')
     BrimmSkillQin4.classList.add('open')
 }

 function CloseBrimmQ() {
     BrimmSkillQ.classList.remove('open')
     BrimmSkillQin4.classList.remove('open')
     BrimmSkillQin4.classList.add('close')
     BrimmSkillQ.classList.add('close')
 }

 function showBrimmE() {
     BrimmSkillE.classList.add('open')
     BrimmSkillEin4.classList.add('open')
 }

 function CloseBrimmE() {
     BrimmSkillE.classList.remove('open')
     BrimmSkillEin4.classList.remove('open')
 }

 function showBrimmC() {
     BrimmSkillC.classList.add('open')
     BrimmSkillCin4.classList.add('open')
 }

 function CloseBrimmC() {
     BrimmSkillC.classList.remove('open')
     BrimmSkillCin4.classList.remove('open')
 }

 function showBrimmX() {
     BrimmSkillX.classList.add('open')
     BrimmSkillXin4.classList.add('open')
 }

 function CloseBrimmX() {
     BrimmSkillX.classList.remove('open')
     BrimmSkillXin4.classList.remove('open')
 }
 // End: Brimmstone skill

 // Sova Skill
 const OCSovaSkill = document.querySelector('.js-Sova-skill')
 const SovaSkillQ = document.querySelector('.js-Sova-Q')
 const SovaSkillQin4 = document.querySelector('.js-Sova-Q-in4')
 const SovaSkillE = document.querySelector('.js-Sova-E')
 const SovaSkillEin4 = document.querySelector('.js-Sova-E-in4')
 const SovaSkillC = document.querySelector('.js-Sova-C')
 const SovaSkillCin4 = document.querySelector('.js-Sova-C-in4')
 const SovaSkillX = document.querySelector('.js-Sova-X')
 const SovaSkillXin4 = document.querySelector('.js-Sova-X-in4')

 function showSovaSkill() {
     OCSovaSkill.classList.add('open')
 }
 function CloseSovaSkill() {
     OCSovaSkill.classList.remove('open')
 }

 function showSovaQ() {
     SovaSkillQ.classList.add('open')
     SovaSkillQin4.classList.add('open')
 }

 function CloseSovaQ() {
     SovaSkillQ.classList.remove('open')
     SovaSkillQin4.classList.remove('open')
     SovaSkillQin4.classList.add('close')
     SovaSkillQ.classList.add('close')
 }

 function showSovaE() {
     SovaSkillE.classList.add('open')
     SovaSkillEin4.classList.add('open')
 }

 function CloseSovaE() {
     SovaSkillE.classList.remove('open')
     SovaSkillEin4.classList.remove('open')
 }

 function showSovaC() {
     SovaSkillC.classList.add('open')
     SovaSkillCin4.classList.add('open')
 }

 function CloseSovaC() {
     SovaSkillC.classList.remove('open')
     SovaSkillCin4.classList.remove('open')
 }

 function showSovaX() {
     SovaSkillX.classList.add('open')
     SovaSkillXin4.classList.add('open')
 }

 function CloseSovaX() {
     SovaSkillX.classList.remove('open')
     SovaSkillXin4.classList.remove('open')
 }
 // End: Sova Skill

//  Begin: Chamber Skill
const OCChamberSkill = document.querySelector('.js-Chamber-skill')
const ChamberSkillQ = document.querySelector('.js-Chamber-Q')
const ChamberSkillQin4 = document.querySelector('.js-Chamber-Q-in4')
const ChamberSkillE = document.querySelector('.js-Chamber-E')
const ChamberSkillEin4 = document.querySelector('.js-Chamber-E-in4')
const ChamberSkillC = document.querySelector('.js-Chamber-C')
const ChamberSkillCin4 = document.querySelector('.js-Chamber-C-in4')
const ChamberSkillX = document.querySelector('.js-Chamber-X')
const ChamberSkillXin4 = document.querySelector('.js-Chamber-X-in4')

function showChamberSkill() {
    OCChamberSkill.classList.add('open')
}
function CloseChamberSkill() {
    OCChamberSkill.classList.remove('open')
}
function showChamberQ() {
    ChamberSkillQ.classList.add('open')
    ChamberSkillQin4.classList.add('open')
}
function CloseChamberQ() {
    ChamberSkillQ.classList.remove('open')
    ChamberSkillQin4.classList.remove('open')
    ChamberSkillQin4.classList.add('close')
    ChamberSkillQ.classList.add('close')
}
function showChamberE() {
    ChamberSkillE.classList.add('open')
    ChamberSkillEin4.classList.add('open')
}
function CloseChamberE() {
    ChamberSkillE.classList.remove('open')
    ChamberSkillEin4.classList.remove('open')
}
function showChamberC() {
    ChamberSkillC.classList.add('open')
    ChamberSkillCin4.classList.add('open')
}
function CloseChamberC() {
    ChamberSkillC.classList.remove('open')
    ChamberSkillCin4.classList.remove('open')
}
function showChamberX() {
    ChamberSkillX.classList.add('open')
    ChamberSkillXin4.classList.add('open')
}
function CloseChamberX() {
    ChamberSkillX.classList.remove('open')
    ChamberSkillXin4.classList.remove('open')
}
// End: Chamber Skill

// Begin: Omen Skill
const OComenSkill = document.querySelector('.js-Omen-skill')
const OmenSkillQ = document.querySelector('.js-Omen-Q')
const OmenSkillQin4 = document.querySelector('.js-Omen-Q-in4')
const OmenSkillE = document.querySelector('.js-Omen-E')
const OmenSkillEin4 = document.querySelector('.js-Omen-E-in4')
const OmenSkillC = document.querySelector('.js-Omen-C')
const OmenSkillCin4 = document.querySelector('.js-Omen-C-in4')
const OmenSkillX = document.querySelector('.js-Omen-X')
const OmenSkillXin4 = document.querySelector('.js-Omen-X-in4')

function showOmenSkill() {
    OComenSkill.classList.add('open')
}
function CloseOmenSkill() {
    OComenSkill.classList.remove('open')
}
function showOmenQ() {
    OmenSkillQ.classList.add('open')
    OmenSkillQin4.classList.add('open')
}
function CloseOmenQ() {
    OmenSkillQ.classList.remove('open')
    OmenSkillQin4.classList.remove('open')
    OmenSkillQin4.classList.add('close')
    OmenSkillQ.classList.add('close')
}
function showOmenE() {
    OmenSkillE.classList.add('open')
    OmenSkillEin4.classList.add('open')
}
function CloseOmenE() {
    OmenSkillE.classList.remove('open')
    OmenSkillEin4.classList.remove('open')
}
function showOmenC() {
    OmenSkillC.classList.add('open')
    OmenSkillCin4.classList.add('open')
}
function CloseOmenC() {
    OmenSkillC.classList.remove('open')
    OmenSkillCin4.classList.remove('open')
}
function showOmenX() {
    OmenSkillX.classList.add('open')
    OmenSkillXin4.classList.add('open')
}
function CloseOmenX() {
    OmenSkillX.classList.remove('open')
    OmenSkillXin4.classList.remove('open')
}
// End: Omen Skill

// End: Skill JS

// CLick zone
JettName.addEventListener('click', function(){
    showJett()
    CloseBrimm()
    CloseOmen()
    CloseSova()
    CloseChamber()

    showJettQ()
    CloseJettC()
    CloseJettX()
    CloseJettE()
    showJettSkill()
    CloseBrimmSkill()
    CloseSovaSkill()
    CloseChamberSkill()
    CloseOmenSkill()
 })

 JettSkillQ.addEventListener('click', function(){
    showJettQ()
    CloseJettC()
    CloseJettX()
    CloseJettE()
    CloseBrimmSkill()
    CloseSovaSkill()
    CloseChamberSkill()
    CloseOmenSkill()
 })

 JettSkillE.addEventListener('click', function(){
    CloseJettQ()
    CloseJettC()
    CloseJettX()
    showJettE()
    CloseBrimmSkill()
    CloseSovaSkill()
    CloseChamberSkill()
    CloseOmenSkill()
 })

 JettSkillC.addEventListener('click', function(){
     CloseJettQ()
     CloseJettE()
     CloseJettX()
     showJettC()
     CloseBrimmSkill()
     CloseSovaSkill()
     CloseChamberSkill()
     CloseOmenSkill()
 })

 JettSkillX.addEventListener('click', function(){
     CloseJettQ()
     CloseJettE()
     CloseJettC()
     showJettX()
     CloseBrimmSkill()
     CloseSovaSkill()
     CloseChamberSkill()
     CloseOmenSkill()
 })

 Brimm.addEventListener('click', function(){
    showBrimm()
    CloseJett()
    CloseOmen()
    CloseSova()
    CloseChamber()

    showBrimmQ()
    CloseBrimmC()
    CloseBrimmE()
    CloseBrimmX()
    showBrimmSkill()
    CloseJettSkill()
    CloseSovaSkill()
    CloseChamberSkill()
    CloseOmenSkill()
 })

 BrimmSkillQ.addEventListener('click', function(){
     showBrimmQ()
     CloseBrimmC()
     CloseBrimmX()
     CloseBrimmE()
     
     CloseJettSkill()
     CloseSovaSkill()
     CloseChamberSkill()
     CloseOmenSkill()
 })

 BrimmSkillE.addEventListener('click', function(){
     CloseBrimmQ()
     CloseBrimmC()
     CloseBrimmX()
     showBrimmE()
     CloseJettSkill()
     CloseSovaSkill()
     CloseChamberSkill()
     CloseOmenSkill()
 })

 BrimmSkillC.addEventListener('click', function(){
     CloseBrimmQ()
     CloseBrimmE()
     CloseBrimmX()
     showBrimmC()
     CloseJettSkill()
     CloseSovaSkill()
     CloseChamberSkill()
     CloseOmenSkill()
 })

BrimmSkillX.addEventListener('click', function(){
     CloseBrimmQ()
     CloseBrimmE()
     CloseBrimmC()
     showBrimmX()
     CloseJettSkill()
     CloseSovaSkill()
     CloseChamberSkill()
     CloseOmenSkill()
})

SovaName.addEventListener('click', function(){
     showSova()
     CloseBrimm()
     CloseJett()
     CloseOmen()
     CloseChamber()
     CloseJettSkill()
     CloseBrimmSkill()
     showSovaQ()
    CloseChamberSkill()
     CloseOmenSkill()
     showSovaSkill()
    })

SovaSkillQ.addEventListener('click', function(){
    showSovaQ()
    CloseSovaC()
    CloseSovaX()
    CloseSovaE()
    CloseJettSkill()
    CloseBrimmSkill()
    CloseChamberSkill()
    CloseOmenSkill()
})
    
SovaSkillE.addEventListener('click', function(){
    CloseSovaQ()
    CloseSovaC()
    CloseSovaX()
    showSovaE()
    CloseJettSkill()
    CloseBrimmSkill()
    CloseChamberSkill()
    CloseOmenSkill()
})
    
SovaSkillC.addEventListener('click', function(){
    CloseSovaQ()
    CloseSovaE()
    CloseSovaX()
    showSovaC()
    CloseJettSkill()
    CloseBrimmSkill()
    CloseChamberSkill()
    CloseOmenSkill()
})
    
SovaSkillX.addEventListener('click', function(){
    CloseSovaQ()
    CloseSovaE()
    CloseSovaC()
    showSovaX()
    CloseJettSkill()
    CloseBrimmSkill()
    CloseChamberSkill()
    CloseOmenSkill()
})

ChamberName.addEventListener('click', function(){
    showChamber()
    CloseBrimm()
    CloseJett()
    CloseOmen()
    CloseSova()
    CloseJettSkill()
    CloseBrimmSkill()
    CloseSovaSkill()
    showChamberQ()
    CloseOmenSkill()
    showChamberSkill()
})

ChamberSkillQ.addEventListener('click', function(){
    showChamberC()
    CloseChamberQ()
    CloseChamberX()
    CloseChamberE()
    CloseJettSkill()
    CloseBrimmSkill()
    CloseSovaSkill()
    CloseOmenSkill()
})

ChamberSkillE.addEventListener('click', function(){
    CloseChamberQ()
    CloseChamberX()
    CloseChamberC()
    showChamberE()
    CloseJettSkill()
    CloseBrimmSkill()
    CloseSovaSkill()
    CloseOmenSkill()
})

ChamberSkillC.addEventListener('click', function(){
    CloseChamberQ()
    CloseChamberX()
    CloseChamberE()
    showChamberC()
    CloseJettSkill()
    CloseBrimmSkill()
    CloseSovaSkill()
    CloseOmenSkill()
})

ChamberSkillX.addEventListener('click', function(){
    CloseChamberQ()
    CloseChamberE()
    CloseChamberC()
    showChamberX()
    CloseJettSkill()
    CloseBrimmSkill()
    CloseSovaSkill()
    CloseOmenSkill()
})

OmenName.addEventListener('click', function(){
    showOmen()
    CloseBrimm()     
    CloseJett()
    CloseSova()
    CloseChamber()
    CloseJettSkill()
    CloseBrimmSkill()
    CloseSovaSkill()
    CloseChamberSkill()
    showOmenQ()
    showOmenSkill()
})

OmenSkillQ.addEventListener('click', function(){
    showOmenQ()
    CloseOmenC()
    CloseOmenX()
    CloseOmenE()
    CloseJettSkill()
    CloseBrimmSkill()
    CloseSovaSkill()
    CloseChamberSkill()
})

OmenSkillE.addEventListener('click', function(){
    CloseOmenQ()
    CloseOmenC()
    CloseOmenX()
    showOmenE()
    CloseJettSkill()
    CloseBrimmSkill()
    CloseSovaSkill()
    CloseChamberSkill()
})

OmenSkillC.addEventListener('click', function(){
    CloseOmenQ()
    CloseOmenX()
    CloseOmenE()
    showOmenC()
    CloseJettSkill()
    CloseBrimmSkill()
    CloseSovaSkill()
    CloseChamberSkill()
})

OmenSkillX.addEventListener('click', function(){
    CloseOmenQ()
    CloseOmenC()
    showOmenX()
    CloseOmenE()
    CloseJettSkill()
    CloseBrimmSkill()
    CloseSovaSkill()
    CloseChamberSkill()
})