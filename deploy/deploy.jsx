async function main() {
    const Voting = await ethers.getContractFactory("Voting");
  
 
    const Voting_ = await Voting.deploy(["Joanne", "Sydney", "Annamaria", "Soul","Sameera"], 90);
    console.log("Contract address:", Voting_.address);
  
  
  }
  
  main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });