const QDATA = [
  {topic:"dna_rna",tn:"DNA & RNA",level:"easy",q:"What does DNA stand for?",opts:["Deoxyribonucleic Acid","Diribonucleic Acid","Deoxyribose Amino Acid","Double Nucleic Acid"],ans:0,exp:"DNA = Deoxyribonucleic Acid. It is found in the nucleus and stores genetic information — the blueprint of life."},
  {topic:"dna_rna",tn:"DNA & RNA",level:"easy",q:"Why is a Gene called the 'basic unit of heredity'?",opts:["Because it is the smallest particle","Because it is responsible for expressing traits of any organism or cell","Because it is only found in bacteria","Because it is made of protein"],ans:1,exp:"A gene is responsible for expressing the traits of any organism or cell. Genes combined together form DNA."},
  {topic:"dna_rna",tn:"DNA & RNA",level:"easy",q:"What is a Plasmid?",opts:["A large linear DNA","A small circular DNA found in Bacteria","A protein inside cells","A part of ribosome"],ans:1,exp:"A plasmid is a small circular DNA found in bacteria. It is widely used in Recombinant DNA Technology."},
  {topic:"dna_rna",tn:"DNA & RNA",level:"medium",q:"Which 4 nitrogenous bases are present in DNA?",opts:["Adenine, Uracil, Cytosine, Guanine","Adenine, Thymine, Cytosine, Guanine","Adenine, Thymine, Cytosine, Uracil","Ribose, Thymine, Cytosine, Guanine"],ans:1,exp:"DNA has 4 nitrogenous bases: A, T, C, G. RNA has Uracil instead of Thymine."},
  {topic:"dna_rna",tn:"DNA & RNA",level:"medium",q:"What is the function of mRNA?",opts:["To carry amino acids to ribosome","To give instructions for protein synthesis via Transcription","To make proteins in ribosomes","To control gene expression"],ans:1,exp:"mRNA is created from DNA via Transcription in the nucleus. It carries protein synthesis instructions to the ribosome."},
  {topic:"dna_rna",tn:"DNA & RNA",level:"medium",q:"What is the difference between Transcription and Translation?",opts:["Both are the same process","Transcription: DNA→mRNA; Translation: mRNA→Protein","Transcription makes protein; Translation makes RNA","Transcription happens in cytoplasm"],ans:1,exp:"Transcription: DNA → mRNA (nucleus). Translation: mRNA → Protein (ribosome in cytoplasm)."},
  {topic:"dna_rna",tn:"DNA & RNA",level:"hard",q:"What is the primary function of Micro RNA (miRNA)?",opts:["Directly synthesize proteins","Help in DNA replication","Regulate gene expression and control amount and timing of protein production","Help in ribosome formation"],ans:2,exp:"Micro RNA regulates gene expression and controls both the amount and timing of protein production in cells."},
  {topic:"dna_rna",tn:"DNA & RNA",level:"hard",q:"What is Reverse Transcription?",opts:["Making DNA from Protein","Making DNA from RNA — occurs in Retroviruses like HIV","Making RNA from DNA","Translation happening in reverse"],ans:1,exp:"In Reverse Transcription, DNA is made from RNA. This occurs in Retroviruses like HIV."},
  {topic:"dna_rna",tn:"DNA & RNA",level:"upsc",q:"What is the relationship between Chromatin and Chromosome?",opts:["They are completely different structures","Chromatin condenses to form Chromosomes during cell division","Chromosomes condense to form Chromatin","Chromatin is only found in bacteria"],ans:1,exp:"During cell division, chromatin network condenses and associates together to form chromosomes — different states of the same material."},
  {topic:"dna_rna",tn:"DNA & RNA",level:"upsc",q:"All RNA present inside a cell is collectively called?",opts:["Proteome","Genome","Transcriptome","Chromatome"],ans:2,exp:"All RNA present inside a cell is collectively called the Transcriptome."},
  {topic:"genome",tn:"Genome",level:"easy",q:"What is a Genome?",opts:["A type of protein","The complete set of genetic material in any organism","Only the coding DNA","Another name for chromosome"],ans:1,exp:"Genome is the complete collection of all genetic material (DNA) present in any organism."},
  {topic:"genome",tn:"Genome",level:"easy",q:"When did the Human Genome Project begin?",opts:["Early 1980s","Early 1990s","Early 2000s","Late 1970s"],ans:1,exp:"The Human Genome Project began in the early 1990s — the first organized attempt to read the human genome."},
  {topic:"genome",tn:"Genome",level:"medium",q:"Who started the Indian Genome Project?",opts:["ISRO; 50,000 genomes","Department of Biotechnology; 10,000 individuals across India","ICMR; 1,00,000 genomes","IIT; only urban population"],ans:1,exp:"The Indian Genome Project was started by the Department of Biotechnology, collecting genome sequences of 10,000 individuals."},
  {topic:"genome",tn:"Genome",level:"medium",q:"How does Genome study help us?",opts:["Only useful in agriculture","Understanding disease patterns, developing therapies, understanding evolutionary processes","Only for criminal identification","No practical use"],ans:1,exp:"Genome study helps: (1) Understand gene-related disease patterns (2) Develop personalised therapies (3) Understand evolutionary processes."},
  {topic:"genome",tn:"Genome",level:"hard",q:"What is the objective of the Synthetic Genome Project?",opts:["To create a new species","To construct the human genome from scratch for better understanding of human body functions","To delete existing genomes","Only to build plant genomes"],ans:1,exp:"The Synthetic Genome Project aims to construct the human genome from scratch at the global level."},
  {topic:"genome",tn:"Genome",level:"upsc",q:"What is a Metagenome and its importance in environmental studies?",opts:["Genome of a single organism","Collection of genomes of microbes in an environment — important for understanding biodiversity and ecosystem health","Only bacteria in human body","An ancient genome"],ans:1,exp:"Metagenome = genomes of all microbes in an environment. Important for: soil health, new antibiotic discovery, pollution tracking, studying unculturable microbes."},
  {topic:"recombinant",tn:"Recombinant DNA",level:"easy",q:"What is used in Recombinant DNA Technology?",opts:["Only viral DNA","Plasmid obtained from Bacteria","Human WBCs","Mitochondrial DNA"],ans:1,exp:"Recombinant DNA Technology uses the plasmid obtained from bacteria — a simple circular DNA with very little impact on bacteria."},
  {topic:"recombinant",tn:"Recombinant DNA",level:"medium",q:"What is the correct sequence in Recombinant DNA Technology?",opts:["Only copy viral DNA","Extract plasmid → cut specific part → replace with coding DNA → insert Recombinant DNA into bacteria","Directly transfer human genes","Duplicate chromosomes in lab"],ans:1,exp:"Steps: (1) Extract plasmid from bacteria (2) Cut specific portion (3) Replace with coding DNA → Recombinant DNA (4) Insert into bacteria (5) Bacteria synthesizes desired Recombinant Protein."},
  {topic:"recombinant",tn:"Recombinant DNA",level:"hard",q:"How is CAR (Chimeric Antigen Receptor) produced?",opts:["Directly from human blood","Cut plasmid → add another DNA → Recombinant DNA → Protein (CAR) → attach to T-cells","Only from viral infection","By radiation treatment"],ans:1,exp:"CAR: Plasmid cut → another DNA added → Recombinant DNA → Protein (CAR) → Chimeric Antigen Receptor, used in CAR-T Cell Therapy."},
  {topic:"recombinant",tn:"Recombinant DNA",level:"upsc",q:"What is a Recombinant Protein? Give examples.",opts:["A naturally occurring protein","Protein synthesized by bacteria after inserting Recombinant DNA — e.g., Insulin (Humulin), Hepatitis B vaccine, Growth Hormone","A protein from viruses","A synthetic chemical"],ans:1,exp:"Recombinant Protein: desired protein produced by bacteria with Recombinant DNA. Examples: Human Insulin (Humulin), Hepatitis B vaccine, Human Growth Hormone, CAR for CAR-T Therapy."},
  {topic:"cart",tn:"CAR-T Cell",level:"easy",q:"What is the full form of CAR in CAR-T Cell Therapy?",opts:["Cellular Antigen Receptor","Chimeric Antigen Receptor","Cancer Activation Receptor","Cytokine Antigen Response"],ans:1,exp:"CAR = Chimeric Antigen Receptor — a monoclonal antibody that helps T-cells recognize and destroy cancer cells."},
  {topic:"cart",tn:"CAR-T Cell",level:"easy",q:"What is the role of T-cells in the body?",opts:["Transport oxygen","Fight against defective or mutative cells like cancer cells","Help in digestion","Produce hormones"],ans:1,exp:"T-cells are part of the immune system responsible for fighting against defective or mutative cells such as cancer cells."},
  {topic:"cart",tn:"CAR-T Cell",level:"medium",q:"What is the step-by-step process of CAR-T Cell Therapy?",opts:["Give chemotherapy directly","Patient's blood → WBC → T-cell → Add CAR → Multiply in lab → Infuse in body → Kill cancer cells","Kill cancer cells using radiation","Only medication"],ans:1,exp:"Process: Patient's blood → T-cells isolated from WBCs → CAR added → Multiplied in lab → Infused back into body → T-cells recognize, bind with, and kill cancer cells."},
  {topic:"cart",tn:"CAR-T Cell",level:"medium",q:"What is NexCAR-19?",opts:["A COVID-19 vaccine","An indigenous Indian CAR-T therapy for treatment of B-cell lymphoma","An antibiotic drug","A genome sequencing tool"],ans:1,exp:"NexCAR-19 is an indigenous CAR-T Cell Therapy developed in India for treatment of B-cell lymphoma."},
  {topic:"cart",tn:"CAR-T Cell",level:"hard",q:"What are the major challenges of CAR-T Cell Therapy?",opts:["No challenges","Generally effective only for blood/fluid cancers, potential for fresh mutations, very expensive","Only works for solid tumors","Only for children"],ans:1,exp:"CAR-T challenges: (1) Effective mainly for blood/fluid cancers (2) Potential for fresh mutations (3) Very expensive."},
  {topic:"cart",tn:"CAR-T Cell",level:"upsc",q:"Why is CAR-T Cell Therapy considered revolutionary in cancer treatment?",opts:["It's just a simple vaccine","Trains patient's own T-cells to target cancer precisely — personalised; NexCAR-19 gave India global recognition","It's the cheapest treatment","It has no side effects"],ans:1,exp:"Revolutionary: (1) Highly personalised — uses patient's own cells (2) Targeted — attacks only cancer cells (3) Long-lasting immunity. NexCAR-19 provided affordable indigenous option for B-cell lymphoma."},
  {topic:"amr",tn:"AMR & Phage",level:"easy",q:"What is Anti-Microbial Resistance (AMR)?",opts:["Human allergy to medicines","Development of resistance among microbes against medicines","Running out of antibiotics","Name of a new disease"],ans:1,exp:"AMR occurs when microbes develop resistance against medicines, making them ineffective."},
  {topic:"amr",tn:"AMR & Phage",level:"medium",q:"Which are the major factors responsible for AMR?",opts:["Only water scarcity","Self-medication, over-prescribing, easy OTC drug availability, improper bio-medical waste disposal","Only hospital infections","Only in developing countries"],ans:1,exp:"4 major AMR factors: (1) Self-medication (2) Over-prescribing by doctors (3) Easy OTC drug availability (4) Improper disposal of bio-medical waste."},
  {topic:"amr",tn:"AMR & Phage",level:"medium",q:"What is a Bacteriophage?",opts:["An antibiotic medicine","A virus that infects bacteria and introduces changes in their genetic makeup","A type of bacteria","A gene editing tool"],ans:1,exp:"A bacteriophage is a virus that infects bacteria, introducing changes in its genetic makeup. Used in Phage Therapy to treat bacterial infections."},
  {topic:"amr",tn:"AMR & Phage",level:"hard",q:"When is Phage Therapy especially useful?",opts:["Only in viral infections","In AMR cases when antibiotics no longer work — bacteriophage can target drug-resistant bacteria","Only in cancer treatment","Only in pediatric patients"],ans:1,exp:"Phage Therapy is specially useful in AMR cases. The bacteriophage can be specifically designed to harm drug-resistant bacteria from inside."},
  {topic:"amr",tn:"AMR & Phage",level:"upsc",q:"Why has WHO described AMR as a 'silent pandemic'?",opts:["Because it makes a lot of noise","Slowly spreading globally without attention, putting millions at risk; self-medication and OTC drugs are major Indian factors","Only occurs during pandemics","Only WHO's perception"],ans:1,exp:"Silent pandemic: slow development, no visible symptoms, growing unnoticed. Solutions: antibiotic stewardship, surveillance, phage therapy, restricting OTC antibiotics."},
  {topic:"chromosomes",tn:"Chromosomes",level:"easy",q:"What is Chromatin?",opts:["A protein name","Inside the cell, DNA present as condensed network — precursor of chromosomes","A virus name","A part of mitochondria"],ans:1,exp:"Chromatin is the condensed network of DNA inside a cell. During cell division it condenses to form chromosomes."},
  {topic:"chromosomes",tn:"Chromosomes",level:"medium",q:"What is the difference between Functional and Artificial Chromosomes?",opts:["Both are the same","Functional = naturally occurring; Artificial = created in lab by joining DNA fragments","Functional = only in bacteria; Artificial = only in humans","Functional = smaller"],ans:1,exp:"Functional chromosomes occur naturally. Artificial chromosomes are created in lab by joining DNA fragments — used in gene therapy, disease detection, evolutionary studies."},
  {topic:"chromosomes",tn:"Chromosomes",level:"medium",q:"What is the function of the Centromere?",opts:["To replicate DNA","Section of chromosome binding chromatid arms; contains Satellite DNA","To synthesize proteins","To stop cell division"],ans:1,exp:"Centromere is the section of a chromosome that binds the chromatid arms. The DNA in centromere is called Satellite DNA."},
  {topic:"chromosomes",tn:"Chromosomes",level:"hard",q:"What does 'Short Tandem Repeat' mean in Satellite DNA?",opts:["DNA that jumps","In microsatellite DNA, repeating sequences of 1-9 base pairs","Only outside centromere","Found in cancer cells only"],ans:1,exp:"Short Tandem Repeat = repeating sequences in microsatellite DNA. Microsatellites: 1-9 bp, Minisatellites: 10-100 bp, Macrosatellites: >100 bp."},
  {topic:"chromosomes",tn:"Chromosomes",level:"upsc",q:"What is the role of Satellite DNA in DNA Fingerprinting?",opts:["No role","Each individual has unique satellite DNA patterns — used in forensics, paternity determination, criminal identification","Only in medical diagnosis","Only in plants"],ans:1,exp:"Satellite DNA has unique patterns per individual. Applications: paternity determination, forensic analysis, evolutionary studies, population genetics."},
  {topic:"crispr",tn:"CRISPR & Jumping Genes",level:"easy",q:"What are Jumping Genes (Transposable Elements)?",opts:["Genes that jump between species","Genes that change their position in DNA (copy-paste or cut-paste)","Viral genes that enter cells","Genes outside chromosomes"],ans:1,exp:"Jumping Genes can change their position in DNA by copy-paste (move to new position, stay in old too) or cut-paste (leave old position)."},
  {topic:"crispr",tn:"CRISPR & Jumping Genes",level:"medium",q:"What percentage of human genome consists of Jumping Genes?",opts:["Less than 1%","About 10%","More than 40%","About 90%"],ans:2,exp:"More than 40% of genes in the human body are jumping genes or transposable elements."},
  {topic:"crispr",tn:"CRISPR & Jumping Genes",level:"medium",q:"What is the current scientific understanding of Non-Coding DNA (formerly 'Junk DNA')?",opts:["Completely worthless","May regulate gene expression — Non-coding DNA/Introns could be responsible for gene regulation","Only in cancer cells","Evolutionary garbage"],ans:1,exp:"Recent research suggests Non-coding DNA or Introns may be responsible for regulating gene expression — an active research area."},
  {topic:"crispr",tn:"CRISPR & Jumping Genes",level:"hard",q:"How did Restriction Enzymes inspire gene editing technology?",opts:["They directly created CRISPR","Bacteria use restriction enzymes to cut viral DNA — this natural defense inspired CRISPR-CAS9","Only helped develop antibiotics","Made only in labs"],ans:1,exp:"Bacteria release restriction enzymes that cut viral genetic sequences. This natural defense mechanism inspired gene editing technology like CRISPR-CAS9."},
  {topic:"crispr",tn:"CRISPR & Jumping Genes",level:"upsc",q:"What is CRISPR-CAS9? Applications and ethical challenges?",opts:["Only a lab technique","Precise gene editing tool — revolutionary in medicine (genetic diseases) and agriculture (GM crops) — but raises ethical concerns like designer babies","Only works on plants","Still experimental, no real applications"],ans:1,exp:"CRISPR-CAS9: Inspired by restriction enzymes, precision gene editing. Applications: sickle cell cure, cancer treatment, GM crops. Ethical issues: germline editing, designer babies, equity, biosafety."},
  {topic:"mito",tn:"Mitochondrial DNA",level:"medium",q:"What is Extra-Chromosomal DNA?",opts:["DNA inside chromosome","DNA outside chromosomes — e.g., DNA in mitochondria of eukaryotes","DNA found only in plants","A type of RNA"],ans:1,exp:"Extra-chromosomal DNA is found outside chromosomes. In eukaryotes, trace DNA is present in mitochondria. Defective mitochondrial DNA causes congenital defects."},
  {topic:"mito",tn:"Mitochondrial DNA",level:"hard",q:"What is Mitochondrial Replacement Therapy (Three-Parent Baby)?",opts:["Therapy using three medicines","Mother's defective mitochondria replaced by healthy donor mitochondria — prevents mitochondrial disease","CRISPR-based therapy","Cancer therapy with three donors"],ans:1,exp:"The defective mitochondria of the mother's ovum cell is replaced by healthy mitochondria from a donor. Father is NOT responsible as sperm's mitochondria are destroyed during fertilization."},
  {topic:"mito",tn:"Mitochondrial DNA",level:"upsc",q:"What congenital problems can defective mitochondrial DNA cause? Why is the father not responsible?",opts:["No problems; father is responsible","May cause hole in heart, undeveloped organs at birth; father not responsible because sperm's mitochondria are destroyed during fertilization","Father is fully responsible","Only causes mental disorders"],ans:1,exp:"Defective mitochondrial DNA causes congenital effects: hole in heart, undeveloped organs. Father is NOT responsible because all sperm components except genetic material (including mitochondria) are destroyed during fertilization."},

  /* ══════════════════ ECOLOGY — Individual & Abiotic Components ══════════════════ */
  /* TEMPERATURE */
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"easy",q:"Which of the following best describes 'Basal Metabolism' in the context of temperature?",opts:["The maximum energy an organism can produce","The energy required for basic body functions like breathing, blood circulation, cell growth and nerve functions","The energy stored in fat cells during hibernation","The rate of photosynthesis at optimal temperature"],ans:1,exp:"Basal metabolism refers to the energy required for basic body functions including breathing, blood circulation, cell growth, and nerve functions."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"easy",q:"Organisms that can tolerate only a narrow range of temperature are called:",opts:["Eurythermal","Stenohaline","Stenothermal","Euryhaline"],ans:2,exp:"Stenothermal organisms can tolerate only a narrow range of temperature. Examples: Coral polyps, fishes, amphibians."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"easy",q:"Which of the following is an example of a Eurythermal organism?",opts:["Coral polyps","Amphibians","Fishes","Humans"],ans:3,exp:"Eurythermal organisms can tolerate a broad range of temperature. Examples: Humans, monkeys, cows, goats."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"medium",q:"Temperature is important for producers mainly because it affects:",opts:["Only reproduction","Photosynthesis, thermoregulation and distribution of absorbed nutrients and food-based energy","Only water absorption","Only seed germination"],ans:1,exp:"For producers, temperature affects photosynthesis, thermoregulation, and distribution of absorbed nutrients and energy from food."},
  /* WATER & SALINITY */
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"easy",q:"Organisms with narrow salinity tolerance range are called:",opts:["Eurythermal","Stenothermal","Stenohaline","Euryhaline"],ans:2,exp:"Stenohaline organisms have a narrow salinity tolerance range. Examples: Goldfish, Haddock, Coral, Frog."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"medium",q:"Which of the following is an example of a Euryhaline organism?",opts:["Goldfish","Coral polyps","Estuarine crocodile","Frogs"],ans:2,exp:"Euryhaline organisms can tolerate a broad range of salinity. Examples: Eels, Herrings, Salmon, Estuarine crocodile, Estuarine crab."},
  /* LIGHT */
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"medium",q:"What percentage of sunlight is actually usable by plants for photosynthesis?",opts:["50%","100%","2-10%","25%"],ans:2,exp:"Out of 100 units of sunlight, only 50% is usable (PAR), and plants actually use only 2-10% of that for photosynthesis."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"easy",q:"Light is important for consumers mainly because it helps in:",opts:["Photosynthesis only","Nutrition, migration, foraging (search for food) and breeding","Water absorption","Seed germination"],ans:1,exp:"For consumers, light is important for nutrition, migration, foraging (search for food), and breeding activities."},
  /* SOIL */
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"easy",q:"What percentage of soil is made up of minerals?",opts:["5%","50%","45%","25%"],ans:2,exp:"Soil composition: 50% water & gases, 45% minerals, 5% dead organic matter (D.M.)."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"easy",q:"Soil is important for consumers mainly because it provides:",opts:["Oxygen directly","Nutrients through plants, shelter for animals and breeding ground","Water through rain","Direct food"],ans:1,exp:"Soil provides consumers with nutrients (through plants), shelter for animals, and breeding ground."},
  /* RESPONSES TO ABIOTIC CHANGES */
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"medium",q:"What is Thermoregulation?",opts:["Regulation of water balance inside body","Process that helps maintain constant internal body temperature through mechanisms like shivering and sweating","Process of food digestion","Regulation of salt balance"],ans:1,exp:"Thermoregulation helps maintain constant internal temperature. Example: Humans shiver in cold and sweat in heat."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"medium",q:"Osmoregulation helps maintain:",opts:["Constant body temperature","Constant salt concentration","Constant water balance inside the body","Constant blood pressure"],ans:2,exp:"Osmoregulation helps maintain constant water balance inside the body through processes of Osmosis and Diffusion."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"medium",q:"In Osmosis, water (solvent) moves from:",opts:["High concentration to low concentration without membrane","Low concentration solution to high concentration through semi-permeable membrane","High concentration to low concentration through semi-permeable membrane","Any direction regardless of concentration"],ans:1,exp:"Osmosis is the movement of water (solvent) from low concentration solution to high concentration through a semi-permeable membrane."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"medium",q:"Diffusion differs from Osmosis because in Diffusion:",opts:["Only water moves","Movement is from low to high concentration","Both solute and solvent flow from high to low concentration with or without semi-permeable membrane","It only occurs in plants"],ans:2,exp:"Diffusion is a flow of both solute and solvent from high concentration to low concentration with or without a semi-permeable membrane."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"medium",q:"In the 'Conform' response to changing abiotic conditions, an organism:",opts:["Maintains constant internal body conditions","Changes its internal body conditions as per the external conditions","Migrates to a new habitat","Goes into deep sleep"],ans:1,exp:"In Conform response, the living organism changes its internal body conditions as per the external conditions. Examples: Plants close stomata or shed leaves; animals change metabolic rate."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"medium",q:"Migration is defined as:",opts:["Permanent movement to a new habitat","A temporary outward movement from the native habitat to escape harsh conditions","Going into deep sleep during cold conditions","Changing metabolic rate to adapt"],ans:1,exp:"Migration is a temporary outward movement from the native habitat to escape harsh conditions. Example: Siberian Crane migrating to India in winter."},
  /* DORMANCY */
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"medium",q:"What is 'Suspend' (Dormancy) in organisms?",opts:["Permanent death-like state","A state of reduced body activities where metabolism, breathing falls, developmental processes are suspended and organism goes into deep sleep","Active movement to find food","Rapid metabolic activity"],ans:1,exp:"Suspend/Dormancy is a state of reduced body activities where rate of metabolism and breathing falls, developmental processes are suspended and the organism goes into deep sleep."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"easy",q:"Hibernation occurs in which type of condition?",opts:["Hot and dry conditions","Unfavorable conditions","Cold conditions","Saline conditions"],ans:2,exp:"Hibernation occurs in cold conditions. Examples: Bears, Bats, Snails."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"easy",q:"Aestivation is a type of dormancy that occurs in:",opts:["Cold conditions","Warm conditions","Saline conditions","Dark conditions"],ans:1,exp:"Aestivation occurs in warm conditions. Examples: Salamander, some snails, some reptiles."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"medium",q:"Diapause is a type of dormancy seen in:",opts:["Bears and bats","Zooplanktons","Reptiles only","Higher mammals"],ans:1,exp:"Diapause occurs under unfavorable conditions. It is seen in Zooplanktons."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"hard",q:"What is the key difference between Hibernation and Brumation?",opts:["Hibernation is for warm conditions, Brumation for cold","In Brumation (seen in reptiles), the animal wakes up in the middle, unlike continuous hibernation","Brumation is for mammals, Hibernation for reptiles","There is no difference"],ans:1,exp:"Brumation is a cold-condition dormancy seen in reptiles. Unlike hibernation where the animal sleeps continuously, in brumation the animal wakes up in the middle."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"hard",q:"Torpor differs from Hibernation because:",opts:["Torpor occurs in warm conditions","Torpor is involuntary (without will) whereas hibernation is voluntary","Torpor only occurs in plants","Torpor occurs in hot conditions"],ans:1,exp:"Torpor is a cold condition dormancy (seen in snails, snakes) that is involuntary — it happens without the organism's will, unlike hibernation."},
  /* PLANT ADAPTATIONS */
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"medium",q:"Shade-tolerant plants (Sciophytes) are characterized by:",opts:["Small leaves with less chlorophyll","Broad leaves with more chlorophyll (dark green leaves) and reduced rate of growth","Thorny leaves with tap root system","Fewer stomata"],ans:1,exp:"Shade-tolerant plants (Sciophytes) have broad leaves with more chlorophyll (dark green leaves) and reduced rate of growth. Examples: Herbaceous palms, Fern, Money plant, Mosses."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"medium",q:"Sunlight-tolerant plants (Heliophytes) are characterized by:",opts:["Broad leaves with more chlorophyll","Small leaves with less chlorophyll and faster rate of growth","No stomata","Underground growth"],ans:1,exp:"Sunlight-tolerant plants (Heliophytes) have small leaves with less chlorophyll and faster rate of growth. Examples: Mango, Banana."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"medium",q:"Xerophytic plants are adapted to survive in:",opts:["Aquatic conditions","Saline conditions","Dry/arid areas — they have fewer/sunken stomata, small or thorny leaves and tap root system","Cold polar conditions"],ans:2,exp:"Xerophytic plants (dry/arid area plants) have fewer/sunken stomata openings, small or thorny leaves, and tap root system to survive in dry conditions."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"medium",q:"Ephemeral plants are characterized by:",opts:["Long lifespan with deep roots","Short duration of life — they complete their lifecycle quickly to avoid harsh conditions","Broad leaves for maximum photosynthesis","Growth only in water"],ans:1,exp:"Ephemeral plants are short duration plants that complete their lifecycle quickly to survive hot/water-stressed conditions. Examples: Thale cress (Arabidopsis thaliana), Grasses."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"hard",q:"What is CAM (Crassulacean Acid Metabolism)?",opts:["A pathway where stomata open in daytime","A photosynthesis pathway in desert plants where stomata open at night, CO2 is converted to malate and released during daytime for photosynthesis","A pathway only found in aquatic plants","A type of hibernation in plants"],ans:1,exp:"CAM pathway found in desert plants (Aloe vera, Cactus, Pineapple): stomata open at night, CO2 absorbed and converted to malate; during daytime malate is broken down to release CO2 for photosynthesis."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"hard",q:"In C4 pathway of photosynthesis, what is the first stable compound formed?",opts:["Glucose","3-PGA (3-phosphoglycerate)","Malate","Pyruvate"],ans:2,exp:"In C4 pathway, Malate is the first stable compound. CO2 is absorbed by Bundle-Sheath cells and stored as Malate. Examples of C4 plants: Sugarcane, Millets."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"hard",q:"In C3 pathway, what is the first compound formed when CO2 enters through stomata?",opts:["Malate (4-carbon)","A 3-carbon compound called 3-PGA","Glucose","Sucrose"],ans:1,exp:"In C3 pathway, CO2 enters through stomata into mesophyll cells and is converted into a 3-carbon compound called 3-PGA (3-phosphoglycerate). This 3-PGA is then used to produce glucose (Calvin cycle)."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"upsc",q:"What is Mycorrhizae fungus and what type of relationship does it represent?",opts:["A parasitic relationship where fungus harms plants","A symbiosis (mutualistic) relation between plants and fungus — plant gets nutrients and water, fungus gets food and shelter","A competitive relationship","A commensalism where only plant benefits"],ans:1,exp:"Mycorrhizae fungus represents a symbiotic (mutualistic) relation between plants and fungus. Plant gets access to nutrients and water from fungus; fungus gets food and shelter from plants."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"medium",q:"Aquatic plants (hydrophytes) have which special tissue that helps in floating?",opts:["Sclerenchyma tissue","Aerenchyma tissue","Collenchyma tissue","Parenchyma tissue"],ans:1,exp:"Aquatic plants have Aerenchyma tissues that help in floating. They also have stomata on the upper surface, poorly-developed wood system, flexible leaves, and pollination by water."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"upsc",q:"What is Vivipary mode of reproduction in mangroves (estuarine plants)?",opts:["Reproduction by spores","Seeds germinate inside the plant itself (due to excessively saline external conditions) and then transplanted outside","Reproduction by cutting","Underwater pollination"],ans:1,exp:"In Vivipary (estuarine/mangrove plants), as external conditions are excessively saline and seed germination cannot occur outside, seeds germinate inside the plant only and then transplanted outside."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"upsc",q:"What is the role of Proline in saline condition adaptation of plants?",opts:["It provides energy to the plant","It is an amino acid that protects cell membrane from excessive salt","It helps in photosynthesis","It aids in water transport"],ans:1,exp:"Proline is an amino acid produced by plants in saline conditions that protects cell membrane from excessive salt stress."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"upsc",q:"What is the role of Sorbitol in plants adapting to saline conditions?",opts:["It provides nitrogen to plants","It is a sugar alcohol that helps maintain water balance","It protects against excessive salt","It helps in photosynthesis"],ans:1,exp:"Sorbitol is a sugar alcohol that helps maintain water balance in plants adapting to saline conditions. Glycerol is another sugar-like substance that prevents loss of water."},
  /* PERMANENT ADAPTATIONS */
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"hard",q:"What is Denaturation in the context of high temperature adaptation?",opts:["Formation of new proteins","A physical change in the nature of protein that occurs due to exposure to high temperature","Breaking down of DNA","Formation of new cells"],ans:1,exp:"Denaturation is a physical change in the nature of protein that occurs due to exposure to high temperature — visible as white hairs on the body."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"hard",q:"Chaperonins are proteins that:",opts:["Cause protein denaturation","Help other proteins maintain their structure and avoid denaturation at high temperature","Break down food molecules","Store water in desert plants"],ans:1,exp:"Chaperonins are proteins (like Proline) that act as shields and help other proteins maintain their structure, avoiding denaturation that occurs due to high temperature exposure."},
  {topic:"ecology_abiotic",tn:"Ecology: Abiotic",level:"upsc",q:"Carnivorous plants like Nepenthes, Sundew, Venus Flytrap are adaptations to:",opts:["Hot and dry conditions","Saline conditions","Nutrient-poor soil conditions","Aquatic conditions"],ans:2,exp:"Carnivorous plants (Nepenthes, Sundew, Venus Flytrap, Pitcher plant) are adaptations to nutrient-poor soil conditions — they catch insects to supplement their nutrition."},

  /* ════════════════════════════════════════════════════════*/
  // ══════════════════════════════════════════════════════════════
