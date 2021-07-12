// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory=(numb, arr)=>{
  return {
    specimenNum : numb,
    dna : arr,
    mutate(){
      let randomIndex = Math.floor(Math.random()*15);
      let randomDNABase = this.dna[randomIndex];
      this.dna[randomIndex] = ['A', 'T', 'C', 'G'].find(x => x !== randomDNABase);
      return this.dna;
    },
    compareDNA(AnopAequor){
      let numIdenticalDna = 0;
      for(let i in this.dna){
        (this.dna[i] === AnopAequor.dna[i]) && numIdenticalDna++
      }
      console.log(`specimen #${this.specimenNum} and specimen #${AnopAequor.specimenNum} have ${Math.floor((numIdenticalDna/15)*100)}% DNA in common`);
    },

     willLikelySurvive(){
      let Cpercent =((this.dna.filter(x => x === 'C')).length/15) * 100;
      console.log(Cpercent);
      let Gpercent =((this.dna.filter(x => x === 'G')).length/15) * 100;
      console.log(Gpercent);
      return (Cpercent >= 60 || Gpercent >= 60)
              ? true
              :false
    }
  }
}

let pAequorToSurvive = [];
for(let i = 0; i < 30; i++){
  pAequorToSurvive[i] = pAequorFactory(i+1, mockUpStrand());
}