//  BIHAR GK — SAMANYA PARICHAY  (Add to QDATA array)
//  Topic ID: "bihar_gk"
// ══════════════════════════════════════════════════════════════

// ── PAGE 1: NAAMKARAN & BHOUGOLIK STHITI ──

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"In which century did the region get the name 'Bihar' due to Buddhist Viharas?",
   opts:["8th century","10th century","12th century","14th century"],
   ans:2,
   exp:"In the 12th century, due to the large number of Buddhist Viharas (monasteries) in this region, it came to be called Bihar. These Viharas were prayer places where Buddhist monks (Bhikshu) resided."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"In which direction of India is Bihar geographically located?",
   opts:["North-West India","South-East India","North-East India","Central India"],
   ans:2,
   exp:"Bihar is located in the North-East part of India (Uttar-Purva Bharat). It shares its northern border with Nepal and is part of the Indo-Gangetic Plain."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"What is the northern-most latitude of Bihar?",
   opts:["24°20'10\" N","25°15'30\" N","27°31'15\" N","26°45'00\" N"],
   ans:2,
   exp:"Bihar's northern-most point is at 27°31'15\" N latitude. Its southern-most point is at 24°20'10\" N. Total latitudinal extent: 24°20'10\"N to 27°31'15\"N."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"What is the western-most longitude of Bihar?",
   opts:["80°15'30\" E","83°19'50\" E","85°30'20\" E","88°17'40\" E"],
   ans:1,
   exp:"Bihar's western-most longitude is 83°19'50\" E. Its eastern-most longitude is 88°17'40\" E. Total longitudinal extent: 83°19'50\"E to 88°17'40\"E."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"What is the length of Bihar from North to South?",
   opts:["245 km","345 km","445 km","483 km"],
   ans:1,
   exp:"Bihar's length from North to South (Uttar se Dakshin) is 345 km. Its width from East to West is 483 km."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"What is the width of Bihar from East to West?",
   opts:["345 km","400 km","450 km","483 km"],
   ans:3,
   exp:"Bihar's width from East to West (Purva se Pashchim) is 483 km. Its length from North to South is 345 km. The shape of the state is rectangular."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"What is the shape (Aakruti) of Bihar state?",
   opts:["Triangular (Tribhujaakar)","Circular (Vrittakar)","Rectangular (Aayatakar)","Irregular (Asamaan)"],
   ans:2,
   exp:"The shape of Bihar is Rectangular (Aayatakar). Its N-S length is 345 km and E-W width is 483 km, forming a roughly rectangular outline."},

// ── PAGE 1: KEY HISTORICAL DATES ──

  {topic:"bihar_gk",tn:"Bihar GK",level:"hard",
   q:"On which date and where was the announcement made to create a separate Bihar province?",
   opts:["22 March 1912 — Patna","1 April 1912 — Delhi","12 December 1911 — Delhi Durbar","15 August 1912 — Calcutta"],
   ans:2,
   exp:"On 12 December 1911, at the Delhi Durbar, the announcement was made to create a separate Bihar province. The formal notification was issued on 22 March 1912, and the province was constituted on 1 April 1912."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"On which date was the formal notification/announcement (Adhisoochna) for Bihar province (including Odisha) issued?",
   opts:["12 December 1911","1 April 1912","22 March 1912","1 April 1936"],
   ans:2,
   exp:"On 22 March 1912, the formal notification for the creation of Bihar (including Odisha) province was issued. This is why 22 March is celebrated as Bihar Diwas (Bihar Foundation Day)."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"On 1 April 1912, which two regions were combined to form one province?",
   opts:["Bihar and Bengal","Bihar and Jharkhand","Bihar and Odisha","Bihar and UP"],
   ans:2,
   exp:"On 1 April 1912, Bihar and Odisha (Udissa) were constituted together as one province. They were later separated on 1 April 1936 into two different states."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"In which year did Bihar and Odisha become two separate states?",
   opts:["1912","1920","1930","1936"],
   ans:3,
   exp:"On 1 April 1936, Bihar and Odisha were separated and became two distinct states. Until then, they had been governed together as a single province since 1912."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"On 15 November 2000, what percentage of Bihar's land area became part of the new Jharkhand state?",
   opts:["25%","36%","46%","56%"],
   ans:2,
   exp:"On 15 November 2000, Jharkhand was carved out of Bihar with 46% of Bihar's land area. Jharkhand became India's 28th state. This was the last major division of Bihar."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"Jharkhand was created as which numbered state of India?",
   opts:["25th","26th","27th","28th"],
   ans:3,
   exp:"Jharkhand became India's 28th state on 15 November 2000 after being carved out of Bihar with 46% of Bihar's geographical area."},

// ── PAGE 2: AREA, POPULATION, ADMINISTRATIVE DIVISION ──

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"When is Bihar Diwas (Bihar Foundation Day) celebrated every year?",
   opts:["1 April","15 November","12 December","22 March"],
   ans:3,
   exp:"Bihar Diwas is celebrated on 22 March every year. This date marks the formal notification for the creation of Bihar province in 1912."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"What is the total area of Bihar?",
   opts:["74,163 sq km","84,163 sq km","94,163 sq km","1,04,163 sq km"],
   ans:2,
   exp:"Bihar's total area is 94,163 sq km, which is 2.86% of India's total geographical area. It is India's 12th largest state by area."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"Bihar constitutes what percentage of India's total geographical area?",
   opts:["1.86%","2.50%","2.86%","3.50%"],
   ans:2,
   exp:"Bihar's area (94,163 sq km) is 2.86% of India's total area. Despite this, it is India's 3rd most populous state with 8.60% of India's population."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"By area, Bihar is India's which largest state?",
   opts:["8th","10th","12th","15th"],
   ans:2,
   exp:"Bihar is India's 12th largest state by area (94,163 sq km). However, by population it is India's 3rd largest state — showing a very high population density."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"What was Bihar's total population according to Census 2011?",
   opts:["8,40,99,452","9,40,99,452","10,40,99,452","11,40,99,452"],
   ans:2,
   exp:"As per Census 2011, Bihar's total population was 10,40,99,452 (approximately 10.41 crore), which is 8.60% of India's total population."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"Bihar's population is what percentage of India's total population (Census 2011)?",
   opts:["6.60%","7.60%","8.60%","9.60%"],
   ans:2,
   exp:"Bihar's population (10.41 crore) is 8.60% of India's total population as per Census 2011. Despite being only 2.86% of India's area, it holds 8.60% of population — indicating very high density."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"By population, Bihar is India's which largest state?",
   opts:["2nd","3rd","4th","5th"],
   ans:1,
   exp:"Bihar is India's 3rd largest state by population. Despite being 12th by area, its high population density makes it the 3rd most populous state in India."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"What is Bihar's altitude above sea level?",
   opts:["53 feet (16 metres)","112 feet (34 metres)","173 feet (53 metres)","245 feet (75 metres)"],
   ans:2,
   exp:"Bihar's average altitude above sea level is 173 feet (53 metres). This relatively low altitude is consistent with its position in the flat Indo-Gangetic plain."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"What is the average annual rainfall of Bihar?",
   opts:["82 cm","97 cm","112 cm","135 cm"],
   ans:2,
   exp:"Bihar's average annual rainfall is 112 cm (centimetres). The rainfall is primarily received during the South-West monsoon season (June–September)."},

// ── PAGE 2: PRASHASANIK VIBHAJAN (ADMINISTRATIVE DIVISIONS) ──

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"How many Pramandals (Divisions) does Bihar have?",
   opts:["7","8","9","10"],
   ans:2,
   exp:"Bihar has 9 Pramandals (Divisions): Saran, Tirhut, Darbhanga, Koshi, Purnia, Patna, Magadh, Munger, and Bhagalpur."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"How many districts does Bihar have? Which is the 38th (latest) district?",
   opts:["36 — Sheikhpura","37 — Arwal","38 — Arwal","40 — Saharsa"],
   ans:2,
   exp:"Bihar has 38 districts, and the 38th (latest) district is Arwal, carved out of Jehanabad district. Bihar also has 40 police districts (38 regular + Bagha and Nawgachia)."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"How many Anumandals (Sub-divisions) are there in Bihar?",
   opts:["88","101","154","534"],
   ans:1,
   exp:"Bihar has 101 Anumandals (Sub-divisions). Administrative hierarchy: 9 Pramandals → 38 Districts → 101 Anumandals → 534 Prakhands → 8067 Panchayats."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"How many Prakhands (Blocks) are there in Bihar?",
   opts:["345","450","534","601"],
   ans:2,
   exp:"Bihar has 534 Prkhand-sah-Anchal (Blocks). The administrative hierarchy goes: Pramandal → District → Anumandal → Prakhand → Panchayat."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"How many Panchayats are there in Bihar?",
   opts:["6067","7067","8067","9067"],
   ans:2,
   exp:"Bihar has 8067 Panchayats. This is the grass-root level of governance in rural Bihar. Urban governance includes 19 Nagar Nigams, 88 Nagar Parishads, and 154 Nagar Panchayats."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"How many Nagar Nigams (Municipal Corporations) are in Bihar, and which is the 19th?",
   opts:["17 — Darbhanga","18 — Muzaffarpur","19 — Saharsa","20 — Araria"],
   ans:2,
   exp:"Bihar has 19 Nagar Nigams (Municipal Corporations). Saharsa is the 19th and most recently added Nagar Nigam. There are also 88 Nagar Parishads and 154 Nagar Panchayats."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"How many Nagar Parishads (Municipal Councils) are there in Bihar?",
   opts:["68","78","88","98"],
   ans:2,
   exp:"Bihar has 88 Nagar Parishads (Municipal Councils). Urban local bodies in Bihar: 19 Nagar Nigams + 88 Nagar Parishads + 154 Nagar Panchayats."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"How many Nagar Panchayats are there in Bihar?",
   opts:["124","134","144","154"],
   ans:3,
   exp:"Bihar has 154 Nagar Panchayats. These are the smallest urban local bodies. Total urban local bodies: 19 Nagar Nigams + 88 Nagar Parishads + 154 Nagar Panchayats."},

// ── PAGE 2: BIHAR KI VIDHAYIKA ──

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"How many Police Districts does Bihar have and what makes it more than the regular 38?",
   opts:["39 — Bagha added","40 — Bagha and Nawgachia added","41 — Three new districts added","42 — Four new police districts"],
   ans:1,
   exp:"Bihar has 40 police districts. In addition to the regular 38 civil districts, Bagha and Nawgachia are separate police districts. This is done for better law enforcement management."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"What type of legislature (Vidhan Mandal) does Bihar have?",
   opts:["Unicameral (Ek-Sadaniya)","Bicameral (Dwi-Sadaniya)","Federal","Presidential"],
   ans:1,
   exp:"Bihar has a Bicameral (Dwi-Sadaniya) legislature, meaning it has two houses: Vidhan Sabha (Lower House) and Vidhan Parishad (Upper House). Only 6 Indian states have bicameral legislatures."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"How many seats does Bihar Vidhan Sabha (State Legislative Assembly) have?",
   opts:["220","232","243","260"],
   ans:2,
   exp:"Bihar Vidhan Sabha has 243 seats in total. Out of these, 40 seats are reserved — 38 for Scheduled Castes (SC) and 2 for Scheduled Tribes (ST: Katoria and Minhali constituencies)."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"How many seats does Bihar Vidhan Parishad (State Legislative Council) have?",
   opts:["55","65","75","85"],
   ans:2,
   exp:"Bihar Vidhan Parishad has 75 seats. It is the upper house of Bihar's bicameral legislature. Members have staggered terms and are elected/nominated through various constituencies."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"How many Lok Sabha (Parliamentary) constituencies are there in Bihar?",
   opts:["36","38","40","42"],
   ans:2,
   exp:"Bihar has 40 Lok Sabha seats, making it one of the most politically significant states. It also has 16 Rajya Sabha seats."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"How many Rajya Sabha seats does Bihar have?",
   opts:["12","14","16","18"],
   ans:2,
   exp:"Bihar has 16 Rajya Sabha seats. Lok Sabha seats: 40. Rajya Sabha seats: 16. Total Parliamentary representation: 56 seats from Bihar."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"hard",
   q:"In Bihar Vidhan Sabha, how many seats are reserved for Scheduled Castes (SC) and Scheduled Tribes (ST) respectively?",
   opts:["35 SC + 5 ST","38 SC + 2 ST","36 SC + 4 ST","40 SC + 0 ST"],
   ans:1,
   exp:"Out of 40 reserved seats in Bihar Vidhan Sabha: 38 are reserved for Scheduled Castes (SC) and 2 for Scheduled Tribes (ST) — specifically Katoria and Minhali constituencies."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"hard",
   q:"How many Lok Sabha seats in Bihar are reserved for Scheduled Castes (SC), and in which constituencies?",
   opts:["4 — Sasaram, Hajipur, Samastipur, Gaya","6 — Gopalganj, Hajipur, Samastipur, Jamui, Gaya, Sasaram","5 — Patna, Gaya, Bhagalpur, Muzaffarpur, Purnia","3 — Hajipur, Gaya, Sasaram"],
   ans:1,
   exp:"6 Lok Sabha seats in Bihar are reserved for SC: Gopalganj, Hajipur, Samastipur, Jamui, Gaya, and Sasaram. There are no ST-reserved Lok Sabha seats in Bihar."},

// ── PAGE 3: SEEMA (BORDERS) ──

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"Which country shares Bihar's northern border?",
   opts:["China","Bangladesh","Bhutan","Nepal"],
   ans:3,
   exp:"Nepal shares Bihar's northern border. 7 districts of Bihar share border with Nepal: Pashchim Champaran, Purvi Champaran, Sitamarhi, Madhubani, Supaul, Araria, and Kishanganj."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"How many Bihar districts share border with Nepal, and which is the easternmost among them?",
   opts:["5 — Madhubani","6 — Supaul","7 — Kishanganj","8 — Araria"],
   ans:2,
   exp:"7 Bihar districts share border with Nepal. The easternmost is Kishanganj. The full list: Pashchim Champaran, Purvi Champaran, Sitamarhi, Madhubani, Supaul, Araria, Kishanganj."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"Which state shares Bihar's southern border?",
   opts:["Madhya Pradesh","Chhattisgarh","Odisha","Jharkhand"],
   ans:3,
   exp:"Jharkhand shares Bihar's southern border. 8 districts of Bihar share border with Jharkhand: Rohtas, Aurangabad, Gaya, Nawada, Jamui, Banka, Bhagalpur, Katihar."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"How many Bihar districts share border with Jharkhand?",
   opts:["6","7","8","9"],
   ans:2,
   exp:"8 Bihar districts share border with Jharkhand (south): Rohtas, Aurangabad, Gaya, Nawada, Jamui, Banka, Bhagalpur, and Katihar."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"Which state shares Bihar's eastern border?",
   opts:["Assam","Odisha","West Bengal","Sikkim"],
   ans:2,
   exp:"West Bengal (Paschim Bangal) shares Bihar's eastern border. Only 3 Bihar districts share this border: Kishanganj, Purnia, and Katihar."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"How many Bihar districts share border with West Bengal?",
   opts:["2","3","4","5"],
   ans:1,
   exp:"Only 3 Bihar districts share border with West Bengal: Kishanganj, Purnia, and Katihar. West Bengal lies on Bihar's eastern side."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"Which state shares Bihar's western border?",
   opts:["Rajasthan","Madhya Pradesh","Haryana","Uttar Pradesh"],
   ans:3,
   exp:"Uttar Pradesh shares Bihar's western border. 8 districts of Bihar share this border: Rohtas, Kaimur, Buxar, Bhojpur, Saran, Siwan, Gopalganj, and Pashchim Champaran."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"hard",
   q:"Which Bihar district shares border with BOTH Nepal (north) AND West Bengal (east)?",
   opts:["Araria","Supaul","Kishanganj","Purnia"],
   ans:2,
   exp:"Kishanganj is unique — it shares border with Nepal (north) and West Bengal (east). It is also close to the Chicken's Neck corridor and is a strategically important district."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"hard",
   q:"Which Bihar district shares border with BOTH Jharkhand (south) AND West Bengal (east)?",
   opts:["Banka","Bhagalpur","Katihar","Purnia"],
   ans:2,
   exp:"Katihar shares border with both Jharkhand (south) and West Bengal (east). It also borders Purnia. This makes it a tri-junction district of sorts with multiple state borders."},

// ── PAGE 3: RAJKIYA PRATEEK (STATE SYMBOLS) ──

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"What is Bihar's state emblem (Rajkiya Chinh)?",
   opts:["Peepal tree","Bodhi tree (Bodhi Vriksha)","Lotus flower","Marigold flower"],
   ans:1,
   exp:"Bihar's state emblem is the Bodhi tree (Bodhi Vriksha). It is located in Bodh Gaya and is the tree under which Gautama Buddha attained enlightenment, making it deeply significant."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"What is Bihar's first (primary) official state language?",
   opts:["Maithili","Bhojpuri","Hindi","Urdu"],
   ans:2,
   exp:"Hindi is the first/primary official language of Bihar. Urdu is the second official language. Maithili is recognized in the 8th Schedule of the Constitution but is not the official state language."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"What is Bihar's second official state language?",
   opts:["Maithili","Bhojpuri","Sanskrit","Urdu"],
   ans:3,
   exp:"Urdu is the second official language of Bihar. Hindi is the primary official language. Bihar has a significant Urdu-speaking Muslim population, which is why Urdu holds official status."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"What is Bihar's state tree (Rajkiya Vriksha)?",
   opts:["Banyan","Neem","Peepal","Ashoka"],
   ans:2,
   exp:"Peepal (Ficus religiosa) is Bihar's state tree. It is a sacred tree in both Hindu and Buddhist traditions. The Bodhi tree (under which Buddha attained enlightenment) is also a Peepal tree."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"easy",
   q:"What is Bihar's state flower (Rajkiya Pushpa)?",
   opts:["Lotus","Rose","Marigold (Genda)","Jasmine"],
   ans:2,
   exp:"Genda (Marigold) is Bihar's state flower. Marigold is widely used in religious and cultural ceremonies across Bihar. It is also economically important for floriculture in the state."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"What is Bihar's current state animal, and what was it before 2013?",
   opts:["Now: Tiger; Before: Lion","Now: Elephant; Before: Bear","Now: Bull (Bail); Before: Bear (Reech)","Now: Deer; Before: Bull"],
   ans:2,
   exp:"Bihar's current state animal is Bull (Bail), changed in 2013. Before 2013, it was Bear (Reech). The change was made to better represent the agrarian identity of Bihar."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"What is Bihar's current state bird, and what was it before 2013?",
   opts:["Now: Peacock; Before: Parrot","Now: Sparrow (Gauraiya); Before: Dove (Fakhta)","Now: Crane; Before: Sparrow","Now: Kingfisher; Before: Crane"],
   ans:1,
   exp:"Bihar's current state bird is Gauraiya (House Sparrow), changed in 2013. Before 2013, it was Fakhta (Dove/Turtle Dove). The sparrow was chosen to promote conservation of this declining species."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"What is Bihar's state fish (Rajkiya Machhli)?",
   opts:["Rohu","Catla","Mangur (Catfish)","Hilsa"],
   ans:2,
   exp:"Mangur (Walking Catfish / Clarias batrachus) is Bihar's state fish. It is a freshwater fish commonly found in ponds and rivers of Bihar and has cultural and economic significance in the state."},

// ── PAGE 3: BIHAR RAJKIYA GEET ──

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"Who wrote (lyricist) Bihar's state song 'Mere Bharat ke Kanth Haar...'?",
   opts:["Ramdhari Singh Dinkar","Fanishwar Nath Renu","Satya Narayan","Nagarjun"],
   ans:2,
   exp:"Bihar's state song 'Mere Bharat ke Kanth Haar, Tujhko Sat Sat Vandan Bihar...' was written by Satya Narayan. It was given official recognition in the year 2012."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"hard",
   q:"Who composed the music for Bihar's state song, and in which year was it officially recognised?",
   opts:["Bismillah Khan — 2008","Hari Prasad Chaurasia & Shivkumar Sharma — 2012","A.R. Rahman — 2015","Ravi Shankar — 2010"],
   ans:1,
   exp:"Bihar's state song music was composed jointly by Hari Prasad Chaurasia (flautist) and Shivkumar Sharma (santoor maestro). It received official recognition as state song in 2012."},

// ── PAGE 4: PRAMANDAL AND DISTRICTS TABLE ──

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"How many districts are there in Saran Pramandal?",
   opts:["2","3","4","5"],
   ans:1,
   exp:"Saran Pramandal has 3 districts: Saran, Siwan, and Gopalganj. It is located in the western part of Bihar, bordering Uttar Pradesh."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"Which Pramandal has the most districts (6) and includes Muzaffarpur?",
   opts:["Patna","Munger","Tirhut","Koshi"],
   ans:2,
   exp:"Tirhut Pramandal has 6 districts: Pashchim Champaran, Purvi Champaran, Muzaffarpur, Vaishali, Sitamarhi, and Shivhar. Patna and Munger also have 6 districts each."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"Which 3 districts form Darbhanga Pramandal?",
   opts:["Darbhanga, Madhubani, Supaul","Darbhanga, Madhubani, Samastipur","Darbhanga, Sitamarhi, Madhubani","Darbhanga, Samastipur, Begusarai"],
   ans:1,
   exp:"Darbhanga Pramandal consists of 3 districts: Madhubani, Darbhanga, and Samastipur. This region is known as Mithilanchal and is famous for Madhubani painting."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"Which 3 districts form Koshi Pramandal?",
   opts:["Supaul, Araria, Madhepura","Saharsa, Supaul, Madhepura","Saharsa, Madhubani, Supaul","Kishanganj, Saharsa, Supaul"],
   ans:1,
   exp:"Koshi Pramandal has 3 districts: Saharsa, Supaul, and Madhepura. This region is associated with the Koshi river, which is called 'Bihar's Sorrow' due to frequent flooding."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"How many districts are in Purnia Pramandal and which are they?",
   opts:["3 — Purnia, Araria, Kishanganj","4 — Araria, Kishanganj, Purnia, Katihar","5 — Purnia, Araria, Kishanganj, Katihar, Saharsa","4 — Purnia, Araria, Supaul, Katihar"],
   ans:1,
   exp:"Purnia Pramandal has 4 districts: Araria, Kishanganj, Purnia, and Katihar. This is Bihar's northeastern division, bordering Nepal, West Bengal, and Jharkhand."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"hard",
   q:"Which 6 districts form Patna Pramandal?",
   opts:["Patna, Nalanda, Bhojpur, Buxar, Kaimur, Rohtas","Patna, Nalanda, Gaya, Bhojpur, Buxar, Kaimur","Patna, Nalanda, Bhojpur, Rohtas, Arwal, Jehanabad","Patna, Buxar, Bhojpur, Saran, Siwan, Gopalganj"],
   ans:0,
   exp:"Patna Pramandal has 6 districts: Patna, Nalanda, Bhojpur, Buxar, Kaimur, and Rohtas. Patna, the state capital, is located in this division on the banks of the Ganga."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"hard",
   q:"Which 5 districts form Magadh Pramandal?",
   opts:["Gaya, Aurangabad, Nawada, Jehanabad, Arwal","Gaya, Aurangabad, Nawada, Arwal, Nalanda","Gaya, Nawada, Jehanabad, Arwal, Rohtas","Gaya, Aurangabad, Nawada, Jehanabad, Banka"],
   ans:0,
   exp:"Magadh Pramandal has 5 districts: Gaya, Aurangabad, Nawada, Jehanabad, and Arwal. This region was the heartland of the ancient Magadha Empire and includes the historic city of Gaya."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"hard",
   q:"Which 6 districts form Munger Pramandal?",
   opts:["Munger, Jamui, Lakhisarai, Sheikhpura, Begusarai, Khagaria","Munger, Jamui, Lakhisarai, Sheikhpura, Bhagalpur, Banka","Munger, Jamui, Begusarai, Khagaria, Saharsa, Supaul","Munger, Lakhisarai, Sheikhpura, Begusarai, Nalanda, Banka"],
   ans:0,
   exp:"Munger Pramandal has 6 districts: Munger, Jamui, Lakhisarai, Sheikhpura, Begusarai, and Khagaria. This central-eastern division is located along the Ganga river."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"medium",
   q:"Which Pramandal has the fewest districts (only 2) in Bihar?",
   opts:["Koshi","Darbhanga","Saran","Bhagalpur"],
   ans:3,
   exp:"Bhagalpur Pramandal has only 2 districts: Bhagalpur and Banka. It is the smallest Pramandal in Bihar by number of districts. Bhagalpur is known for silk production (Tussar silk)."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"upsc",
   q:"Which Bihar district is in Purnia Pramandal but also shares border with both West Bengal and Jharkhand?",
   opts:["Araria","Purnia","Kishanganj","Katihar"],
   ans:3,
   exp:"Katihar is in Purnia Pramandal and uniquely shares borders with both West Bengal (east) and Jharkhand (south). It is also bordered by Purnia and is strategically significant due to its location near the Ganga and border regions."},

  {topic:"bihar_gk",tn:"Bihar GK",level:"upsc",
   q:"Arrange these in correct historical sequence: (A) Bihar-Odisha separation (B) Bihar province formation (C) Jharkhand creation (D) Delhi Durbar announcement",
   opts:["A → B → C → D","D → B → A → C","B → D → A → C","D → A → B → C"],
   ans:1,
   exp:"Correct sequence: (D) 12 Dec 1911 Delhi Durbar announcement → (B) 1 April 1912 Bihar province formation → (A) 1 April 1936 Bihar-Odisha separation → (C) 15 Nov 2000 Jharkhand creation."},


// ══════════════════════════════════════════════════════════════
//  ADD THIS TOPIC ENTRY TO YOUR TOPICS_CFG ARRAY:
//  {id:"bihar_gk", name:"Bihar: Samanya Parichay", icon:"🗺️", color:"#E3B341", cat:"cat_gs"},
//
//  TOTAL QUESTIONS ADDED: 62
// ══════════════════════════════════════════════════════════════

  ════════════════════════════════════════════════════════ */

  // ── BT COTTON ──
  {topic:"bt_cotton",tn:"BT Cotton",level:"easy",q:"BT Cotton was first introduced for commercial cultivation in India in which year?",opts:["1998","2000","2002","2005"],ans:2,exp:"BT Cotton was first introduced for commercial cultivation in India in 2002."},
  {topic:"bt_cotton",tn:"BT Cotton",level:"easy",q:"In BT Cotton, genes have been added from which bacterium?",opts:["Bacillus subtilis","Bacillus thuringiensis","Escherichia coli","Clostridium botulinum"],ans:1,exp:"BT in BT Cotton stands for Bacillus thuringiensis — the bacterium from which genes are added."},
  {topic:"bt_cotton",tn:"BT Cotton",level:"medium",q:"Which Cry genes present in BT Cotton provide protection against bollworm?",opts:["Cry1Ab, Cry2Ab, Cry2Ac","Cry3A, Cry4B","Cry1A, Cry5B, Cry6A","Cry9C, Cry10A"],ans:0,exp:"BT Cotton contains Cry1Ab, Cry2Ab and Cry2Ac genes that produce toxins specifically harmful to bollworms."},
  {topic:"bt_cotton",tn:"BT Cotton",level:"easy",q:"BT Cotton technology was developed by which company?",opts:["Bayer CropScience","Syngenta","Monsanto","DuPont Pioneer"],ans:2,exp:"BT Cotton (Bollgard technology) was developed by Monsanto."},
  {topic:"bt_cotton",tn:"BT Cotton",level:"easy",q:"BT Cotton is also known by which other name?",opts:["Hybrid Cotton","Super Cotton","Bollgard Technology","Organic Cotton"],ans:2,exp:"BT Cotton is commercially known as Bollgard Technology, developed by Monsanto."},
  {topic:"bt_cotton",tn:"BT Cotton",level:"medium",q:"After the introduction of BT Cotton, the income of farmers in India increased by approximately how much?",opts:["10-20%","30-60%","70-80%","5-10%"],ans:1,exp:"After BT Cotton introduction, farmers' income increased by approximately 30-60% due to reduced pesticide use and better yield."},
  {topic:"bt_cotton",tn:"BT Cotton",level:"medium",q:"Which is the FIRST and ONLY genetically modified crop allowed for commercial cultivation in India?",opts:["BT Brinjal","BT Cotton","BT Maize","Golden Rice"],ans:1,exp:"BT Cotton is the first and only GM crop approved for commercial cultivation in India. BT Brinjal was approved but its release was put on indefinite moratorium."},
  {topic:"bt_cotton",tn:"BT Cotton",level:"hard",q:"What is one of the major challenges of BT Cotton?",opts:["More water requirement","Bollworms quickly adapting to the toxins produced by BT Cotton","Reduced crop height","More fertilizer requirement"],ans:1,exp:"A major challenge is that bollworms develop resistance to the Cry toxins over time, reducing BT Cotton's effectiveness."},

  // ── GENOTYPE & PHENOTYPE ──
  {topic:"genotype",tn:"Genotype & Phenotype",level:"easy",q:"What is Genotype?",opts:["The outward appearance of an organism","The combination of all genes present in the body","Only the set of expressed genes","The description of organism's behaviour"],ans:1,exp:"Genotype is the combination of ALL genes present in an organism's body — both expressed and non-expressed."},
  {topic:"genotype",tn:"Genotype & Phenotype",level:"easy",q:"How can Genotype be observed?",opts:["By microscope","By X-ray","By studying DNA","By blood test"],ans:2,exp:"Genotype can only be observed by studying DNA directly, as it represents the genetic makeup of the organism."},
  {topic:"genotype",tn:"Genotype & Phenotype",level:"medium",q:"Genotype complexity depends on which of the following?",opts:["The organism's age","The genetic sequence","Environmental conditions","The organism's diet"],ans:1,exp:"Genotype complexity depends on the genetic sequence — the arrangement and combination of genes in the DNA."},
  {topic:"genotype",tn:"Genotype & Phenotype",level:"easy",q:"What does Phenotype refer to?",opts:["The internal gene arrangement","The morphology, properties and behaviour of an organism","Only inherited traits","The DNA sequence"],ans:1,exp:"Phenotype refers to the observable characteristics of an organism — its morphology, properties and behaviour."},
  {topic:"genotype",tn:"Genotype & Phenotype",level:"medium",q:"Phenotype primarily depends on which of the following?",opts:["Only genotype","Only environment","Both genotype and environmental factors","Only age"],ans:2,exp:"Phenotype depends on BOTH genotype AND environmental factors. Same genotype can show different phenotypes in different environments."},
  {topic:"genotype",tn:"Genotype & Phenotype",level:"hard",q:"Which statement about Phenotype is CORRECT?",opts:["It is inherited by offspring","It consists of both expressed and non-expressed genes","It consists of only expressed genes","It can be identified through DNA study"],ans:2,exp:"Phenotype consists of only expressed genes — traits that are actually visible or observable in the organism."},

  // ── DNA BARCODING ──
  {topic:"dna_barcode",tn:"DNA Barcoding",level:"easy",q:"What is the primary use of DNA Barcoding?",opts:["Diagnosing diseases","Tracking different species using DNA data","Improving crops","Producing proteins"],ans:1,exp:"DNA Barcoding is used to identify and track different species using short DNA sequences as unique identifiers."},
  {topic:"dna_barcode",tn:"DNA Barcoding",level:"medium",q:"In DNA Barcoding of animals, which type of DNA is used?",opts:["Nuclear DNA","Plastid DNA","Mitochondrial DNA","Ribosomal DNA"],ans:2,exp:"In DNA Barcoding of animals, Mitochondrial DNA (specifically the COI gene) is used as it is highly conserved and species-specific."},
  {topic:"dna_barcode",tn:"DNA Barcoding",level:"medium",q:"In DNA Barcoding of plants, which type of DNA is used?",opts:["Nuclear DNA","Mitochondrial DNA","Plastid DNA","Satellite DNA"],ans:2,exp:"In DNA Barcoding of plants, Plastid (chloroplast) DNA is used because mitochondrial DNA evolves too slowly in plants."},
  {topic:"dna_barcode",tn:"DNA Barcoding",level:"easy",q:"DNA Fingerprinting is used for which purpose?",opts:["Species identification","Identification of a single individual","Gene therapy","Crop improvement"],ans:1,exp:"DNA Fingerprinting is used for identification of a single individual — used in forensics, paternity tests, criminal cases."},
  {topic:"dna_barcode",tn:"DNA Barcoding",level:"medium",q:"Which type of DNA is used in DNA Fingerprinting?",opts:["Mitochondrial DNA","Plastid DNA","Satellite DNA","mRNA"],ans:2,exp:"DNA Fingerprinting uses Satellite DNA (VNTRs/STRs) — highly variable repetitive sequences that are unique to each individual."},
  {topic:"dna_barcode",tn:"DNA Barcoding",level:"hard",q:"Which of the following is correct about Somatic cells?",opts:["They are the most common cell type in the body","They have a specific task to perform in the body","RBC is an example of a somatic cell","All of the above"],ans:3,exp:"All are correct: Somatic cells are the most common, have specific tasks, and RBC is a classic example of a differentiated somatic cell."},

  // ── STEM CELLS ──
  {topic:"stem_cells",tn:"Stem Cells",level:"easy",q:"From where are Embryonic Stem Cells obtained?",opts:["Adult bone marrow","Embryo / umbilical cord","Skin cells","Liver cells"],ans:1,exp:"Embryonic Stem Cells are obtained from the embryo (blastocyst stage) or umbilical cord blood."},
  {topic:"stem_cells",tn:"Stem Cells",level:"easy",q:"Embryonic stem cells are called 'Totipotent' because:",opts:["They can only form blood cells","They can differentiate into ALL types of body cells","They cannot divide at all","They are found only in adults"],ans:1,exp:"Totipotent means they can differentiate into ALL types of body cells — they have unlimited differentiation potential."},
  {topic:"stem_cells",tn:"Stem Cells",level:"medium",q:"Somatic (Adult) stem cells have limited differentiation ability and are therefore called:",opts:["Totipotent","Pluripotent","Multipotent","Omnipotent"],ans:2,exp:"Adult/Somatic stem cells are Multipotent — they can differentiate into only a limited range of cell types (e.g. blood cells from haematopoietic stem cells)."},
  {topic:"stem_cells",tn:"Stem Cells",level:"medium",q:"Which are examples of Somatic / Adult Stem Cells?",opts:["Haematopoietic SC and Mesenchymal SC","Liver cells and Neurons","RBC and WBC","Embryonic cells"],ans:0,exp:"Haematopoietic Stem Cells (form blood cells) and Mesenchymal Stem Cells (form bone, cartilage, fat) are key adult stem cells."},
  {topic:"stem_cells",tn:"Stem Cells",level:"medium",q:"Stem Cell Therapy can be used in treatment of which diseases?",opts:["Thalassemia and Sickle Cell Disease","Only Cancer","Only Diabetes","Only Heart Disease"],ans:0,exp:"Stem Cell Therapy is used for Thalassemia, Sickle Cell Disease, certain cancers (leukemia), and other blood disorders."},
  {topic:"stem_cells",tn:"Stem Cells",level:"hard",q:"Somatic stem cells whose potency has been artificially enhanced are called:",opts:["Embryonic Stem Cells","iPSC (Induced Pluripotent Stem Cells)","Totipotent Cells","Gamete Cells"],ans:1,exp:"iPSCs (Induced Pluripotent Stem Cells) are adult cells that have been reprogrammed back to a pluripotent state — Nobel Prize 2012 (Yamanaka)."},
  {topic:"stem_cells",tn:"Stem Cells",level:"hard",q:"Which body in India has banned the use of stem cell therapy for Autism treatment?",opts:["AIIMS","ICMR","CSIR","Stem Cell Society of India"],ans:1,exp:"ICMR (Indian Council of Medical Research) has banned unproven stem cell therapies including those for Autism, as they lack scientific evidence."},

  // ── SPACE: UNIVERSE ──
  {topic:"universe",tn:"Space: Universe",level:"easy",q:"According to the Big Bang Theory, when was the universe formed?",opts:["10.5 billion years ago","13.8 billion years ago","5 billion years ago","20 billion years ago"],ans:1,exp:"According to the Big Bang Theory, the universe was formed approximately 13.8 billion years ago."},
  {topic:"universe",tn:"Space: Universe",level:"medium",q:"What was the state of the universe before the Big Bang?",opts:["A large star","The universe existed as a singularity","Empty space","Several small planets"],ans:1,exp:"Before the Big Bang, all matter and energy were compressed into an infinitely small, infinitely dense point called a singularity."},
  {topic:"universe",tn:"Space: Universe",level:"easy",q:"The universe is primarily composed of:",opts:["Only ordinary matter","Matter, energy and stars","Matter and energy (which are interconvertible)","Only gases"],ans:2,exp:"The universe is composed of matter and energy, which are interconvertible (E=mc²). Ordinary matter is only ~5% of the universe."},
  {topic:"universe",tn:"Space: Universe",level:"medium",q:"What is Dark Matter?",opts:["Another name for black holes","A mysterious matter responsible for gravity in galaxies","A type of anti-matter","The most common element in the universe"],ans:1,exp:"Dark Matter is a mysterious, invisible matter that doesn't interact with light but exerts gravitational force — it holds galaxies together."},
  {topic:"universe",tn:"Space: Universe",level:"medium",q:"What percentage of the universe's composition is Dark Energy?",opts:["5%","27%","68%","50%"],ans:2,exp:"Dark Energy makes up about 68% of the universe, Dark Matter ~27%, and ordinary matter only ~5%."},
  {topic:"universe",tn:"Space: Universe",level:"hard",q:"What is Anti-matter?",opts:["Another name for normal matter","Exactly opposite counterpart of matter (same mass, opposite charge)","A form of dark energy","Gas present in space"],ans:1,exp:"Anti-matter has the same mass as matter but opposite charge. When matter meets anti-matter they annihilate each other releasing energy."},
  {topic:"universe",tn:"Space: Universe",level:"upsc",q:"Why is Neutrino called the 'Ghost Particle'?",opts:["Because it is invisible","Because it barely interacts with any matter","Because it travels very fast","Because it is only detected at night"],ans:1,exp:"Neutrinos are called Ghost Particles because they barely interact with any matter — trillions pass through our body every second without any effect."},

  // ── FORMATION OF STARS ──
  {topic:"star_form",tn:"Formation of Stars",level:"easy",q:"What was the first and most abundant element formed in the universe?",opts:["Helium","Oxygen","Hydrogen","Carbon"],ans:2,exp:"Hydrogen was the first element formed after the Big Bang and remains the most abundant element in the universe (~75%)."},
  {topic:"star_form",tn:"Formation of Stars",level:"easy",q:"What is a Nebula?",opts:["A type of black hole","A formation cloud of gases and dust particles","A dead star","A satellite"],ans:1,exp:"A Nebula is a vast cloud of gas and dust in space — it is the birthplace of stars."},
  {topic:"star_form",tn:"Formation of Stars",level:"medium",q:"What are Proto Stars?",opts:["Fully formed stars","Stage before a black hole","Dense spherical bodies formed by gravity before becoming stars","Remains of dead stars"],ans:2,exp:"Proto Stars are dense spherical bodies that form when nebula gas and dust collapse under gravity — the stage just before a star ignites nuclear fusion."},
  {topic:"star_form",tn:"Formation of Stars",level:"medium",q:"What is the final stage of a Sun-like star?",opts:["Black Hole","Neutron Star","Dwarf Star","Pulsar"],ans:2,exp:"A Sun-like star ends its life as a White Dwarf after passing through the Red Giant stage and shedding its outer layers."},
  {topic:"star_form",tn:"Formation of Stars",level:"hard",q:"What is the minimum solar mass required to form a Black Hole (Chandrasekhar Limit)?",opts:["0.5x Sun","1.0x Sun","1.4x Sun","5x Sun"],ans:2,exp:"The Chandrasekhar Limit is 1.4 solar masses — stars above this mass limit cannot become white dwarfs and instead collapse into neutron stars or black holes."},
  {topic:"star_form",tn:"Formation of Stars",level:"upsc",q:"What is the correct life cycle of a massive star?",opts:["Red Giant → Dwarf Star","Red/Super Giant → Supernova Explosion → Neutron Star / Black Hole","Red Dwarf → White Dwarf","Pulsar → Black Hole directly"],ans:1,exp:"Massive stars: Main Sequence → Red/Super Giant → Supernova Explosion → Neutron Star (if 1.4-3 solar masses) or Black Hole (if >3 solar masses)."},

  // ── NEUTRON STARS & BLACK HOLES ──
  {topic:"neutron_bh",tn:"Neutron Stars & Black Holes",level:"easy",q:"When is a Neutron Star formed?",opts:["When the Sun expands","When a giant star undergoes a supernova explosion","When two planets collide","Immediately after the Big Bang"],ans:1,exp:"A Neutron Star forms from the collapsed core of a giant star after a supernova explosion, when gravity is strong enough to convert protons to neutrons."},
  {topic:"neutron_bh",tn:"Neutron Stars & Black Holes",level:"medium",q:"In what form does matter exist inside a Neutron Star?",opts:["Plasma form","Protons and electrons","Neutron form (protons are converted into neutrons)","Gas form"],ans:2,exp:"Inside a Neutron Star, extreme gravity forces protons and electrons to combine into neutrons — matter exists entirely in neutron form."},
  {topic:"neutron_bh",tn:"Neutron Stars & Black Holes",level:"medium",q:"What is a Pulsar?",opts:["A type of Black Hole","A rapidly spinning neutron star that releases electromagnetic waves","A dwarf star","An asteroid"],ans:1,exp:"A Pulsar is a rapidly rotating neutron star that emits beams of electromagnetic radiation — like a cosmic lighthouse."},
  {topic:"neutron_bh",tn:"Neutron Stars & Black Holes",level:"hard",q:"What is a Magnetar?",opts:["A planet that generates a magnetic field","A neutron star with a very strong magnetic field","A type of galaxy","An artificial satellite"],ans:1,exp:"A Magnetar is a type of neutron star with an extremely powerful magnetic field — the strongest known in the universe."},
  {topic:"neutron_bh",tn:"Neutron Stars & Black Holes",level:"medium",q:"What is the Event Horizon of a Black Hole?",opts:["The centre of the Black Hole","The boundary beyond which no matter or energy can escape","The area outside the Black Hole","The point where gravity is zero"],ans:1,exp:"The Event Horizon is the point of no return around a black hole — beyond it, escape velocity exceeds the speed of light so nothing can escape."},
  {topic:"neutron_bh",tn:"Neutron Stars & Black Holes",level:"hard",q:"What is the Ergosphere?",opts:["Another name for a Black Hole","The region outside the event horizon where matter can still escape","The surface of a neutron star","The centre of a quasar"],ans:1,exp:"The Ergosphere is the region just outside the Event Horizon of a rotating black hole — matter inside it is dragged by spacetime but can still escape."},
  {topic:"neutron_bh",tn:"Neutron Stars & Black Holes",level:"upsc",q:"What is a Quasar?",opts:["A type of galaxy","A dead star","An extremely bright object in galaxies that emits EM waves powered by a black hole","A comet"],ans:2,exp:"Quasars (Quasi-Stellar Objects) are the most luminous objects in the universe — powered by supermassive black holes at galactic centres consuming matter."},

  // ── GRAVITATIONAL WAVES ──
  {topic:"grav_waves",tn:"Gravitational Waves",level:"easy",q:"What are Gravitational Waves?",opts:["Sound waves that travel through space","Energy waves formed by the distortion of the space-time fabric","Electromagnetic waves","Radio waves coming from stars"],ans:1,exp:"Gravitational Waves are ripples in the fabric of spacetime caused by massive accelerating objects — predicted by Einstein in 1915."},
  {topic:"grav_waves",tn:"Gravitational Waves",level:"medium",q:"At what speed do Gravitational Waves travel?",opts:["Speed of sound","Speed of light","Double the speed of light","Variable speed"],ans:1,exp:"Gravitational Waves travel at the speed of light (3×10⁸ m/s) through spacetime."},
  {topic:"grav_waves",tn:"Gravitational Waves",level:"medium",q:"Gravitational Waves were first detected in which year?",opts:["2010","2012","2015","2020"],ans:2,exp:"Gravitational Waves were first directly detected in 2015 by LIGO, from the merger of two black holes 1.3 billion light-years away."},
  {topic:"grav_waves",tn:"Gravitational Waves",level:"easy",q:"Where is the LIGO detector located?",opts:["India","Japan","United States (US)","Europe"],ans:2,exp:"LIGO (Laser Interferometer Gravitational-Wave Observatory) has two detectors in the United States — in Hanford, Washington and Livingston, Louisiana."},
  {topic:"grav_waves",tn:"Gravitational Waves",level:"hard",q:"What is the name of India's proposed Gravitational Wave detector?",opts:["VIRGO","KAGRA","INDIAN LIGO — located in Hingoli, Maharashtra","GEO600"],ans:2,exp:"LIGO-India is proposed to be located in Hingoli, Maharashtra. It will form a global network with US LIGO detectors to better locate gravitational wave sources."},
  {topic:"grav_waves",tn:"Gravitational Waves",level:"upsc",q:"Which event is a classic example of a source of Gravitational Waves?",opts:["Earth's revolution around the Sun","Merger of two Black Holes","Formation of a star","Solar eclipse"],ans:1,exp:"The merger of two Black Holes (or neutron stars) is the classic source — the first detected gravitational wave was from a binary black hole merger."},
];
/* ══════════════════ BIHAR SPECIAL ══════════════════ */

const WRITING_Q = {
  /* ✏️ STEP 2: Naye subject ke Answer Writing questions yahan add karo
     Format: topic_id: [{marks:"10 marks", q:"Question?", hint:"Key points..."}]
     Example neeche (space_tech ke liye):
     space_tech: [
       {marks:"15 marks", q:"Discuss India's achievements in space technology...", hint:"Chandrayaan, Mangalyaan, PSLV, GSLV, NAVIC..."},
     ],
  */
  dna_rna:[{marks:"10 marks",q:"Why is DNA called the 'Blueprint of Life'? Describe the structure of DNA and its biological significance.",hint:"Double helix, 4 bases (A,T,C,G), deoxyribose sugar, genetic info storage, replication, transcription-translation."},{marks:"15 marks",q:"Study the three types of RNA (mRNA, tRNA, rRNA) and Micro RNA. Explain structure, location and function of each.",hint:"Transcription, Translation, ribosome, codon-anticodon, miRNA regulatory role."}],
  genome:[{marks:"15 marks",q:"Analyse India's efforts in genomics — from Indian Genome Project to Gujarat Tribal Genome Project. Explain genomics' contribution to public health.",hint:"DBT, 10,000 samples, tribal genome, personalised medicine, disease prediction."},{marks:"10 marks",q:"What is Genome Sequencing? Analyse its scientific, medical and ethical dimensions.",hint:"Process, disease detection, drug development, privacy concerns, genetic discrimination."}],
  recombinant:[{marks:"15 marks",q:"What is Recombinant DNA Technology? Review its major steps, applications and bioethics. What is India's future in this field?",hint:"Plasmid, restriction enzymes, steps, insulin/vaccine examples, CAR-T, ethical concerns."},{marks:"10 marks",q:"Describe the role of Recombinant DNA Technology in production of GMOs and Recombinant Proteins.",hint:"GM crops, recombinant insulin, vaccines, industrial enzymes, safety concerns."}],
  cart:[{marks:"15 marks",q:"What is CAR-T Cell Therapy? Analyse its mechanism, applications, limitations and significance of India's NexCAR-19.",hint:"T-cells, CAR mechanism, step-by-step, B-cell lymphoma, NexCAR-19, cost challenge."},{marks:"10 marks",q:"Compare immunotherapy with conventional cancer treatment (chemotherapy, radiation). Advantages and limitations of both.",hint:"Targeted vs broad, side effects, cost, effectiveness, personalised medicine."}],
  amr:[{marks:"15 marks",q:"Why is AMR considered the greatest health challenge of the 21st century? Causes, consequences, solutions — including Phage Therapy.",hint:"AMR mechanism, 4 causes, global deaths, WHO action plan, phage therapy mechanism."},{marks:"10 marks",q:"Compare Phage Therapy and Antibiotic Therapy. Advantages and disadvantages of both.",hint:"Mechanism, specificity, resistance development, availability, cost, safety."}],
  chromosomes:[{marks:"10 marks",q:"What is DNA Fingerprinting? Describe the role of Satellite DNA and its applications in forensics and judicial system.",hint:"Satellite DNA unique patterns, forensic use, paternity test, criminal cases."},{marks:"15 marks",q:"Explain the significance of artificial chromosome construction in gene therapy, disease detection and evolutionary research.",hint:"YAC, BAC, construction method, gene therapy delivery, large DNA cloning."}],
  crispr:[{marks:"15 marks",q:"What is CRISPR-CAS9? Describe its development from restriction enzymes and analyse its medical, agricultural and biosecurity implications.",hint:"Restriction enzyme inspiration, CAS9, guide RNA, sickle cell/cancer applications, GM crops, WHO guidelines."},{marks:"10 marks",q:"What is the contribution of Transposable Elements (Jumping Genes) to genome evolution? Favourable and unfavourable effects.",hint:"Barbara McClintock, copy-paste vs cut-paste, genetic diversity, disease mutations, 40% of human genome."}],
  mito:[{marks:"15 marks",q:"What is Mitochondrial Replacement Therapy (Three-Parent Baby)? Scientific basis, medical significance and ethical controversies.",hint:"Mitochondrial DNA defects, congenital diseases, donor mitochondria, three-parent concept, ethical concerns."}],
  ecology_abiotic:[
    {marks:"10 marks",q:"What are the major abiotic components of the environment? Discuss the role of temperature in regulating the biological activities of organisms.",hint:"Temperature → Basal metabolism, kinetic of body fluids, Stenothermal vs Eurythermal organisms, examples."},
    {marks:"10 marks",q:"Distinguish between Stenohaline and Euryhaline organisms with examples. What is the significance of salinity as an abiotic factor?",hint:"Stenohaline: narrow salinity range (Goldfish, Coral) | Euryhaline: broad range (Salmon, Estuarine crocodile) | Role in water use by individual."},
    {marks:"15 marks",q:"Describe the various responses of biotic components towards changing abiotic components. Explain with suitable examples how organisms Regulate, Conform, Migrate and Suspend.",hint:"Regulate → Thermoregulation (shivering/sweating), Osmoregulation | Conform → plants (stomata close, shed leaves), animals (change metabolic rate) | Migrate → Siberian crane | Suspend → Hibernation, Aestivation, Diapause, Torpor, Brumation."},
    {marks:"15 marks",q:"What is plant adaptation? Discuss in detail the adaptations of plants in different conditions: sunlight, hot/water-stressed, nutrient-poor soil, aquatic, and saline (estuarine) conditions.",hint:"Sciophytes vs Heliophytes | Xerophytes, Ephemeral plants, C3/C4/CAM pathways | Carnivorous plants | Aerenchyma, hydrophyte features | Vivipary, Proline, Sorbitol, Glycerol."},
    {marks:"10 marks",q:"Compare C3, C4 and CAM pathways of photosynthesis. Under what conditions does each pathway operate and what are the advantages of C4 and CAM over C3?",hint:"C3: CO2→3-PGA, problem of water loss | C4: Bundle-sheath cells, Malate, Sugarcane, Millets, saves water | CAM: Desert plants, night stomata, Aloe/Cactus."},
    {marks:"10 marks",q:"What is Mycorrhizae? Explain the symbiotic relationship between plants and fungi and its ecological significance.",hint:"Symbiosis → mutualism | Plant gets nutrients+water, Fungus gets food+shelter | Important for nutrient-poor soil adaptation | Role in forest ecosystem."}
  ]
};

const TOPICS_CFG = [
  // ── CATEGORIES (folders) ──
  {id:"cat_st",  name:"Science & Technology",  icon:"🔬", color:"#58A6FF", isCategory:true},
  {id:"cat_env", name:"Environment & Ecology", icon:"🌿", color:"#3FB950", isCategory:true},
  // ── SCIENCE & TECH ──
  {id:"dna_rna",     name:"DNA & RNA",                   icon:"🧬", color:"#58A6FF", cat:"cat_st"},
  {id:"genome",      name:"Genome",                      icon:"🗺️", color:"#3FB950", cat:"cat_st"},
  {id:"recombinant", name:"Recombinant DNA",             icon:"🔬", color:"#BC8CFF", cat:"cat_st"},
  {id:"cart",        name:"CAR-T Cell",                  icon:"💉", color:"#F85149", cat:"cat_st"},
  {id:"amr",         name:"AMR & Phage",                 icon:"🦠", color:"#E3B341", cat:"cat_st"},
  {id:"chromosomes", name:"Chromosomes",                 icon:"🧫", color:"#58A6FF", cat:"cat_st"},
  {id:"crispr",      name:"CRISPR",                      icon:"✂️", color:"#3FB950", cat:"cat_st"},
  {id:"mito",        name:"Mitochondrial DNA",           icon:"⚡", color:"#BC8CFF", cat:"cat_st"},
  {id:"bt_cotton",   name:"BT Cotton",                   icon:"🌱", color:"#3FB950", cat:"cat_st"},
  {id:"genotype",    name:"Genotype & Phenotype",        icon:"🧪", color:"#58A6FF", cat:"cat_st"},
  {id:"dna_barcode", name:"DNA Barcoding",               icon:"🔍", color:"#BC8CFF", cat:"cat_st"},
  {id:"stem_cells",  name:"Stem Cells",                  icon:"🫀", color:"#F85149", cat:"cat_st"},
  {id:"universe",    name:"Space: Universe",             icon:"🌌", color:"#58A6FF", cat:"cat_st"},
  {id:"star_form",   name:"Formation of Stars",          icon:"⭐", color:"#E3B341", cat:"cat_st"},
  {id:"neutron_bh",  name:"Neutron Stars & Black Holes", icon:"🕳️", color:"#BC8CFF", cat:"cat_st"},
  {id:"grav_waves",  name:"Gravitational Waves",         icon:"🌊", color:"#3FB950", cat:"cat_st"},
  // ── ENVIRONMENT & ECOLOGY ──
  {id:"ecology_abiotic",name:"Ecology: Abiotic",         icon:"🌿", color:"#3FB950", cat:"cat_env"},
  // ── ALL MIX ──
  {id:"all", name:"All Topics Mix", icon:"🎯", color:"#E3B341"},
];

