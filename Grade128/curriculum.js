/* Representative Ontario curriculum map for a learning prototype. Not an official assessment. */
(function () {
  "use strict";

  const CONTENT_VERSION = "2026.08-on1";
  const q = (prompt, choices, answer, explanation, metadata = {}) => ({
    prompt,
    choices,
    answer,
    explanation,
    weight: 2,
    interactionType: "multiple-choice",
    cognitiveDemand: "understand",
    supportLevel: "none",
    misconceptionCodes: [],
    assessmentEligible: true,
    contentVersion: CONTENT_VERSION,
    ...metadata
  });
  const o = (code, title, learn, tip, probe) => ({ code, title, learn, tip, probe });

  const SUBJECTS = {
    math: { name: "Mathematics", short: "Math", colour: "pear", source: "Ontario Mathematics, 2020" },
    language: { name: "Language", short: "Language", colour: "cyan", source: "Ontario Language, 2023" },
    science: { name: "Science & Technology", short: "Science", colour: "mint", source: "Ontario Science and Technology, 2022" },
    social: { name: "Social Studies", short: "Social Studies", colour: "coral", source: "Ontario Social Studies, History and Geography, current revisions" }
  };

  const MATH = [
    [
      o("N1", "Numbers to 50", "Read, represent, compare, and order whole numbers to 50.", "Build the number with tens and ones, then compare.", q("Which number is 3 tens and 7 ones?", ["10", "30", "37", "73"], 2, "Three tens are 30. Seven more makes 37.")),
      o("N2", "Add and subtract to 20", "Use objects, drawings, and mental strategies for addition and subtraction facts.", "Count on for addition. Count back for subtraction.", q("What is 8 + 5?", ["11", "12", "13", "14"], 2, "Count on five from 8: 9, 10, 11, 12, 13.")),
      o("S1", "Shapes and measurement", "Describe 2D shapes, 3D objects, length, time, and simple patterns.", "Look for sides, faces, and repeated units.", q("Which shape has 3 straight sides?", ["Circle", "Triangle", "Square", "Rectangle"], 1, "A triangle has three straight sides and three vertices."))
    ],
    [
      o("N1", "Numbers to 200", "Represent, compare, and order whole numbers to 200 using place value.", "Separate hundreds, tens, and ones.", q("Which number has 1 hundred, 4 tens, and 6 ones?", ["146", "164", "416", "46"], 0, "100 + 40 + 6 = 146.")),
      o("N2", "Addition and subtraction", "Add and subtract one- and two-digit numbers using flexible strategies.", "Break a number into tens and ones.", q("What is 47 − 20?", ["17", "27", "29", "67"], 1, "Removing two tens from 47 leaves 27.")),
      o("D1", "Data and equal groups", "Read simple graphs and use equal groups to begin multiplication thinking.", "Count each equal group by skip-counting.", q("There are 3 plates with 2 apples on each. How many apples?", ["5", "6", "8", "9"], 1, "Three equal groups of two make 2 + 2 + 2 = 6."))
    ],
    [
      o("N1", "Numbers to 1,000", "Use place value, rounding, fractions, and multiplication and division facts.", "Use hundreds, tens, and ones to check size.", q("Which number is greatest?", ["398", "839", "893", "389"], 2, "893 has 8 hundreds, then 9 tens, so it is greater than 839.")),
      o("N2", "Multiply and divide", "Model multiplication and division with arrays, groups, and facts.", "Ask whether you are combining groups or sharing them.", q("24 stickers are shared equally among 4 students. How many each?", ["4", "5", "6", "8"], 2, "24 ÷ 4 = 6 because 4 × 6 = 24.")),
      o("F1", "Fractions and measurement", "Compare unit fractions and solve perimeter, time, and measurement problems.", "For unit fractions, more equal parts means a smaller part.", q("Which fraction is larger?", ["1/2", "1/4", "They are equal", "Not enough information"], 0, "One half is larger than one quarter of the same whole."))
    ],
    [
      o("N1", "Numbers to 10,000", "Use place value, decimals to tenths, fractions, and operations.", "Line up place values before calculating.", q("What is the value of the 7 in 3,742?", ["7", "70", "700", "7,000"], 2, "The 7 is in the hundreds place, so its value is 700.")),
      o("N2", "Multiplication and division", "Multiply two- and one-digit numbers and divide using strategies and facts.", "Estimate first so you can check your answer.", q("What is 6 × 24?", ["120", "124", "144", "164"], 2, "6 × 20 = 120 and 6 × 4 = 24; together they make 144.")),
      o("P1", "Patterns and geometry", "Extend patterns, identify angles, classify shapes, and solve measurement problems.", "A right angle is the square corner found on a rectangle.", q("Which angle is smaller than a right angle?", ["Acute", "Right", "Obtuse", "Straight"], 0, "An acute angle measures less than 90 degrees."))
    ],
    [
      o("N1", "Fractions and decimals", "Compare and operate with fractions and decimals to hundredths.", "Use a common denominator when comparing fractions.", q("Which decimal is equal to 3/4?", ["0.25", "0.34", "0.5", "0.75"], 3, "Three quarters means 75 out of 100, or 0.75.")),
      o("N2", "Whole-number operations", "Multiply multi-digit whole numbers and divide with remainders.", "Use partial products, then add them.", q("What is 32 × 14?", ["128", "320", "448", "462"], 2, "32 × 10 = 320 and 32 × 4 = 128; total 448.")),
      o("D1", "Data, probability, and area", "Interpret graphs, describe likelihood, and calculate area and perimeter.", "Area counts square units inside a shape.", q("A rectangle is 8 cm by 5 cm. What is its area?", ["13 cm²", "26 cm²", "40 cm²", "80 cm²"], 2, "Area = length × width = 8 × 5 = 40 cm²."))
    ],
    [
      o("N1", "Ratios, fractions, and percents", "Connect fractions, decimals, ratios, and percents.", "Percent means out of 100.", q("What is 25% of 80?", ["20", "25", "40", "60"], 0, "25% is one quarter; one quarter of 80 is 20.")),
      o("N2", "Integers and operations", "Work with whole numbers, decimals, fractions, and positive and negative integers.", "On a number line, values farther right are greater.", q("Which integer is least?", ["−8", "−3", "0", "5"], 0, "−8 is farthest left on the number line, so it is least.")),
      o("A1", "Algebra and geometry", "Use variables, patterns, area, surface area, and coordinate reasoning.", "Substitute the known value for the variable.", q("If n = 6, what is 3n + 2?", ["11", "18", "20", "26"], 2, "3 × 6 + 2 = 18 + 2 = 20."))
    ],
    [
      o("N1", "Proportions and percents", "Solve proportional, percent, fraction, decimal, and integer problems.", "Find the unit rate before scaling.", q("Three notebooks cost $12. At the same rate, what do 5 cost?", ["$15", "$18", "$20", "$24"], 2, "Each notebook costs $4, so five cost $20.")),
      o("A1", "Expressions and equations", "Evaluate expressions and solve one-step and two-step equations.", "Undo operations in reverse order.", q("Solve 3x + 5 = 20.", ["x = 3", "x = 5", "x = 8", "x = 15"], 1, "Subtract 5 to get 3x = 15, then divide by 3: x = 5.")),
      o("D1", "Geometry and probability", "Use circles, area, transformations, data, and experimental probability.", "Probability is favourable outcomes divided by total outcomes.", q("A bag has 3 red and 2 blue tiles. What is P(blue)?", ["2/3", "2/5", "3/5", "1/5"], 1, "There are 2 blue tiles out of 5 total, so the probability is 2/5."))
    ],
    [
      o("N1", "Rational numbers and rates", "Solve problems with fractions, decimals, percents, rates, and powers.", "Track the sign separately when multiplying negatives.", q("What is (−6) × 4?", ["−24", "−10", "10", "24"], 0, "A negative times a positive is negative; 6 × 4 = 24.")),
      o("A1", "Linear relationships", "Represent and solve linear equations and compare growing patterns.", "The coefficient of x is the rate of change.", q("In y = 4x + 3, what is the rate of change?", ["3", "4", "7", "x"], 1, "The coefficient 4 tells how much y changes when x increases by 1.")),
      o("D1", "Geometry and data literacy", "Apply the Pythagorean relationship and interpret samples and data.", "For a right triangle, a² + b² = c².", q("A right triangle has legs 3 and 4. What is the hypotenuse?", ["5", "6", "7", "12"], 0, "3² + 4² = 9 + 16 = 25, and √25 = 5."))
    ]
  ];

  const LANGUAGE = [
    [
      o("R1", "Sounds, words, and fluency", "Blend sounds, recognize common words, and read simple texts smoothly.", "Say each sound, then blend without pausing.", q("Which word begins with the same sound as sun?", ["map", "sit", "top", "run"], 1, "Sun and sit both begin with the /s/ sound.")),
      o("R2", "Understand a text", "Retell important events and use pictures and words to make meaning.", "Ask: who, where, what happened first, next, and last?", q("A story says: ‘Nia planted a seed. She watered it. A green shoot appeared.’ What happened last?", ["Nia put soil in a flowerpot", "Nia planted the tiny seed", "She watered the soil gently", "A green shoot appeared"], 3, "The green shoot appearing is the final event stated.")),
      o("W1", "Write a clear sentence", "Create short texts using capitals, spaces, and ending punctuation.", "A sentence begins with a capital and ends with punctuation.", q("Which sentence is written correctly?", ["my dog runs", "My dog runs.", "my Dog runs.", "My dog runs"], 1, "It begins with a capital letter and ends with a period."))
    ],
    [
      o("R1", "Decode and read smoothly", "Use sound, spelling, and word-part knowledge to read increasingly complex words.", "Look for a familiar base word and ending.", q("Which word has the base word help?", ["holding", "helpful", "helmeted", "yelling"], 1, "Helpful is made from the base word help plus the suffix -ful.")),
      o("R2", "Main idea and details", "Identify the main idea and supporting details in simple texts.", "The main idea is what the whole text is mostly about.", q("‘Bees visit flowers. They carry pollen between plants. This helps new seeds grow.’ What is the main idea?", ["Seeds are small", "Bees help plants grow", "Flowers are colourful", "Pollen is heavy"], 1, "All three sentences explain how bees help plants grow.")),
      o("W1", "Organize a short text", "Write connected sentences with suitable vocabulary and punctuation.", "Put ideas in an order the reader can follow.", q("Which word best connects events in order? ‘We packed lunch. ___, we walked to the park.’", ["Because", "Next", "But", "Or"], 1, "Next shows that the walk happened after packing lunch."))
    ],
    [
      o("R1", "Word knowledge and fluency", "Use syllables, morphology, and phrasing to read accurately and fluently.", "Break a long word into meaningful parts.", q("What does the prefix re- mean in reread?", ["Before", "Not", "Again", "Small"], 2, "The prefix re- means again, so reread means read again.")),
      o("R2", "Infer and summarize", "Use stated details and background knowledge to infer and summarize.", "An inference combines clues from the text with what you know.", q("Omar zipped his coat and pulled on mittens before leaving. What can you infer?", ["It is cold outside", "It is lunchtime", "He is going swimming", "His coat is broken"], 0, "A coat and mittens are clues that the weather is cold.")),
      o("W1", "Paragraph writing", "Plan and write a focused paragraph with supporting details.", "Start with a topic sentence, then add related details.", q("Which sentence is the best topic sentence for a paragraph about caring for a dog?", ["Some dogs have long tails and spotted fur.", "Dogs need daily care to stay healthy.", "Yesterday our class learned about Tuesday.", "My bright blue shoe is beside the door."], 1, "It states a broad main idea that supporting care details can explain."))
    ],
    [
      o("R1", "Vocabulary and text features", "Use word parts, context, headings, captions, and other features to build meaning.", "Read the words around an unfamiliar word for clues.", q("‘The trail was arduous, so we stopped often to rest.’ What does arduous most likely mean?", ["Easy to travel", "Very difficult", "Short and level", "Full of people"], 1, "Stopping often to rest suggests the trail was difficult.")),
      o("R2", "Analyze ideas", "Summarize, infer, and explain how details support a central idea.", "Choose only the details that support the central idea.", q("Which statement is a fact?", ["Winter is the best season.", "Snow is frozen water.", "Skating is more fun than skiing.", "Cold days feel terrible."], 1, "Snow being frozen water can be checked and proven.")),
      o("W1", "Purpose and audience", "Write and revise texts with an appropriate form, voice, and organization.", "A formal audience needs clear, respectful language.", q("Which opening best fits a letter to the school principal?", ["Hey! Guess what happened at lunch today?", "Dear Principal Chen,", "Yo, I need you to read this right now.", "Once upon a time, in a faraway school,"], 1, "‘Dear Principal Chen,’ is respectful and fits a formal letter."))
    ],
    [
      o("R1", "Fluent, accurate reading", "Read complex words and sentences with accuracy, phrasing, and expression.", "Punctuation shows where to pause and how ideas connect.", q("What does a comma most often signal when reading aloud?", ["A brief pause", "The end of all ideas", "A shouted word", "A new chapter"], 0, "A comma often marks a brief pause or separates parts of a sentence.")),
      o("R2", "Compare and evaluate", "Compare ideas and perspectives and identify evidence in texts.", "Ask which detail directly supports the author’s claim.", q("An author claims school gardens help science learning. Which evidence is strongest?", ["Many gardens include colourful flowers and paths", "Some students enjoy eating carrots with lunch", "Students measured plant growth weekly and recorded results", "The garden entrance has a newly painted blue gate"], 2, "Measuring and recording growth is direct evidence of science learning.")),
      o("W1", "Develop and revise", "Organize multi-paragraph texts and revise for clarity, coherence, and conventions.", "Each paragraph should develop one part of the main idea.", q("Which transition shows contrast?", ["For example", "However", "Therefore", "First"], 1, "However signals that the next idea contrasts with the previous one."))
    ],
    [
      o("R1", "Language structures", "Use morphology, grammar, and sentence structure to interpret complex texts.", "Notice how clauses add reasons, conditions, and details.", q("Which word is a conjunction in ‘We stayed inside because it rained’?", ["stayed", "inside", "because", "rained"], 2, "Because joins the result to its reason.")),
      o("R2", "Perspective and evidence", "Analyze point of view, bias, claims, and supporting evidence.", "A source is stronger when its evidence can be checked.", q("Which source is most reliable for today’s local weather warning?", ["An undated blog", "A friend’s guess", "Environment and Climate Change Canada", "A fictional novel"], 2, "The federal weather service provides current, accountable observations and warnings.")),
      o("W1", "Research and communicate", "Gather, organize, cite, and present information for a clear purpose.", "Record where each fact came from as you research.", q("Why should a writer cite a source?", ["To make the page longer", "To credit evidence and let readers check it", "To avoid using paragraphs", "To replace an explanation"], 1, "A citation credits the source and lets readers verify the evidence."))
    ],
    [
      o("R1", "Complex word and sentence study", "Apply vocabulary, morphology, syntax, and fluency skills to challenging texts.", "Use roots and affixes to test a word’s meaning.", q("What does the suffix -less mean in powerless?", ["Full of", "Without", "Before", "Again"], 1, "The suffix -less means without, so powerless means without power.")),
      o("R2", "Critical literacy", "Evaluate how language, form, and point of view shape meaning and influence audiences.", "Notice whose perspective is centred and what evidence is left out.", q("Which sentence uses persuasive language rather than neutral language?", ["The meeting starts at 7 p.m.", "The reckless plan will ruin our beautiful park.", "The park covers four hectares.", "Council recorded twelve votes."], 1, "Words such as reckless, ruin, and beautiful are chosen to influence feelings.")),
      o("W1", "Argument and revision", "Develop supported arguments and revise structure, style, grammar, and citations.", "A strong argument pairs a clear claim with relevant evidence.", q("Which is the strongest thesis?", ["Recycling is a thing.", "I like parks.", "Schools should compost lunch waste because it reduces landfill and teaches responsibility.", "There are many opinions."], 2, "It makes a clear, arguable claim and previews two reasons."))
    ],
    [
      o("R1", "Interpret sophisticated texts", "Use vocabulary, syntax, fluency, and text knowledge across print, media, and digital forms.", "Slow down at dense sentences and restate them in your own words.", q("What is the best paraphrase of ‘The proposal was rejected owing to insufficient evidence’?", ["The proposal lacked enough evidence, so it was rejected.", "The evidence was celebrated.", "The proposal was accepted quickly.", "No proposal was made."], 0, "The paraphrase keeps the original meaning in clearer wording.")),
      o("R2", "Evaluate credibility and craft", "Assess claims, evidence, bias, purpose, and the effects of author choices.", "Check author, date, evidence, and corroboration.", q("A viral post makes a surprising health claim but cites no source. What should you do first?", ["Share it immediately", "Assume it is true", "Check the claim against reliable health sources", "Count the likes"], 2, "Verification with reliable sources is more meaningful than popularity.")),
      o("W1", "Sustained communication", "Plan, draft, revise, edit, and publish coherent texts for varied audiences.", "Revision changes ideas and structure; editing fixes conventions.", q("Which change is revision rather than editing?", ["Fixing a comma", "Correcting a spelling error", "Moving a paragraph to improve the argument", "Capitalizing a name"], 2, "Reordering a paragraph changes the text’s structure and clarity, so it is revision."))
    ]
  ];

  const SCIENCE = [
    [
      o("L1", "Living things", "Identify basic needs and characteristics of living things.", "Living things need resources such as air, water, food, and suitable space.", q("Which is a basic need of a plant?", ["Plastic", "Water", "A toy", "A mirror"], 1, "Plants need water to live and grow.")),
      o("M1", "Materials and structures", "Describe materials, everyday objects, and structures by their properties and uses.", "Choose a material whose property fits the job.", q("Which material is best for a clear window?", ["Brick", "Glass", "Wool", "Cardboard"], 1, "Glass is transparent, so light can pass through it.")),
      o("E1", "Energy in daily life", "Recognize that the Sun provides energy and that energy is used safely.", "Look for light, warmth, sound, and movement.", q("Which is an effect of the Sun’s energy?", ["It provides light and warmth", "It gives warmth but does not provide light", "It provides light without adding warmth", "It helps plants grow without any water"], 0, "The Sun is Earth’s main source of light and warmth."))
    ],
    [
      o("L1", "Growth and change in animals", "Describe animal life cycles, adaptations, and interactions with humans.", "Put life-cycle stages in a repeating order.", q("Which stage comes after a caterpillar in a butterfly life cycle?", ["Egg", "Pupa", "Adult bird", "Seed"], 1, "A caterpillar forms a pupa before becoming an adult butterfly.")),
      o("M1", "Properties of liquids and solids", "Investigate how liquids and solids behave and how materials can change.", "A solid keeps its shape; a liquid takes the container’s shape.", q("Which statement describes a liquid?", ["It keeps the same shape in any container", "It takes the shape of its container", "It has no measurable mass or weight", "It cannot be poured from one cup to another"], 1, "A liquid flows and takes the shape of its container.")),
      o("E1", "Air and water", "Explain why clean air and water matter and how people can protect them.", "Connect an action to its effect on the environment.", q("Which action helps protect water?", ["Pouring leftover paint into a storm drain", "Leaving the tap running while brushing teeth", "Picking up litter near a stream", "Washing spilled motor oil toward the street drain"], 2, "Removing litter helps keep it from entering the stream."))
    ],
    [
      o("L1", "Plants", "Explain plant parts, needs, changes, and the importance of plants.", "Match each plant part to its job.", q("Which plant part mainly absorbs water from soil?", ["Flower", "Leaf", "Root", "Fruit"], 2, "Roots absorb water and minerals and help anchor the plant.")),
      o("F1", "Forces and movement", "Investigate contact and non-contact forces and their effects.", "A force is a push or pull that can change motion.", q("Which force pulls objects toward Earth?", ["Gravity", "Friction", "Magnetism", "Static charge"], 0, "Gravity attracts masses and pulls objects toward Earth.")),
      o("E1", "Soils and environments", "Compare soils and explain how they support living things.", "Soil contains mineral particles, air, water, and organic matter.", q("Why are earthworms often helpful to soil?", ["They make plastic", "They mix and aerate it", "They remove all water", "They stop plants growing"], 1, "Their movement mixes soil and creates spaces for air and water."))
    ],
    [
      o("L1", "Habitats and communities", "Explain food chains, habitats, and how changes affect communities.", "Follow energy from the Sun to producers and consumers.", q("In a food chain, what is a producer?", ["An organism that makes its own food", "An animal that hunts other animals for food", "An organism that gets energy by decomposition", "A non-living object found in the habitat"], 0, "Plants and algae are producers because they make food using light energy.")),
      o("M1", "Light and sound", "Investigate properties and uses of light and sound.", "Sound begins with vibrations and travels through matter.", q("What causes sound?", ["Vibrations", "Shadows", "Gravity only", "Still air with no movement"], 0, "Vibrating objects make nearby particles vibrate, carrying sound.")),
      o("E1", "Rocks, minerals, and land", "Identify rocks and minerals and describe processes that shape Earth’s surface.", "Weathering breaks rock down; erosion moves the pieces.", q("Which process moves weathered rock and soil to a new place?", ["Condensation", "Erosion", "Reflection", "Germination"], 1, "Erosion transports sediment by water, wind, ice, or gravity."))
    ],
    [
      o("L1", "Human organ systems", "Describe major organ systems and how choices affect health.", "Systems work together to move materials and release energy.", q("Which system carries oxygen and nutrients around the body?", ["Circulatory", "Skeletal", "Digestive only", "Nervous only"], 0, "The circulatory system moves blood carrying oxygen and nutrients.")),
      o("M1", "Properties and changes in matter", "Distinguish physical and chemical changes and investigate matter.", "A chemical change forms one or more new substances.", q("Which is a chemical change?", ["Melting ice", "Tearing paper", "Rusting iron", "Dissolving sugar"], 2, "Rusting forms new substances called iron oxides.")),
      o("E1", "Energy conservation", "Identify energy forms, transformations, and ways to conserve energy.", "Energy changes form but is not created from nothing.", q("A toaster changes electrical energy mainly into what form?", ["Chemical", "Thermal", "Nuclear", "Gravitational"], 1, "The heating elements transform electrical energy into thermal energy."))
    ],
    [
      o("L1", "Biodiversity", "Explain biodiversity, classification, adaptation, and ecosystem stability.", "Greater biodiversity can give an ecosystem more ways to respond to change.", q("What does biodiversity describe?", ["Only the number of people", "The variety of living things", "The amount of rainfall", "The age of a rock"], 1, "Biodiversity is the variety of genes, species, and ecosystems.")),
      o("F1", "Electricity", "Explain circuits, electrical energy, safety, and conservation.", "A closed circuit provides a complete path for current.", q("A bulb in a simple circuit will light when the circuit is…", ["open", "closed", "made only of plastic", "missing a power source"], 1, "Current flows only when there is a complete, closed path.")),
      o("E1", "Space", "Describe the solar system, space exploration, and patterns caused by motion.", "Earth’s rotation causes day and night.", q("What causes day and night on Earth?", ["Earth’s rotation", "The Moon’s phases", "Cloud movement", "Earth’s revolution only"], 0, "As Earth rotates, locations move into and out of sunlight."))
    ],
    [
      o("L1", "Ecosystem interactions", "Analyze interactions, cycles, and human impacts in ecosystems.", "Matter cycles while energy flows through an ecosystem.", q("What role do decomposers play?", ["They recycle nutrients", "They create sunlight", "They stop all decay", "They remove oxygen from space"], 0, "Decomposers break down remains and return nutrients to the ecosystem.")),
      o("M1", "Pure substances and mixtures", "Classify matter and use physical properties to separate mixtures.", "Choose a method based on differences such as particle size or boiling point.", q("Which method can separate sand from water?", ["Filtration", "Magnetism", "Freezing only", "Combustion"], 0, "A filter lets water pass while trapping larger sand particles.")),
      o("F1", "Heat in the environment", "Explain heat transfer, technologies, and effects on Earth systems.", "Conduction transfers heat through direct particle contact.", q("A metal spoon warms in hot soup mainly by…", ["conduction", "reflection", "evaporation", "photosynthesis"], 0, "Heat moves through the metal by conduction."))
    ],
    [
      o("L1", "Cells", "Explain cell theory, organelles, and levels of organization.", "Cells are the basic units of living things.", q("Which structure controls many activities in a eukaryotic cell?", ["Nucleus", "Cell wall only", "Vacuole only", "Cytoplasm only"], 0, "The nucleus contains genetic material and directs many cell activities.")),
      o("F1", "Fluids and systems", "Use density, pressure, buoyancy, and mechanical advantage to explain systems.", "An object floats when buoyant force balances its weight.", q("Which property is mass per unit volume?", ["Pressure", "Density", "Speed", "Work"], 1, "Density compares an object’s mass with the space it occupies.")),
      o("E1", "Water systems", "Analyze watersheds, water quality, and human impacts on water systems.", "Water in a watershed drains toward a shared body of water.", q("What is a watershed?", ["Land that drains to a common water body", "Only the water in a glass", "A machine that makes rain", "A type of ocean current"], 0, "A watershed is the land area whose water drains to a common outlet."))
    ]
  ];

  const SOCIAL = [
    [
      o("A1", "Roles and relationships", "Describe roles, responsibilities, rules, and ways people contribute to groups.", "A responsibility is something you are expected to do.", q("Which is a responsibility at school?", ["Talking while a classmate is sharing", "Listening when others speak", "Leaving shared materials on the floor", "Waiting for someone else to tidy"], 1, "Listening helps the group learn and shows respect.")),
      o("B1", "Our local community", "Identify community features, services, maps, and connections to the land.", "Map symbols stand for real places and features.", q("What does a map legend explain?", ["The weather tomorrow", "What map symbols mean", "Who drew each road", "How old a building is"], 1, "A legend or key explains the symbols used on a map.")),
      o("C1", "Past and present", "Compare daily life, traditions, and communities over time.", "Use objects, photos, and stories as evidence about the past.", q("Which is a primary source about a family’s past?", ["A grandparent’s childhood photograph", "A recent cartoon set in the distant past", "A fictional story written this year for entertainment", "Tomorrow’s detailed weather forecast for the city"], 0, "The photograph was created during the time being studied."))
    ],
    [
      o("A1", "Changing family and community traditions", "Compare traditions, celebrations, and ways communities change over time.", "Ask how a tradition is practised and why it matters.", q("Why might a family keep a tradition?", ["To build belonging and remember shared values", "Because families must practise traditions in identical ways", "To make sure a celebration can never change", "To replace community rules with one family activity"], 0, "Traditions can connect people to family, culture, and shared values.")),
      o("B1", "Global communities", "Locate communities and compare how climate and physical features affect daily life.", "People adapt homes, clothing, and activities to local conditions.", q("Why are many roofs steep in places with heavy snow?", ["To help snow slide off", "To make summers colder", "To stop daylight", "To grow trees indoors"], 0, "A steep roof reduces heavy snow buildup.")),
      o("C1", "Map skills", "Use directions, symbols, and simple coordinates to describe location.", "Start at a known point, then follow one direction at a time.", q("On most maps, which direction is at the top?", ["South", "East", "North", "West"], 2, "By convention, north is usually shown at the top."))
    ],
    [
      o("A1", "Communities in Canada, 1780–1850", "Compare life and change in selected communities, including First Nations, Métis, and settler perspectives.", "Compare perspectives using evidence from more than one source.", q("Why should historians use sources from different communities?", ["To include more perspectives", "To make every story identical", "To avoid evidence", "To remove all disagreement"], 0, "Different sources reveal experiences that one viewpoint may miss.")),
      o("B1", "Living and working in Ontario", "Explain how land use, natural resources, and municipal services shape communities.", "A municipality makes local decisions and provides local services.", q("Which service is usually a municipal responsibility?", ["Local garbage collection", "Issuing Canadian passports", "National defence", "Printing Canadian money"], 0, "Municipal governments commonly manage local waste collection.")),
      o("C1", "Inquiry and mapping", "Ask questions, gather evidence, interpret maps, and communicate conclusions.", "A good inquiry question can be investigated with evidence.", q("Which is the best inquiry question?", ["Is every part of history pleasant and easy to understand?", "How did the river influence where our town developed?", "Which colour do I like most on the classroom wall?", "Can a printed map speak aloud without any technology?"], 1, "It is focused, meaningful, and can be investigated using geographic and historical evidence."))
    ],
    [
      o("A1", "Early societies", "Compare social and political organization, daily life, and environments in early societies.", "Avoid judging the past only by today’s conditions.", q("Which evidence could show what people ate in an early society?", ["Food remains and cooking tools", "A modern schedule for buses in a large city", "Tomorrow’s forecast for rain and strong winds", "A new video game about an imaginary planet"], 0, "Food remains and tools are archaeological evidence of diet.")),
      o("B1", "Political and physical regions of Canada", "Describe Canada’s regions, resources, population, and connections.", "Regions can be defined by physical, political, or human features.", q("Which is a physical feature?", ["A provincial border", "A mountain range", "A city council", "A postal code"], 1, "A mountain range is a natural feature of Earth’s surface.")),
      o("C1", "Citizenship and government", "Explain levels of government and how people can participate in decisions.", "Match the issue to the level of government closest to it.", q("Who leads a municipal council in many Ontario communities?", ["The mayor", "The Governor General", "The Prime Minister", "A senator"], 0, "A mayor is the head of many municipal councils."))
    ],
    [
      o("A1", "Indigenous peoples and Europeans", "Analyze interactions, consequences, and differing perspectives before 1713.", "Relationships included cooperation, exchange, conflict, and unequal consequences.", q("Why is it important to include Indigenous perspectives in early Canadian history?", ["They are essential evidence about peoples whose lands and lives were affected", "Only one perspective is allowed", "They make dates unnecessary", "They remove the need for sources"], 0, "Indigenous voices and knowledge are essential to an accurate, responsible account.")),
      o("B1", "Canadian government", "Explain rights, responsibilities, levels of government, and civic participation.", "Rights and responsibilities work together in a democracy.", q("Which is a way a citizen can participate in government?", ["Voting when eligible", "Ignoring every public issue", "Changing laws alone", "Printing their own money"], 0, "Voting is one formal way eligible citizens choose representatives.")),
      o("C1", "Responsible resource use", "Assess how resource use affects economies, communities, and environments.", "Consider environmental, economic, and social effects together.", q("Which choice best supports sustainable forestry?", ["Replanting and protecting habitat", "Removing every tree at once", "Ignoring soil erosion", "Burning unused wood beside rivers"], 0, "Replanting and habitat protection help forests recover and continue supporting ecosystems."))
    ],
    [
      o("A1", "Communities in Canada, past and present", "Analyze the experiences and contributions of diverse communities, including Indigenous and newcomer communities.", "Look for continuity, change, cause, and consequence.", q("What does continuity mean in historical study?", ["Something that remains over time", "A sudden change only", "An imaginary event", "A map scale"], 0, "Continuity is an aspect of life or society that persists over time.")),
      o("B1", "Canada and the global community", "Explain Canada’s international relationships, trade, aid, and global responsibilities.", "Countries are interdependent when actions in one affect others.", q("Which example shows global interdependence?", ["A Canadian store sells fruit grown in another country", "A person reads alone", "A rock stays in one place", "A classroom closes its door"], 0, "Trade connects producers and consumers across countries.")),
      o("C1", "Geographic inquiry", "Use maps, data, and sources to investigate patterns and draw conclusions.", "A conclusion should answer the inquiry question using evidence.", q("Which map best shows population density by region?", ["A choropleth map", "A floor plan", "A weather symbol alone", "A sketch with no scale"], 0, "A choropleth map shades areas by a measured value such as population density."))
    ],
    [
      o("H1", "New France and British North America", "Analyze events, perspectives, and changes from 1713 to 1800.", "Use historical significance and cause and consequence.", q("Which factor often shaped where early settlements developed?", ["Access to waterways", "Internet speed", "Airport runways", "Subway maps"], 0, "Waterways supported travel, trade, food, and access to resources.")),
      o("G1", "Physical patterns in a changing world", "Analyze physical processes, natural events, and how people respond.", "Separate a natural hazard from the risk created by exposure and vulnerability.", q("Which process causes most earthquakes?", ["Movement of tectonic plates", "Cloud formation", "Plant growth", "Ocean evaporation"], 0, "Stress and movement along plate boundaries cause most earthquakes.")),
      o("G2", "Natural resources", "Evaluate extraction, use, stewardship, and sustainability of natural resources.", "Compare who benefits, who bears costs, and what alternatives exist.", q("Which resource is renewable on human time scales?", ["Sunlight", "Coal", "Natural gas", "Uranium ore"], 0, "Sunlight is continually available on human time scales."))
    ],
    [
      o("H1", "Creating Canada, 1850–1890", "Analyze Confederation, expansion, resistance, and varied perspectives.", "Confederation affected groups differently; compare motives and consequences.", q("What year did Canadian Confederation begin?", ["1763", "1812", "1867", "1914"], 2, "The Dominion of Canada was created in 1867.")),
      o("G1", "Global settlement patterns", "Analyze where populations live and factors affecting settlement and migration.", "Settlement patterns reflect physical, economic, political, and social factors.", q("Why are many large cities located near coasts or rivers?", ["Transportation, trade, and water access", "Mountains always prevent settlement", "Every river has the same climate", "Cities cannot exist inland"], 0, "Water routes historically supported transport, trade, resources, and settlement.")),
      o("G2", "Economic systems and quality of life", "Compare economic development, inequality, and measures of quality of life.", "No single indicator tells the whole story.", q("Why use several indicators to compare quality of life?", ["Well-being includes health, education, income, safety, and more", "One number is always perfect", "Indicators remove all values", "Countries cannot be compared"], 0, "Quality of life is multidimensional, so several measures provide a fuller picture."))
    ]
  ];

  const EXTRA_PROBES = {
    1: {
      math: {
        N1: [
          q("Which number is greater?", ["24", "42", "14", "20"], 1, "42 has 4 tens, so it is greater than the other numbers."),
          q("What number comes just after 39?", ["38", "39", "40", "49"], 2, "Counting on one from 39 gives 40.")
        ],
        N2: [
          q("Mila has 9 buttons and gets 4 more. How many buttons does she have?", ["11", "12", "13", "14"], 2, "Count on four from 9: 10, 11, 12, 13."),
          q("What is 15 − 6?", ["7", "8", "9", "10"], 2, "Counting back six from 15 lands on 9.")
        ],
        S1: [
          q("A ribbon is 8 cubes long. A string is 5 cubes long. Which one is longer?", ["The ribbon", "The string", "They are the same", "There is no way to tell"], 0, "Eight cubes is longer than five cubes, so the ribbon is longer."),
          q("What comes next in the pattern: red, blue, red, blue, ___?", ["Red", "Green", "Yellow", "Purple"], 0, "The pattern repeats red, blue, so red comes next.")
        ]
      },
      language: {
        R1: [
          q("Which word rhymes with cat?", ["sun", "hat", "pig", "cup"], 1, "Cat and hat have the same ending sound."),
          q("Blend these sounds: /m/ /a/ /p/. Which word do they make?", ["map", "mop", "nap", "mat"], 0, "The sounds /m/ /a/ /p/ blend to make map.")
        ],
        R2: [
          q("Leo put on his boots. Then he jumped in puddles. What happened first?", ["Leo jumped in puddles", "Leo put on his boots", "Leo dried his boots", "Leo went to bed"], 1, "The first sentence says Leo put on his boots."),
          q("Ava fed her fish before school. Who did Ava feed?", ["Her fish", "Her teacher", "Her dog", "Her brother"], 0, "The sentence says that Ava fed her fish.")
        ],
        W1: [
          q("Which mark belongs at the end of a question?", ["?", "!", ",", "."], 0, "A question mark belongs at the end of a question."),
          q("Which sentence uses a capital letter, spaces, and an ending mark correctly?", ["we like books.", "We likebooks.", "We like books.", "we Like books"], 2, "It begins with a capital, has spaces, and ends with a period.")
        ]
      },
      science: {
        L1: [
          q("Which one is living and needs food and water?", ["A rock", "A toy car", "A rabbit", "A chair"], 2, "A rabbit is a living animal that needs food and water."),
          q("What does a plant need to help it grow?", ["Sunlight", "Plastic", "Paint", "Sandpaper"], 0, "Plants use light energy from the Sun to help them grow.")
        ],
        M1: [
          q("Which material is best for keeping rain out?", ["A folded paper towel", "A piece of plain cardboard", "Waterproof plastic", "An absorbent cotton ball"], 2, "Waterproof plastic does not soak up rain easily."),
          q("Which structure is made to hold books?", ["A shelf", "A ball", "A spoon", "A sock"], 0, "A shelf is a stable structure designed to support books.")
        ],
        E1: [
          q("What can protect your eyes on a bright, sunny day?", ["Sunglasses", "Soft slippers", "Warm mittens", "Foam earplugs"], 0, "Sunglasses help protect eyes from bright sunlight."),
          q("Which item uses electrical energy to make light?", ["An electric lamp", "A smooth grey rock", "A solid wooden block", "A printed paper book"], 0, "An electric lamp uses electrical energy to produce light.")
        ]
      },
      social: {
        A1: [
          q("Which action helps a family work together?", ["Setting the table", "Hiding the plates from everyone", "Leaving toys on the stairs", "Shouting over others"], 0, "Setting the table is one way to share a family responsibility."),
          q("Why do classrooms have rules?", ["To help people learn and stay safe", "To decide what the weather will be outside", "To make students choose the same game", "To keep learners from asking useful questions"], 0, "Fair rules help everyone learn, take turns, and stay safe.")
        ],
        B1: [
          q("Which community helper puts out fires?", ["A firefighter", "A bakery worker", "A local painter", "A music teacher"], 0, "Firefighters respond to fires and help keep communities safe."),
          q("Where can people borrow books in a community?", ["A library", "A fire station", "A grocery store", "A bus stop"], 0, "A public library lends books and other learning materials.")
        ],
        C1: [
          q("Which item could show what a classroom looked like long ago?", ["An old classroom photograph", "Today's lunch menu", "Tomorrow's weather forecast", "A new toy box"], 0, "An old photograph is evidence created in the past."),
          q("Which sentence compares the past with the present?", ["People once mailed letters; now many send online messages.", "The blue playground has three swings beside its climbing frame.", "Our class ate lunch near the sunny windows at exactly noon.", "I like the bright blue colour used on the new classroom wall."], 0, "The sentence tells how communication was different in the past and present.")
        ]
      }
    },
    2: {
      math: {
        N1: [
          q("Which number is the least?", ["108", "180", "118", "181"], 0, "108 has the fewest tens after the hundred, so it is the least."),
          q("How can 92 be shown with tens and ones?", ["9 tens and 2 ones", "2 tens and 9 ones", "92 tens", "9 hundreds and 2 ones"], 0, "Nine tens are 90, and two more ones make 92.")
        ],
        N2: [
          q("What is 36 + 12?", ["46", "48", "52", "58"], 1, "Add one ten to 36 to get 46, then add two ones to get 48."),
          q("There are 63 birds in a park. Then 20 fly away. How many are left?", ["23", "33", "43", "83"], 2, "Taking away two tens from 63 leaves 43.")
        ],
        D1: [
          q("Four bags hold 3 marbles each. How many marbles are there altogether?", ["7", "10", "12", "16"], 2, "Four equal groups of three make 3 + 3 + 3 + 3 = 12."),
          q("A class graph shows 5 votes for cats, 3 for dogs, and 2 for fish. Which pet got the most votes?", ["Cats", "Dogs", "Fish", "They tied"], 0, "Five is the greatest number of votes, so cats got the most.")
        ]
      },
      language: {
        R1: [
          q("Which word has two syllables?", ["school", "rabbit", "bright", "streams"], 1, "Rabbit has two spoken parts: rab-bit."),
          q("What is the base word in jumping?", ["jump", "jumps", "ping", "ump"], 0, "Jumping is made from the base word jump plus -ing.")
        ],
        R2: [
          q("Luca fills a bowl with water, gives his dog food, and takes the dog for a walk. What is this mostly about?", ["How Luca cares for his dog", "Why round bowls can hold water", "Where sleepy dogs rest indoors", "What Luca chooses for his own lunch"], 0, "Every detail shows a way Luca cares for his dog."),
          q("Mina planted tomatoes, watered them, and later picked the red tomatoes. What did Mina pick?", ["Red tomatoes", "Yellow flowers", "Green beans", "Brown leaves"], 0, "The last part says Mina picked the red tomatoes.")
        ],
        W1: [
          q("Which word best completes the order? 'First, we found our skates. ___, we put them on.'", ["Next", "Because", "But", "Or"], 0, "Next shows what happened after finding the skates."),
          q("Which pair of sentences is in a clear order?", ["First wash the apple. Then eat it.", "Then eat it. First wash the apple.", "Eat apple because blue.", "Apple or wash quickly."], 0, "Washing the apple comes before eating it, and the order words make that clear.")
        ]
      },
      science: {
        L1: [
          q("Which stage usually comes after frog eggs hatch?", ["Tadpole", "Adult frog", "Butterfly", "Chick"], 0, "Frog eggs hatch into tadpoles before they become adult frogs."),
          q("How do webbed feet help many ducks?", ["They help ducks swim", "They help ducks climb tall trees", "They make ducks invisible", "They keep ducks from eating"], 0, "Webbed feet push against water and help ducks swim.")
        ],
        M1: [
          q("What happens when an ice cube warms and melts?", ["It becomes liquid water", "It becomes wood", "It becomes a new animal", "It disappears forever"], 0, "Melting changes solid ice into liquid water."),
          q("Which statement is true about most solids?", ["They keep their own shape", "They flow freely like liquids", "They fill the shape of a container", "They have no size"], 0, "Most solids keep their shape unless a force changes them.")
        ],
        E1: [
          q("What saves water while you brush your teeth?", ["Turn off the tap", "Leave the tap running", "Fill the sink twice", "Pour water on the floor"], 0, "Turning off the tap keeps clean water from being wasted."),
          q("Which choice can help keep the air cleaner on a short trip?", ["Walk or ride a bike with an adult", "Let a car idle while everyone waits outside", "Burn plastic packaging in an outdoor fire", "Leave lights on in empty rooms all afternoon"], 0, "Walking or biking can reduce air pollution from a car trip.")
        ]
      },
      social: {
        A1: [
          q("What is a respectful way to learn about another family's tradition?", ["Ask questions and listen", "Say every family is the same", "Laugh at unfamiliar foods", "Tell them to stop"], 0, "Asking and listening helps us learn respectfully from other people."),
          q("Which example shows a tradition changing over time?", ["A family adds a new song to a yearly celebration", "A large rock remains beside the path after the celebration", "A city bus follows the same route it used yesterday again", "The Sun rises in the east as it usually does each day"], 0, "The family keeps the celebration but adds a new part to the tradition.")
        ],
        B1: [
          q("What clothing is often useful in a very hot climate?", ["Light, loose clothing", "A heavy winter coat with insulated lining", "Thick snow pants made for cold weather", "Wool mittens designed for snowy days"], 0, "Light, loose clothing can help people stay cooler in hot weather."),
          q("Which job depends most directly on catching food from the ocean?", ["Fisher", "Librarian", "Bus driver", "Dentist"], 0, "A fisher may catch fish and other food from the ocean.")
        ],
        C1: [
          q("When north is at the top of a map, which direction is on the right?", ["East", "West", "South", "Up"], 0, "East is shown on the right when north is at the top of a map."),
          q("The library is north of the school. Which way do you travel from the school to the library?", ["North", "South", "East", "West"], 0, "The clue says the library is north of the school.")
        ]
      }
    },
    3: {
      math: {
        N1: [
          q("What is the value of the 6 in 684?", ["6", "60", "600", "6,000"], 2, "The 6 is in the hundreds place, so its value is 600."),
          q("Which hundred is 347 closest to?", ["300", "400", "500", "700"], 0, "347 is 47 away from 300 and 53 away from 400, so it is closer to 300.")
        ],
        N2: [
          q("Five trays hold 4 muffins each. How many muffins are there?", ["9", "16", "20", "25"], 2, "Five groups of four make 5 × 4 = 20."),
          q("What is 18 ÷ 3?", ["5", "6", "7", "9"], 1, "18 shared into three equal groups gives 6 in each group.")
        ],
        F1: [
          q("Which fraction is larger when the wholes are the same size?", ["1/3", "1/6", "They are equal", "There is no way to tell"], 0, "When a whole has fewer equal parts, each part is larger, so 1/3 is larger."),
          q("A rectangle is 5 cm long and 3 cm wide. What is its perimeter?", ["8 cm", "15 cm", "16 cm", "30 cm"], 2, "Add all four sides: 5 + 3 + 5 + 3 = 16 cm.")
        ]
      },
      language: {
        R1: [
          q("What does the suffix -ful mean in hopeful?", ["Full of", "Without", "Again", "Before"], 0, "Hopeful means full of hope."),
          q("How many syllables are in computer?", ["1", "2", "3", "4"], 2, "Computer has three spoken parts: com-pu-ter.")
        ],
        R2: [
          q("Priya came inside carrying a wet umbrella. What can you infer?", ["It was raining", "It was snowing indoors", "She went swimming", "The umbrella was new"], 0, "A wet umbrella is a clue that it was raining outside."),
          q("A class planted seeds, measured the sprouts each week, and recorded the results. What is the best summary?", ["The class tracked how seedlings grew", "The class painted flowerpots for the school hallway", "The class cooked vegetables for a shared lunch", "The class visited a farm to see the animals"], 0, "The important idea is that the class observed and recorded plant growth.")
        ],
        W1: [
          q("Which detail best supports the topic sentence 'Our school garden helps living things'?", ["Bees visit its flowers", "My green backpack hangs beside the classroom door", "The school gym has a large clock above the doors", "Our lunch break starts at noon on school days"], 0, "Bees visiting flowers is a detail about how the garden helps living things."),
          q("Which sentence is the best ending for a paragraph about saving water?", ["Small choices can help protect our water.", "My favourite game is tag when friends visit the park.", "The word water can rhyme with daughter in a poem.", "Yesterday I wore a red shirt and carried my backpack."], 0, "The sentence closes the paragraph by returning to the main idea of saving water.")
        ]
      },
      science: {
        L1: [
          q("Which plant part uses sunlight to help make food?", ["Leaves", "Roots", "Flowers only", "Seeds only"], 0, "Leaves capture sunlight and use it to help make food for the plant."),
          q("What is one job of a plant stem?", ["Support the plant and carry water", "Turn loose garden soil into solid rock", "Make the Sun shine more brightly on leaves", "Keep each insect away from every flower"], 0, "A stem supports the plant and carries water between roots and leaves.")
        ],
        F1: [
          q("What can a push do to a swing that is still?", ["Make it move", "Turn it into water", "Remove its mass", "Make gravity stop"], 0, "A push is a force that can start the swing moving."),
          q("Which object will a magnet most likely attract?", ["A steel paper clip", "A wooden craft stick", "A rubber eraser", "A glass bead"], 0, "Steel contains iron, so a magnet can attract the paper clip.")
        ],
        E1: [
          q("Which soil usually lets water drain through fastest?", ["Sandy soil", "Clay soil", "Frozen soil", "Soil covered with plastic"], 0, "Sandy soil has larger spaces that let water move through quickly."),
          q("How can compost help garden soil?", ["It adds nutrients and organic matter", "It changes healthy soil into hard plastic", "It removes helpful worms and tiny organisms", "It prevents water from entering the garden soil"], 0, "Compost adds decayed organic matter that can improve soil.")
        ]
      },
      social: {
        A1: [
          q("Which source could give direct evidence about a child's life in 1820?", ["A diary written by a child in 1820", "A cartoon created today about an imagined family", "Tomorrow's weather report for a nearby town", "A made-up space story set far in the future"], 0, "A child's diary written at the time is a primary source about daily life."),
          q("How could a river support a community in the early 1800s?", ["It could provide travel, food, and water", "It could connect homes to modern internet service", "It could support scheduled flights at an airport", "It could make cold winter weather disappear"], 0, "Rivers supported travel, food gathering, water access, and trade.")
        ],
        B1: [
          q("Which land use is mainly for growing food?", ["Farmland", "A parking lot", "A movie theatre", "A bus station"], 0, "Farmland is used to grow crops or raise animals for food."),
          q("Which level of government usually makes decisions about local parks?", ["Municipal government", "The government of another country", "A sports team", "A private book club"], 0, "Municipal governments manage many local services and spaces, including parks.")
        ],
        C1: [
          q("What does a map scale help you find?", ["Distance between places", "Tomorrow's temperature at the weather station", "The exact age of a tree beside the road", "How the final chapter of a story will end"], 0, "A map scale connects distance on the map with distance in the real world."),
          q("Which source would best help explain why a town grew beside a lake?", ["Old maps, photographs, and records", "A list showing people's favourite paint colours", "A newly written fairy tale about an imaginary lake", "A restaurant menu that does not name any place"], 0, "Maps, photographs, and records can provide evidence about location and change over time.")
        ]
      }
    }
  };

  Object.assign(EXTRA_PROBES, {
    4: {
      language: {
        R1: [
          q("The desert was arid, so few plants grew there. What does arid mean?", ["Very dry", "Very cold", "Crowded", "Noisy"], 0, "Few plants and desert are clues that arid means very dry."),
          q("Which text feature explains a photograph?", ["A caption", "An index", "A title page", "A glossary"], 0, "A caption gives information about a photograph or illustration.")
        ],
        R2: [
          q("Kai packed a map, water, and boots. What can you infer?", ["Kai is preparing for a hike", "Kai is baking bread for a large dinner", "Kai is getting ready to sleep for the night", "Kai has misplaced a book borrowed from the library"], 0, "A map, water, and boots are useful for a hike."),
          q("A report describes beaks, feathers, and nests. What is its central topic?", ["Birds", "Weather", "Bridges", "Music"], 0, "Every listed detail is connected to birds.")
        ],
        W1: [
          q("Which closing best fits an email to a teacher?", ["Thank you for your help,", "Bye forever, and do not write back!", "Whatever you decide is fine with me,", "The end of this very long story."], 0, "“Thank you for your help,” is clear and respectful for a teacher."),
          q("Which order makes an explanation easiest to follow?", ["Steps from first to last", "Random details", "The ending before the beginning", "Unrelated ideas"], 0, "Putting steps in time order helps readers follow a process.")
        ]
      },
      science: {
        L1: [
          q("What may happen if a pond habitat dries up?", ["Pond animals may lose food and shelter", "The fish may grow wings and move into nearby trees", "The remaining water may change into solid metal", "The animals may keep the same food and shelter as before"], 0, "A habitat change can remove resources living things need."),
          q("In grass → rabbit → fox, which animal eats the rabbit?", ["The fox", "The grass", "The rabbit", "No organism"], 0, "The arrow from rabbit to fox shows energy moving to the fox.")
        ],
        M1: [
          q("Which material reflects the most light?", ["A shiny mirror", "A sheet of soft black felt", "A piece of rough brown cardboard", "A tray filled with dark garden soil"], 0, "A smooth mirror reflects much of the light that reaches it."),
          q("How can you make a plucked elastic band sound higher?", ["Stretch it tighter", "Make the elastic band much looser", "Cover both ears before plucking the band", "Turn off the lamp beside the elastic band"], 0, "A tighter band vibrates faster and makes a higher sound.")
        ],
        E1: [
          q("Which property helps identify a mineral?", ["Hardness", "The day it was found", "The collector's name", "The box colour"], 0, "Hardness is an observable property used to identify minerals."),
          q("What forms when rock breaks into smaller pieces over time?", ["Sediment", "Plastic", "Electricity", "Sunlight"], 0, "Weathering breaks rock into smaller pieces called sediment.")
        ]
      },
      social: {
        A1: [
          q("Why did many early societies settle near rivers?", ["Rivers provided water, food, and travel", "Rivers prevented dangerous storms from reaching settlements", "Rivers produced finished metal tools for the community", "Rivers completed the work people needed to do"], 0, "Rivers supplied important resources and transportation routes."),
          q("Which source is evidence from an early society?", ["An artifact found by archaeologists", "Tomorrow's weather report for the same region", "A modern cartoon inspired by an imagined society", "A calendar describing events far in the future"], 0, "An artifact can provide direct evidence about how people lived.")
        ],
        B1: [
          q("Which physical feature is found in the Canadian Shield?", ["Many lakes and rocky land", "Tropical rainforest", "Active volcanoes everywhere", "A single flat island"], 0, "The Canadian Shield is known for exposed rock, forests, and many lakes."),
          q("Why do maps use political boundaries?", ["To show areas governed by provinces or territories", "To measure the amount of rainfall during each month", "To name the animal species found in each habitat", "To predict the time and location of future earthquakes"], 0, "Political boundaries show governed areas such as provinces and territories.")
        ],
        C1: [
          q("Which government is usually responsible for a city bus service?", ["Municipal government", "A student council elected by one school", "The national government of another country", "A community recreational sports league"], 0, "Municipal governments manage many local services, including transit."),
          q("What is one responsible way to share a civic opinion?", ["Give reasons and listen respectfully", "Interrupt a speaker before hearing the full idea", "Repeat a rumour without checking its source", "Dismiss evidence that does not match your opinion"], 0, "Responsible participation includes evidence, reasons, and respectful listening.")
        ]
      }
    },
    5: {
      language: {
        R1: [
          q("How does a semicolon guide fluent reading?", ["It marks a pause between closely related ideas", "It signals that the paragraph and topic have ended", "It tells the reader to shout the following word", "It replaces each comma used anywhere in the text"], 0, "A semicolon separates related independent ideas with a noticeable pause."),
          q("What helps a reader pronounce unfamiliar multisyllable words?", ["Breaking them into syllables and word parts", "Skipping the word whenever it looks long or difficult", "Reading the first letter and ignoring the remaining letters", "Guessing the pronunciation from the colour of the page"], 0, "Syllables, roots, prefixes, and suffixes provide useful decoding clues.")
        ],
        R2: [
          q("Two articles disagree. What should a reader compare first?", ["Their claims and supporting evidence", "The typography and font colours used on each page", "The page numbers printed in the lower corners", "The longest individual words used by both writers"], 0, "Claims and evidence reveal why the articles reach different conclusions."),
          q("Which detail best supports the claim that trees cool cities?", ["Shade temperatures were lower than sunny pavement", "Some tree species have leaves with an oval shape", "A mature tree has bark covering its trunk and branches", "Many cities give names to each public street"], 0, "The temperature comparison directly supports the cooling claim.")
        ],
        W1: [
          q("Which revision improves a paragraph with repeated ideas?", ["Combine or remove repeated sentences", "Add the same sentence again", "Delete all punctuation", "Change every noun to thing"], 0, "Removing repetition makes writing clearer and more focused."),
          q("Which transition shows cause and effect?", ["Therefore", "Meanwhile", "For example", "First"], 0, "Therefore introduces a result caused by an earlier idea.")
        ]
      },
      science: {
        L1: [
          q("Which organ pumps blood through the body?", ["The heart", "The stomach", "The lungs", "The skin"], 0, "The heart's contractions move blood through blood vessels."),
          q("How do the lungs and circulatory system work together?", ["Oxygen enters blood in the lungs", "Lungs digest food", "Blood makes bones shorter", "The heart stores air"], 0, "The lungs exchange gases, and blood carries oxygen to body cells.")
        ],
        M1: [
          q("Which change creates a new substance?", ["Iron rusting", "Ice melting", "Paper folding", "Water freezing"], 0, "Rusting is a chemical change that forms iron oxide."),
          q("A mixture contains sand and water. Which tool can separate them?", ["A filter", "A thermometer", "A magnet", "A balance"], 0, "A filter lets water pass while trapping larger sand particles.")
        ],
        E1: [
          q("Which action conserves electrical energy?", ["Turn off unused lights", "Leave a television on", "Open a fridge for fun", "Run an empty dryer"], 0, "Turning off devices when unused reduces energy consumption."),
          q("Why is insulation used in homes?", ["It slows unwanted heat transfer", "It produces unlimited energy", "It makes walls transparent", "It removes all air"], 0, "Insulation helps keep heat inside in winter and outside in summer.")
        ]
      },
      social: {
        A1: [
          q("Why compare Indigenous and European accounts of early contact?", ["They may show different experiences and perspectives", "One account erases every other", "Dates become unimportant", "All accounts are identical"], 0, "Comparing perspectives supports a fuller understanding of past relationships."),
          q("What was one purpose of early trade alliances?", ["Exchange goods and build relationships", "Stop all travel", "Remove every language", "Predict future weather"], 0, "Trade alliances connected communities through exchange and relationships.")
        ],
        B1: [
          q("Which level of government issues Canadian passports?", ["Federal", "Municipal", "School", "Neighbourhood"], 0, "Passports are a responsibility of Canada's federal government."),
          q("What is the main role of elected representatives?", ["Make decisions on behalf of constituents", "Choose everyone's hobbies", "Control the weather", "Write every newspaper"], 0, "Representatives bring public concerns into government decision-making.")
        ],
        C1: [
          q("Which forestry practice supports future tree growth?", ["Replanting after harvest", "Removing every seedling", "Paving the whole forest", "Burning usable soil"], 0, "Replanting helps renew a forest after trees are harvested."),
          q("Why consider several viewpoints in a resource decision?", ["The benefits and effects differ among groups", "Only one group is affected", "Evidence is never useful", "Resources cannot change"], 0, "Resource choices can affect workers, communities, ecosystems, and future users differently.")
        ]
      }
    },
    6: {
      language: {
        R1: [
          q("What does the prefix inter- mean in interconnected?", ["Between or among", "Against", "Before", "Without"], 0, "Inter- means between or among, so interconnected things link together."),
          q("Which clause gives the reason in 'We left because the storm arrived'?", ["because the storm arrived", "We left", "the storm", "left because"], 0, "The clause beginning with because explains why we left.")
        ],
        R2: [
          q("Which detail suggests a source may be biased?", ["It presents only evidence favouring its sponsor", "It lists publication dates", "It links to original data", "It explains its method"], 0, "Leaving out contrary evidence to favour a sponsor can signal bias."),
          q("What makes evidence most useful for a claim?", ["It is relevant, reliable, and specific", "It is popular", "It is repeated loudly", "It uses colourful words"], 0, "Strong evidence directly supports the claim and comes from a trustworthy source.")
        ],
        W1: [
          q("What should research notes include beside a fact?", ["Its source", "A random drawing", "The writer's lunch", "An unrelated title"], 0, "Recording the source makes later citation and checking possible."),
          q("Which is plagiarism?", ["Copying someone's words without credit", "Quoting briefly with a citation", "Summarizing and naming the source", "Writing an original conclusion"], 0, "Using another person's words or ideas without credit is plagiarism.")
        ]
      },
      science: {
        L1: [
          q("Why does biodiversity help an ecosystem?", ["Different species perform different roles", "Every organism becomes identical", "Food webs have one link", "Habitats stop changing"], 0, "Varied species contribute pollination, decomposition, food, shelter, and other roles."),
          q("Which action best protects biodiversity?", ["Preserve connected habitats", "Remove native plants", "Release pets into wetlands", "Drain every pond"], 0, "Connected habitats give species space and pathways to survive and reproduce.")
        ],
        F1: [
          q("What is needed for a bulb to light in a simple circuit?", ["A closed path", "An open switch", "Only one wire end", "A plastic battery"], 0, "Current flows when the circuit provides a complete closed path."),
          q("Which material is a good electrical conductor?", ["Copper", "Rubber", "Dry wood", "Plastic"], 0, "Copper allows electric charge to move through it easily.")
        ],
        E1: [
          q("Why does Earth have seasons?", ["Its tilted axis changes sunlight during its orbit", "The Sun turns off", "Earth changes size", "Clouds move the continents"], 0, "Earth's tilt changes the angle and length of sunlight through the year."),
          q("Which object orbits Earth?", ["The Moon", "The Sun", "Mars", "Polaris"], 0, "The Moon is Earth's natural satellite and travels around it.")
        ]
      },
      social: {
        A1: [
          q("Why can oral histories be valuable sources?", ["They preserve lived experiences and community knowledge", "They contain no perspective", "They predict the future", "They replace all other evidence"], 0, "Oral histories can carry memories and knowledge across generations."),
          q("What helps explain how a community changed over time?", ["Compare sources from different dates", "Use one undated picture", "Ignore people's experiences", "Study an unrelated place"], 0, "Sources from different times show what continued and what changed.")
        ],
        B1: [
          q("Which action is an example of Canada working globally?", ["Joining an international climate agreement", "Renaming one classroom", "Changing a local bus stop", "Opening a school locker"], 0, "International agreements involve cooperation between countries."),
          q("Why does Canada trade with other countries?", ["Countries exchange goods and services they need", "Every country has identical resources", "Trade prevents communication", "Borders remove all transport"], 0, "Trade connects different resources, products, services, and markets.")
        ],
        C1: [
          q("Which question is geographic?", ["How does location affect where people build homes?", "Which poem rhymes?", "How does a violin sound?", "Which fraction is largest?"], 0, "Geographic inquiry studies places, patterns, movement, and human-environment relationships."),
          q("What does population density describe?", ["People living in a given area", "The age of every building", "Daily rainfall", "The length of a highway"], 0, "Population density compares the number of people with the land area.")
        ]
      }
    },
    7: {
      language: {
        R1: [
          q("What does the root bio mean in biodegradable?", ["Life", "Sound", "Light", "Distance"], 0, "The Greek root bio refers to life or living things."),
          q("Which sentence uses a dependent clause?", ["Although it rained, the game continued.", "The game continued.", "Rain fell.", "Fans cheered."], 0, "Although it rained cannot stand alone and depends on the main clause.")
        ],
        R2: [
          q("Which headline uses loaded language?", ["Wasteful plan threatens beloved park", "Council reviews park proposal", "Meeting begins at seven", "Report lists three options"], 0, "Wasteful, threatens, and beloved are chosen to shape emotion."),
          q("How can readers check a surprising claim?", ["Corroborate it with independent reliable sources", "Count its emojis", "Trust the first result", "Ignore its evidence"], 0, "Independent reliable sources can confirm or challenge the claim.")
        ],
        W1: [
          q("Which evidence best supports a school composting proposal?", ["Measured lunch waste sent to landfill", "A student's favourite colour", "The gym schedule", "A list of team names"], 0, "Waste measurements directly show the size of the problem composting could address."),
          q("What should a counterargument paragraph do?", ["Address a reasonable opposing view", "Repeat the title", "Remove all evidence", "Change to an unrelated topic"], 0, "Considering an opposing view can make an argument more thoughtful and credible.")
        ]
      },
      science: {
        L1: [
          q("What role do decomposers have in an ecosystem?", ["They recycle nutrients from dead matter", "They create sunlight", "They stop all predators", "They remove every mineral"], 0, "Decomposers return nutrients to soil and water."),
          q("What can happen when an invasive species spreads?", ["It may compete with native species", "Every habitat improves", "Food webs disappear instantly", "Native species gain unlimited food"], 0, "An invasive species may take resources or change habitat relationships.")
        ],
        M1: [
          q("Which mixture can be separated with a magnet?", ["Iron filings and sand", "Salt and water", "Sugar and water", "Oil and vinegar"], 0, "A magnet attracts the iron filings but not the sand."),
          q("What is the solute in salt water?", ["Salt", "Water", "The cup", "Air"], 0, "The solute is the substance that dissolves; here, it is salt.")
        ],
        F1: [
          q("Which material is a good thermal insulator?", ["Foam", "Copper", "Aluminum", "Iron"], 0, "Foam slows heat transfer because it traps air."),
          q("What happens to particles as a solid warms?", ["They vibrate faster", "They stop moving", "They lose all mass", "They become light"], 0, "Added thermal energy increases particle motion.")
        ]
      },
      social: {
        H1: [
          q("Why was the fur trade important in New France?", ["It shaped trade, alliances, and settlement", "It ended all travel", "It created Confederation", "It replaced farming everywhere"], 0, "The fur trade connected Indigenous nations and Europeans through complex relationships."),
          q("Why compare French, British, and Indigenous perspectives?", ["Groups experienced events differently", "Only one group made choices", "Perspective removes evidence", "All groups agreed"], 0, "Different perspectives reveal varied goals, impacts, and interpretations.")
        ],
        G1: [
          q("What usually forms at a convergent plate boundary?", ["Mountains or trenches", "A new moon", "Daily tides only", "A language border"], 0, "Colliding plates can build mountains or force one plate into a trench."),
          q("Why do climate patterns vary with latitude?", ["Sunlight reaches Earth at different angles", "Latitude changes gravity", "Oceans stop moving", "Continents change size daily"], 0, "The angle of incoming sunlight affects how much energy an area receives.")
        ],
        G2: [
          q("Which choice uses a resource sustainably?", ["Harvest no faster than it can renew", "Use everything immediately", "Ignore habitat damage", "Waste useful material"], 0, "Sustainable use leaves enough time and capacity for a renewable resource to recover."),
          q("What should a mining decision consider?", ["Jobs, community rights, water, and habitat", "Only the rock colour", "One company's slogan", "Tomorrow's lunch"], 0, "Responsible decisions weigh economic, social, legal, and environmental effects.")
        ]
      }
    },
    8: {
      language: {
        R1: [
          q("What helps unpack a dense sentence?", ["Identify its main clause, then added details", "Skip every verb", "Read only punctuation", "Replace it with a title"], 0, "Finding the main clause reveals the core meaning before details are added."),
          q("What does ambiguous mean?", ["Open to more than one meaning", "Perfectly measured", "Written in rhyme", "Completely silent"], 0, "An ambiguous word or statement can be interpreted in more than one way.")
        ],
        R2: [
          q("Which feature most improves a report's credibility?", ["Transparent methods and cited evidence", "A dramatic headline", "Many exclamation marks", "An anonymous slogan"], 0, "Methods and citations let readers examine how conclusions were reached."),
          q("Why check when an online article was updated?", ["Information can become outdated", "Newer always means unbiased", "Dates prove every claim", "Old sources have no value"], 0, "The date helps readers judge whether time-sensitive information is current.")
        ],
        W1: [
          q("Which revision strengthens a long argument?", ["Move evidence beside the claim it supports", "Add unrelated examples", "Remove the conclusion", "Repeat every sentence"], 0, "Placing evidence near its claim makes the reasoning easier to follow."),
          q("What is the purpose of peer feedback?", ["Help a writer see how readers understand the draft", "Give the final grade", "Replace the writer", "Correct only handwriting"], 0, "A peer reader can identify unclear ideas, gaps, and strengths before publication.")
        ]
      },
      science: {
        L1: [
          q("Which cell structure controls what enters and leaves?", ["Cell membrane", "Nucleus", "Cytoplasm", "Vacuole"], 0, "The cell membrane is selectively permeable and regulates movement in and out."),
          q("Why do multicellular organisms have specialized cells?", ["Different cells perform different functions", "Every cell must be identical", "Cells avoid working together", "Specialized cells have no DNA"], 0, "Specialization lets cells carry out particular jobs within tissues and organs.")
        ],
        F1: [
          q("What happens to pressure when the same force acts on a smaller area?", ["Pressure increases", "Pressure decreases", "Pressure becomes zero", "Mass disappears"], 0, "Pressure equals force divided by area, so a smaller area gives greater pressure."),
          q("Why can a steel ship float?", ["Its overall average density is less than water", "Steel has no mass", "Water has no pressure", "Gravity stops at sea"], 0, "The hollow ship displaces enough water to make its average density low enough to float.")
        ],
        E1: [
          q("What drives most of Earth's water cycle?", ["Energy from the Sun", "Moonlight alone", "Earthquakes", "Magnetism"], 0, "Solar energy powers evaporation, which moves water into the atmosphere."),
          q("Which action protects a watershed?", ["Keep pollutants out of storm drains", "Pour oil onto soil", "Remove stream plants", "Pave every wetland"], 0, "Storm drains often lead to local waterways, so pollutants should be kept out.")
        ]
      },
      social: {
        H1: [
          q("What was a central purpose of Confederation in 1867?", ["Unite colonies under a new federal system", "Create the fur trade", "End all provincial governments", "Move Canada to Europe"], 0, "Confederation joined four provinces in a federal Dominion."),
          q("Why study resistance to Canadian expansion?", ["Expansion affected peoples and lands unequally", "Everyone supported expansion", "Resistance had no causes", "Only weather shaped events"], 0, "Resistance reveals conflicts over rights, land, power, and broken commitments.")
        ],
        G1: [
          q("Which factor often attracts settlement to a location?", ["Access to jobs, transport, and services", "No usable water", "Permanent isolation", "A ban on housing"], 0, "People often settle where livelihoods, movement, and services are accessible."),
          q("What is urbanization?", ["Growth in the share of people living in cities", "Movement of rivers", "Loss of every road", "A change in time zones"], 0, "Urbanization is the increasing concentration of population in urban areas.")
        ],
        G2: [
          q("Why is GDP alone incomplete as a quality-of-life measure?", ["It does not show health, equality, or environmental quality", "It measures every kind of well-being", "It includes no economic activity", "It is a weather forecast"], 0, "Economic output does not describe how benefits are shared or many other parts of well-being."),
          q("Which policy could reduce economic inequality?", ["Improve access to education and public services", "Hide all wage data", "Remove every library", "Limit safe drinking water"], 0, "Accessible education and services can expand opportunities and reduce unequal outcomes.")
        ]
      }
    }
  });

  const FOURTH_PROBES = {
    1: {
      language: {
        R1: q("Which word rhymes with moon?", ["spoon", "chair", "sleep", "cloud"], 0, "Moon and spoon share the same ending sound."),
        R2: q("Ravi carried his lunch to school. What did Ravi carry?", ["His lunch", "A bright kite", "A small puppy", "A toy drum"], 0, "The sentence says Ravi carried his lunch."),
        W1: q("Which word needs a capital letter in 'I met sara'?", ["sara", "met", "I", "no change is needed"], 0, "Sara is a person's name, so it begins with a capital letter.")
      },
      science: {
        L1: q("What does a bird need to breathe?", ["Air", "Paint", "Plastic", "A bell"], 0, "Birds are living things and need air to breathe."),
        M1: q("Which material is soft enough for a winter scarf?", ["Wool", "Glass", "Brick", "Metal"], 0, "Wool is soft and can help keep a person warm."),
        E1: q("What is a safe way to use a lamp?", ["Ask an adult before changing its bulb", "Touch the bulb while it is still very hot", "Pull the electrical cord instead of the plug", "Pour water near the lamp before turning it on"], 0, "An adult can help handle electrical parts and hot bulbs safely.")
      },
      social: {
        A1: q("What is a respectful way to learn about a local Indigenous community?", ["Use information shared by the community", "Use a made-up story without checking who wrote it", "Assume nearby communities share identical traditions", "Leave out the community's own name and voices"], 0, "First Nations, Métis, and Inuit communities are best learned about through their own voices and trusted resources."),
        B1: q("Which community helper cares for people who are sick?", ["A nurse", "A pilot", "A painter", "A referee"], 0, "Nurses help care for people who are sick or hurt."),
        C1: q("Which object was used both long ago and today?", ["A spoon", "A video call", "A tablet computer", "A game app"], 0, "People have used spoons for a very long time and still use them today.")
      }
    },
    2: {
      language: {
        R1: q("Which word is made from rain and coat?", ["raincoat", "rainbow", "coasting", "raining"], 0, "Raincoat is a compound word made from rain and coat."),
        R2: q("Tariq swept the floor, wiped the table, and put toys away. What is the main idea?", ["Tariq cleaned the room", "Tariq built a toy from wooden blocks", "Tariq cooked dinner for the whole family", "Tariq played outside with several friends"], 0, "All the details describe ways Tariq cleaned the room."),
        W1: q("Choose the best connector: 'I wore boots ___ it was raining.'", ["because the rain was falling", "before the clear morning began", "unless the path stayed completely dry", "but the sky remained bright and clear"], 0, "Because connects the action with its reason.")
      },
      science: {
        L1: q("How does thick fur help a polar bear?", ["It keeps body heat in", "It helps the bear breathe underwater", "It makes food", "It changes ice to sand"], 0, "Thick fur insulates the bear in a cold habitat."),
        M1: q("Which object is a solid?", ["An ice cube", "Juice", "Rain", "Cooking oil"], 0, "An ice cube is solid water and keeps its own shape."),
        E1: q("Why should people keep garbage out of lakes?", ["Animals need clean water", "Garbage makes water safer", "Fish eat every kind of garbage", "Lakes do not hold water"], 0, "Clean water supports animals, plants, and people.")
      },
      social: {
        A1: q("Which source is respectful for learning about an Indigenous tradition?", ["A resource created with the community", "An online rumour that does not name its source", "A costume advertisement written to sell a product", "A made-up story presented to readers as fact"], 0, "Resources created by or with First Nations, Métis, or Inuit communities can share traditions accurately and respectfully."),
        B1: q("Which home feature is useful where winters are very cold?", ["Insulated walls", "An open roof", "No windows or doors", "A floor made of ice"], 0, "Insulation slows heat loss during cold weather."),
        C1: q("A park is west of the school. Which way is the school from the park?", ["East", "West", "North", "South"], 0, "East is the opposite direction from west.")
      }
    },
    3: {
      language: {
        R1: q("What does the prefix un- mean in unsafe?", ["Not", "Again", "Before", "Full of"], 0, "Unsafe means not safe, so un- means not."),
        R2: q("Mei checked the dark clouds and opened her umbrella. What can you infer?", ["Rain may begin", "It is bedtime", "The sky is clear", "She is indoors"], 0, "Dark clouds and an umbrella are clues that rain may begin."),
        W1: q("Which detail supports 'Our library is a useful place'?", ["It lends books and offers research tools", "My striped socks are folded inside the dresser", "The playground has sand beside the climbing wall", "Winter days can be cold after the snow arrives"], 0, "Books and research tools explain why the library is useful.")
      },
      science: {
        L1: q("What is one job of plant roots?", ["Take in water and hold the plant", "Catch sunlight above the ground for each leaf", "Make the flowers lift away and fly", "Change fallen green leaves into solid rocks"], 0, "Roots anchor a plant and absorb water and minerals."),
        F1: q("Which force pulls a dropped ball toward the ground?", ["Gravity", "Magnetism from the ball", "Light", "Sound"], 0, "Gravity pulls objects toward Earth."),
        E1: q("Which soil is best for many garden plants?", ["Soil with air, water, and organic matter", "A layer made entirely from solid bedrock", "A container filled with dry plastic beads", "Densely packed clay with very little air"], 0, "Healthy garden soil provides spaces, moisture, nutrients, and organic matter.")
      },
      social: {
        A1: q("Which source can share a First Nations community's view of life in the early 1800s?", ["An oral history shared by the community", "A future weather report written for another region", "A fictional space story set on a distant planet", "An advertisement that does not identify its source"], 0, "Community oral histories can preserve First Nations experiences, knowledge, and perspectives."),
        B1: q("Why might a town grow near a highway?", ["People and goods can travel there", "The highway causes rain to fall on nearby farms", "The road itself grows food for the community", "Passing cars remove each old building from the town"], 0, "Transportation routes connect people, services, and trade."),
        C1: q("What information does a map legend give?", ["The meaning of symbols", "The total weight of the folded paper map", "Tomorrow's weather in each mapped location", "The names and traits of a story's characters"], 0, "A legend or key tells what map symbols represent.")
      }
    },
    4: {
      language: {
        R1: q("What does the suffix -able mean in washable?", ["Can be", "Without", "Before", "Again"], 0, "Washable means able to be washed."),
        R2: q("Which detail is most important in a summary of a fire drill?", ["Students followed the exit route safely", "One student's shoe had a bright blue lace", "The classroom clock was large and round", "Colourful posters covered the hallway walls"], 0, "The safe exit is central to what happened during the drill."),
        W1: q("Which sentence best fits instructions?", ["Press the green button after the light flashes.", "Buttons can be pleasant shapes and colours.", "I wonder why green is used on many signs.", "Once upon a time, a green light began to glow."], 0, "Instructions use clear action words and an exact sequence.")
      },
      science: {
        L1: q("What is a producer in a food chain?", ["A plant that makes its own food", "An animal that hunts other animals for food", "A fungus that breaks down dead organisms", "A rock resting in the soil below a plant"], 0, "Plants use sunlight to make food and begin many food chains."),
        M1: q("Why does an echo occur?", ["Sound reflects from a surface", "Light energy freezes inside the surrounding air", "The air stops moving throughout the whole space", "A nearby magnet pulls the sound toward a wall"], 0, "An echo is reflected sound reaching a listener again."),
        E1: q("Which rock forms when melted rock cools?", ["Igneous rock", "Sedimentary rock", "Soil", "Fossil fuel"], 0, "Igneous rock forms as magma or lava cools and solidifies.")
      },
      social: {
        A1: q("Why do historians compare artifacts and written sources?", ["Different evidence can confirm or challenge ideas", "One source can answer each question without other evidence", "Artifacts can be understood without learning their context", "Written accounts are free from perspective and bias"], 0, "Combining sources can create a fuller, better-supported account."),
        B1: q("Which region has fertile soil and many large cities?", ["Great Lakes–St. Lawrence Lowlands", "The sparsely populated islands of the High Arctic", "The ocean floor beyond the Appalachian coastline", "The permanent ice cap in Canada's far north"], 0, "The lowlands support agriculture, transportation, and a large population."),
        C1: q("Which action is a form of civic participation?", ["Writing to a councillor about a local issue", "Ignoring a public safety rule during a community event", "Damaging a neighbourhood park after it closes", "Sharing false information about a local decision"], 0, "Contacting a representative is one way to participate in public decisions.")
      }
    },
    5: {
      language: {
        R1: q("Why should a reader group words into phrases?", ["Phrases make meaning and fluency clearer", "Each word should be separated by a long pause", "Phrases remove the punctuation printed in a sentence", "Grouping spoken words changes their written spelling"], 0, "Meaningful phrasing helps reading sound natural and supports understanding."),
        R2: q("Which evidence best supports that exercise improves focus?", ["Students completed more tasks after activity breaks", "The gym floor is shiny", "Running shoes have laces", "Some balls are orange"], 0, "Task-completion data directly connects activity breaks with focus."),
        W1: q("Which sentence belongs in a conclusion?", ["These changes would make our playground safer for everyone.", "My first detail is", "Here is an unrelated fact", "This paragraph has no topic"], 0, "A conclusion returns to the main idea and explains its importance.")
      },
      science: {
        L1: q("Where does most nutrient absorption occur?", ["The small intestine", "The heart", "The lungs", "The skin"], 0, "The small intestine absorbs nutrients from digested food."),
        M1: q("Which change is reversible?", ["Water freezing", "Wood burning", "Iron rusting", "An egg cooking"], 0, "Frozen water can melt back into liquid water."),
        E1: q("Which device changes electrical energy into motion?", ["An electric fan", "A paper poster", "A glass cup", "A wool blanket"], 0, "The fan's motor uses electrical energy to turn its blades.")
      },
      social: {
        A1: q("Why were waterways important during early contact?", ["They supported travel, trade, and communication", "They removed every conflict", "They created railways", "They froze all year"], 0, "Water routes connected communities and trading networks."),
        B1: q("Which responsibility belongs mainly to a provincial government?", ["Public education", "National defence", "Passports", "City recycling pickup"], 0, "Provinces and territories are responsible for public education."),
        C1: q("Which evidence helps compare two resource plans?", ["Expected jobs, costs, habitat effects, and community views", "Logo colours", "A single slogan", "The meeting room size"], 0, "Relevant social, economic, and environmental evidence supports comparison.")
      }
    },
    6: {
      language: {
        R1: q("What does the suffix -ology mean in geology?", ["The study of", "Without", "Small", "Against"], 0, "The suffix -ology means the study of a subject."),
        R2: q("Which is a primary source for a current school event?", ["A video recorded during the event", "A summary written years later", "A fictional story", "An unrelated website"], 0, "A recording made during the event is direct evidence from that time."),
        W1: q("When should a writer use quotation marks in research?", ["Around a source's exact words", "Around every paragraph", "Instead of a citation", "Only in the title"], 0, "Quotation marks identify exact borrowed wording, which also needs a citation.")
      },
      science: {
        L1: q("What is one benefit of genetic diversity in a species?", ["Some individuals may survive new conditions", "All individuals become identical", "The habitat cannot change", "Predators disappear"], 0, "Variation can help some members survive disease or environmental change."),
        F1: q("What does a switch do in a circuit?", ["Opens or closes the path", "Creates matter", "Stores unlimited current", "Turns metal into plastic"], 0, "A switch controls whether the circuit path is complete."),
        E1: q("Why does the Moon appear to change shape?", ["We see different amounts of its lit half", "The Moon grows and shrinks", "Clouds cut pieces off", "Earth's shadow causes every phase"], 0, "As the Moon orbits Earth, our view of its sunlit half changes.")
      },
      social: {
        A1: q("Why is learning about the Holocaust important?", ["It helps us recognize the dangers of antisemitism and protect human rights", "It proves discrimination is harmless", "It replaces every other part of history", "It means evidence is unnecessary"], 0, "Learning about the Holocaust helps students understand the consequences of antisemitism, racism, and the denial of human rights."),
        B1: q("Which organization brings many countries together to discuss global issues?", ["The United Nations", "A local library board", "One classroom", "A neighbourhood team"], 0, "The United Nations is an international organization of member states."),
        C1: q("Why might a geographer layer maps?", ["To compare patterns such as population and land use", "To hide every label", "To make distances random", "To remove locations"], 0, "Map layers reveal relationships between different kinds of spatial data.")
      }
    },
    7: {
      language: {
        R1: q("What does the prefix counter- mean in counterargument?", ["Opposing", "Before", "Together", "Without"], 0, "A counterargument presents a view that opposes another argument."),
        R2: q("Which question helps reveal a text's missing perspective?", ["Whose experience is not represented?", "How many commas appear?", "What colour is the page?", "Which word is shortest?"], 0, "Asking who is absent helps readers notice limits in representation."),
        W1: q("Which revision improves an argument's reasoning?", ["Explain how each piece of evidence supports the claim", "Add more slogans", "Remove all sources", "Repeat the claim only"], 0, "Reasoning must connect the evidence to the argument's claim.")
      },
      science: {
        L1: q("What is carrying capacity?", ["The largest population an environment can support", "An animal's speed", "The number of ecosystems", "A plant's height"], 0, "Resources and conditions limit how many individuals a habitat can sustain."),
        M1: q("Which process recovers salt from salt water?", ["Evaporation", "Magnetic separation", "Sieving", "Freezing sand"], 0, "When water evaporates, dissolved salt remains behind."),
        F1: q("In which direction does thermal energy move naturally?", ["From warmer matter to cooler matter", "From cooler matter to warmer matter only", "Toward the largest object", "Away from every solid"], 0, "Thermal energy transfers from higher to lower temperature.")
      },
      social: {
        H1: q("What does the presence of free and enslaved Black people in colonial Canada show?", ["Black history has been part of Canada since the colonial period", "Black people arrived only after Confederation", "Colonial laws treated everyone equally", "No Black communities existed"], 0, "Free and enslaved Black people lived in New France and British North America, making Black history part of early Canadian history."),
        G1: q("What is the epicentre of an earthquake?", ["The point on Earth's surface above its focus", "The centre of a cloud", "A plate's oldest rock", "A mountain summit"], 0, "The epicentre lies at the surface directly above where the earthquake begins."),
        G2: q("Why is consultation important in resource development?", ["Affected communities have knowledge, interests, and rights", "Only companies experience effects", "Consultation guarantees agreement", "Evidence is unnecessary"], 0, "Consultation brings affected rights and perspectives into decisions.")
      }
    },
    8: {
      language: {
        R1: q("What does concise writing do?", ["Expresses meaning with no unnecessary words", "Uses the longest possible wording", "Avoids all detail", "Repeats every idea"], 0, "Concise language is clear and economical without losing needed meaning."),
        R2: q("Which source is best for checking a scientific claim?", ["A peer-reviewed study with described methods", "An anonymous advertisement", "A post with no evidence", "A fictional dialogue"], 0, "Peer review and transparent methods support careful evaluation."),
        W1: q("What should a writer do after receiving conflicting feedback?", ["Compare it with the purpose and intended audience", "Accept every suggestion", "Reject all suggestions", "Delete the draft"], 0, "Revision decisions should serve the text's purpose, evidence, and audience.")
      },
      science: {
        L1: q("Which structure contains most of a cell's genetic material?", ["The nucleus", "The cell membrane", "The cytoplasm", "A vacuole"], 0, "In plant and animal cells, most DNA is stored in the nucleus."),
        F1: q("What does buoyant force do?", ["Pushes upward on an object in a fluid", "Pulls every object downward", "Removes an object's volume", "Stops fluid pressure"], 0, "A fluid exerts an upward buoyant force on immersed objects."),
        E1: q("Why are wetlands important in a watershed?", ["They store water, filter pollutants, and provide habitat", "They create plastic", "They stop all evaporation", "They remove every insect"], 0, "Wetlands slow and filter water while supporting many organisms.")
      },
      social: {
        H1: q("Why did Black communities create churches, newspapers, and mutual-aid groups after Confederation?", ["To support community life and challenge discrimination", "To stop people from sharing ideas", "To replace every government", "To prevent neighbours from helping one another"], 0, "Black communities built institutions that supported education, culture, mutual aid, and action against racism."),
        G1: q("Which is a push factor in migration?", ["Conflict that makes a place unsafe", "A new job at the destination", "Family already at the destination", "Better services elsewhere"], 0, "A push factor is a condition that encourages people to leave a place."),
        G2: q("Which indicator directly reflects population health?", ["Life expectancy", "Flag colour", "Number of time zones", "Coastline length"], 0, "Life expectancy summarizes important patterns in health and living conditions.")
      }
    }
  };

  Object.entries(FOURTH_PROBES).forEach(([grade, subjects]) => {
    Object.entries(subjects).forEach(([subject, outcomes]) => {
      Object.entries(outcomes).forEach(([code, probe]) => EXTRA_PROBES[grade][subject][code].push(probe));
    });
  });

  const CURRICULUM = {};
  const SCIENCE_STRANDS = {
    1: { L1: "B", M1: "C", E1: "D" },
    2: { L1: "B", M1: "C", E1: "E" },
    3: { L1: "B", F1: "D", E1: "E" },
    4: { L1: "B", M1: "C", E1: "E" },
    5: { L1: "B", M1: "C", E1: "D" },
    6: { L1: "B", F1: "D", E1: "E" },
    7: { L1: "B", M1: "C", F1: "D" },
    8: { L1: "B", F1: "C", E1: "E" }
  };

  function strandIds(grade, subject, code) {
    if (subject === "math") {
      if (code.startsWith("N") || code === "F1") return ["B"];
      if (code === "D1") return ["D"];
      if (code === "S1") return ["E"];
      if (code === "P1" || code === "A1") return ["C", "E"];
    }
    if (subject === "language") return [{ R1: "B", R2: "C", W1: "D" }[code]];
    if (subject === "science") return [SCIENCE_STRANDS[grade][code]];
    if (subject === "social") {
      if (code === "A1") return ["A"];
      if (code === "B1") return ["B"];
      if (code === "C1" || code === "H1") return ["A", "B"];
      return code === "G1" ? ["A", "B"] : ["C", "D"];
    }
    return [];
  }

  function outcomeSource(subject) {
    return {
      math: "Ontario Mathematics, 2020",
      language: "Ontario Language, 2023",
      science: "Ontario Science and Technology, 2022",
      social: "Ontario Social Studies, History and Geography, current revisions"
    }[subject];
  }

  for (let grade = 1; grade <= 8; grade += 1) {
    CURRICULUM[grade] = {
      math: MATH[grade - 1],
      language: LANGUAGE[grade - 1],
      science: SCIENCE[grade - 1],
      social: SOCIAL[grade - 1]
    };
    Object.entries(CURRICULUM[grade]).forEach(([subject, outcomes]) => {
      CURRICULUM[grade][subject] = outcomes.map(outcome => ({
        ...outcome,
        expectationIds: [`MQ-ON-G${grade}-${subject.toUpperCase()}-${outcome.code}`],
        strandIds: strandIds(grade, subject, outcome.code),
        source: outcomeSource(subject),
        mappingType: "MapleQuest interpretation"
      }));
    });
  }

  const QUESTION_CACHE = new Map();
  const plainNumber = value => Number.isInteger(value) ? String(value) : Number(value.toFixed(2)).toString();
  const money = value => `$${Number(value).toFixed(2)}`;
  const countedNoun = (value, singular, plural = `${singular}s`) => Math.abs(Number(value)) === 1 ? singular : plural;

  function numberProbe(prompt, answer, distractors, explanation, format = plainNumber, metadata = {}) {
    const choices = [];
    for (const value of [answer, ...distractors]) {
      const choice = format(value);
      if (!choices.includes(choice)) choices.push(choice);
    }
    let step = 1;
    while (choices.length < 4) {
      const choice = format(answer + step);
      if (!choices.includes(choice)) choices.push(choice);
      step += 1;
    }
    return q(prompt, choices.slice(0, 4), 0, explanation, {
      ...metadata,
      ...(metadata.interactionType === "numeric-input" ? { expectedAnswer: format(answer) } : {})
    });
  }

  function mathTaskKind(prompt) {
    const value = prompt.toLowerCase();
    if (/greater|which number/.test(value)) return "compare-quantities";
    if (/gets|added|earns .* more|have now/.test(value)) return "addition";
    if (/gives|borrowed|remain/.test(value)) return "subtraction";
    if (/how many .* altogether|packs|rows with|trays|bags have/.test(value)) return "equal-groups";
    if (/around|border trim|fencing/.test(value)) return "perimeter";
    if (/cover|area/.test(value)) return "area";
    if (/equal pieces|one ticket|per ticket/.test(value)) return "division-rate";
    if (/percent|%/.test(value)) return "percent";
    if (/temperature/.test(value)) return "integer-change";
    if (/how many hours|cost \$/.test(value)) return "inverse-equation";
    if (/charges|taxi/.test(value)) return "linear-cost";
    if (/support cable|hypotenuse/.test(value)) return "pythagorean-length";
    return "calculation-model";
  }

  function additionPair(index, total = 20, minimumFirst = 0, minimumSecond = 0) {
    let remaining = index;
    for (let first = minimumFirst; first <= total - minimumSecond; first += 1) {
      const row = total - first - minimumSecond + 1;
      if (remaining < row) return [first, remaining + minimumSecond];
      remaining -= row;
    }
    return [minimumFirst, minimumSecond];
  }

  function boundedDistractors(answer, minimum, maximum, preferred = []) {
    const values = [];
    for (const value of preferred) {
      if (value >= minimum && value <= maximum && value !== answer && !values.includes(value)) values.push(value);
    }
    for (let distance = 1; values.length < 3; distance += 1) {
      for (const value of [answer - distance, answer + distance]) {
        if (value >= minimum && value <= maximum && value !== answer && !values.includes(value)) values.push(value);
        if (values.length === 3) break;
      }
    }
    return values;
  }

  function generatedMathProbe(grade, code, seed) {
    const key = `${grade}:${code}`;
    const weight = Math.min(5, Math.floor(seed / 80) + 1);
    const storyProbe = (prompt, answer, distractors, explanation, format = plainNumber) =>
      numberProbe(prompt, answer, distractors, explanation, format, {
        weight,
        context: "word-problem",
        familyId: `MQ-ON-G${grade}-MATH-${code}-${mathTaskKind(prompt)}-L${weight}`,
        interactionType: grade >= 3 && seed % 5 === 0 ? "numeric-input" : "multiple-choice",
        cognitiveDemand: "apply",
        difficultySource: "generator-band",
        sourceKind: "parameterized",
        misconceptionCodes: [`${code.toLowerCase()}-operation-choice`]
      });

    if (key === "1:N1") {
      const first = seed % 50 + 1;
      const second = (first + 1 + Math.floor(seed / 50)) % 50 + 1;
      const answer = Math.max(first, second);
      const thing = ["block", "button", "shell", "sticker"][Math.floor(seed / 50) % 4];
      return storyProbe(`Ari counted ${first} ${countedNoun(first, thing)}. Bea counted ${second} ${countedNoun(second, thing)}. Which number shows the greater amount?`, answer, boundedDistractors(answer, 1, 50, [Math.min(first, second)]), `${answer} is the greater count because it is farther along when counting.`);
    }
    if (key === "1:N2") {
      const additionCount = 190;
      if (seed < additionCount) {
        const [first, second] = additionPair(seed, 20, 1, 1);
        const answer = first + second;
        return storyProbe(`Maya has ${first} ${countedNoun(first, "sticker")} and gets ${second} more. How many stickers does she have now?`, answer, boundedDistractors(answer, 0, 20, [Math.abs(first - second)]), `Getting more means add: counting ${second} on from ${first} gives ${answer}.`);
      }
      const [first, second] = additionPair(seed - additionCount, 20, 0, 1);
      const whole = first + second;
      return storyProbe(`Maya has ${whole} ${countedNoun(whole, "sticker")} and gives ${second} away. How many stickers remain?`, first, boundedDistractors(first, 0, 20, [second]), `Giving away means subtract: taking ${second} from ${whole} leaves ${first}.`);
    }
    if (key === "1:S1") {
      const first = seed % 20 + 1;
      const second = Math.floor(seed / 20) % 20 + 1;
      const answer = Math.abs(first - second);
      const prompt = `Two strips are ${first} cube${first === 1 ? "" : "s"} and ${second} cube${second === 1 ? "" : "s"} long. What is the difference?`;
      const explanation = first === second
        ? `Both strips are the same length, so the difference is 0 cubes.`
        : `The longer strip is ${answer} cube${answer === 1 ? "" : "s"} longer.`;
      return storyProbe(prompt, answer, [first + second, Math.min(first, second), answer + 1], explanation);
    }
    if (key === "2:N1") {
      const first = seed % 200 + 1;
      const second = (first + 1 + Math.floor(seed / 200)) % 200 + 1;
      const answer = Math.max(first, second);
      return storyProbe(`One class collected ${first} ${countedNoun(first, "can")} and another collected ${second}. Which number is the greater collection?`, answer, boundedDistractors(answer, 1, 200, [Math.min(first, second)]), `${answer} represents the greater collection because it has the greater place value.`);
    }
    if (key === "2:N2") {
      const first = 20 + seed % 90;
      const second = 1 + Math.floor(seed / 90) % 5;
      const subtract = seed % 2 === 1;
      const answer = subtract ? first - second : first + second;
      const prompt = subtract
        ? `A shelf holds ${first} books. ${second} ${countedNoun(second, "book")} ${second === 1 ? "is" : "are"} borrowed. How many books remain?`
        : `A shelf holds ${first} books. ${second} more ${countedNoun(second, "book")} ${second === 1 ? "is" : "are"} added. How many books are there now?`;
      return storyProbe(prompt, answer, [answer - 1, answer + 1, subtract ? first + second : first - second], `${subtract ? "Borrowing books means subtract" : "Adding books means add"}; the answer is ${answer}.`);
    }
    if (key === "2:D1") {
      const groups = seed % 9 + 2;
      const each = Math.floor(seed / 9) % 9 + 2;
      const things = ["shells", "buttons", "crayons", "blocks", "stickers"][Math.floor(seed / 81) % 5];
      const answer = groups * each;
      return storyProbe(`${groups} bags have ${each} ${things} each. How many ${things} are there altogether?`, answer, [groups + each, answer - groups, answer + each], `${groups} equal groups of ${each} make ${answer}.`);
    }
    if (key === "3:N1") {
      const first = 100 + seed;
      const second = 999 - seed;
      const answer = Math.max(first, second);
      return storyProbe(`Two school libraries counted ${first} and ${second} books. Which number is the greater total?`, answer, [Math.min(first, second), answer - 100, answer + 1], `Compare the hundreds first; ${answer} represents the greater book total.`);
    }
    if (key === "3:N2") {
      const groups = seed % 10 + 2;
      const each = Math.floor(seed / 10) % 10 + 2;
      const things = ["muffins", "pencils", "cards", "beads"][Math.floor(seed / 100) % 4];
      const answer = groups * each;
      return storyProbe(`${groups} trays hold ${each} ${things} each. How many ${things} are there altogether?`, answer, [groups + each, answer - groups, answer + each], `Equal groups call for multiplication: ${groups} groups of ${each} make ${answer}.`);
    }
    if (key === "3:F1") {
      const length = seed % 25 + 2;
      const width = Math.floor(seed / 25) % 16 + 2;
      const answer = 2 * (length + width);
      return storyProbe(`A rectangular poster is ${length} cm by ${width} cm. How much border trim goes all the way around it?`, answer, [length + width, length * width, answer + 2], `Going around the poster means find perimeter: ${length} + ${width} + ${length} + ${width} = ${answer} cm.`, value => `${plainNumber(value)} cm`);
    }
    if (key === "4:N1") {
      const number = 1_000 + seed;
      const answer = number / 10;
      return storyProbe(`A ${number} cm ribbon is cut into 10 equal pieces. How long is each piece?`, answer, [number / 100, number, answer + 10], `Equal pieces call for division: ${number} divided by 10 is ${plainNumber(answer)} cm.`, value => `${plainNumber(value)} cm`);
    }
    if (key === "4:N2") {
      const first = seed % 89 + 12;
      const second = Math.floor(seed / 89) % 5 + 2;
      const answer = first * second;
      return storyProbe(`A school orders ${first} packs with ${second} markers in each. How many markers arrive altogether?`, answer, [first + second, answer - first, answer + second], `Equal packs call for multiplication: ${first} groups of ${second} make ${answer}.`);
    }
    if (key === "4:P1") {
      const length = seed % 20 + 2;
      const width = Math.floor(seed / 20) % 20 + 2;
      const answer = 2 * (length + width);
      return storyProbe(`A garden is ${length} m long and ${width} m wide. How much fencing goes around the whole garden?`, answer, [length + width, length * width, answer + 2], `Fencing around the garden means perimeter: twice the length plus twice the width is ${answer} m.`, value => `${plainNumber(value)} m`);
    }
    if (key === "5:N1") {
      const first = (seed % 100 + 1) / 100;
      const second = (Math.floor(seed / 100) + 1) / 10;
      const answer = first + second;
      return storyProbe(`Ari has ${money(first)} and earns ${money(second)} more. How much money does Ari have now?`, answer, [answer - 0.1, answer + 0.1, first], `Earning more means add. Line up the decimal points to get ${money(answer)}.`, money);
    }
    if (key === "5:N2") {
      const first = seed % 100 + 20;
      const second = Math.floor(seed / 100) + 10;
      const answer = first * second;
      return storyProbe(`A theatre has ${second} rows with ${first} seats in each row. How many seats are there?`, answer, [first * (second - 1), answer + first, first + second], `Equal rows call for multiplication. Use partial products to find ${first} times ${second} = ${answer}.`);
    }
    if (key === "5:D1") {
      const length = seed % 25 + 2;
      const width = Math.floor(seed / 25) % 16 + 2;
      const answer = length * width;
      return storyProbe(`A garden bed is ${length} m long and ${width} m wide. How much ground does it cover?`, answer, [2 * (length + width), length + width, answer + width], `Ground covered means area. Multiply length by width to get ${answer} square metres.`, value => `${plainNumber(value)} m²`);
    }
    if (key === "6:N1") {
      const percents = [10, 20, 25, 50];
      const percent = percents[seed % 4];
      const amount = 20 * (Math.floor(seed / 4) % 25 + 1);
      const situations = [
        { prompt: `A class plans to read ${amount} pages and has finished ${percent}%. How many pages are finished?`, unit: "pages" },
        { prompt: `A fundraiser goal is $${amount}, and ${percent}% has been raised. How many dollars have been raised?`, unit: "dollars" },
        { prompt: `A game offers ${amount} points, and a player earned ${percent}%. How many points did the player earn?`, unit: "points" },
        { prompt: `A garden has ${amount} plants, and ${percent}% are watered. How many plants are watered?`, unit: "plants" }
      ];
      const situation = situations[Math.floor(seed / 100) % situations.length];
      const answer = amount * percent / 100;
      const distractors = boundedDistractors(answer, 0, amount, [amount - answer, answer + amount / 10, answer - amount / 10]);
      return storyProbe(situation.prompt, answer, distractors, `${percent}% of ${amount} is ${answer} ${situation.unit}.`);
    }
    if (key === "6:N2") {
      const localSeed = seed % 80;
      const start = localSeed % 20;
      const step = Math.floor(localSeed / 20);
      const firstByWeight = [start, 10 + start, -1 - start, -1 - start, -1 - start];
      const changeByWeight = [1 + step, -1 - step, 1 + step, -5 - step, 21 + step];
      const first = firstByWeight[weight - 1];
      const second = changeByWeight[weight - 1];
      const answer = first + second;
      const changeAmount = Math.abs(second);
      const change = `${second < 0 ? "fell" : "rose"} ${changeAmount} ${countedNoun(changeAmount, "degree")}`;
      return storyProbe(`At noon the temperature was ${plainNumber(first)} °C. It then ${change}. What was the new temperature?`, answer, [first - second, answer - 1, answer + 1], `${second < 0 ? "Falling" : "Rising"} means move ${changeAmount} ${countedNoun(changeAmount, "space")} ${second < 0 ? "left" : "right"} from ${first} to reach ${answer}.`, value => `${plainNumber(value)} °C`);
    }
    if (key === "6:A1") {
      const value = seed % 20 + 1;
      const coefficient = Math.floor(seed / 20) % 20 + 2;
      const answer = coefficient * value + 3;
      return storyProbe(`A club charges $${coefficient} per activity plus a $3 fee. What is the total for ${value} ${countedNoun(value, "activity", "activities")}?`, answer, [coefficient + value + 3, answer - 3, answer + coefficient], `The situation is ${coefficient} times ${value}, plus 3, for a total of $${answer}.`, number => `$${plainNumber(number)}`);
    }
    if (key === "7:N1") {
      const quantity = seed % 20 + 2;
      const rate = Math.floor(seed / 20) % 20 + 3;
      const cost = quantity * rate;
      return storyProbe(`${quantity} tickets cost $${cost} altogether. At this rate, how much does one ticket cost?`, rate, [quantity, cost - quantity, rate + 1], `A per-ticket rate calls for division: $${cost} divided by ${quantity} is $${rate}.`, value => `$${plainNumber(value)}`);
    }
    if (key === "7:A1") {
      const coefficient = seed % 20 + 2;
      const value = Math.floor(seed / 20) % 20 + 1;
      const total = coefficient * value + 5;
      return storyProbe(`A climbing gym charges $5 entry plus $${coefficient} per hour. A visit cost $${total}. How many hours did it last?`, value, [value + 5, total - 5, value + 1], `Subtract the $5 entry fee, then divide by ${coefficient}; the visit lasted ${value} ${countedNoun(value, "hour")}.`, number => `${plainNumber(number)} ${countedNoun(number, "hour")}`);
    }
    if (key === "7:D1") {
      const successes = seed % 20 + 1;
      const total = 20 * (Math.floor(seed / 20) % 20 + 1);
      const answer = successes / total * 100;
      const distractors = boundedDistractors(answer, 0, 100, [answer / 10, answer + 5, 100 - answer]);
      return storyProbe(`In a game, ${successes} of ${total} spins landed on blue. To the nearest hundredth, what percent landed on blue?`, answer, distractors, `Experimental percent calls for division: divide ${successes} by ${total}, multiply by 100, and round.`, value => `${plainNumber(value)}%`);
    }
    if (key === "8:N1") {
      const price = 20 + 5 * (seed % 20);
      const percent = 5 * (Math.floor(seed / 20) % 20 + 1);
      const answer = price * percent / 100;
      const distractors = boundedDistractors(answer, 0, price, [price - answer, answer + price * 0.05, answer - price * 0.05]);
      return storyProbe(`A jacket costs $${price} and is ${percent}% off. How much money is the discount?`, answer, distractors, `The discount is ${percent}% of the price, so multiply ${price} by ${percent / 100} to get ${money(answer)}.`, money);
    }
    if (key === "8:A1") {
      const value = seed % 20 + 1;
      const rate = Math.floor(seed / 20) % 20 + 1;
      const answer = rate * value + 3;
      return storyProbe(`A taxi charges $3 to start plus $${rate} per kilometre. What does a ${value} km trip cost?`, answer, [rate + value + 3, answer - 3, answer + rate], `The cost is the rate times ${value} ${countedNoun(value, "kilometre")}, plus the $3 start fee, for $${answer}.`, number => `$${plainNumber(number)}`);
    }
    if (key === "8:D1") {
      const first = seed % 20 + 3;
      const second = Math.floor(seed / 20) % 20 + 4;
      const squaredLength = first ** 2 + second ** 2;
      const answer = Math.sqrt(squaredLength);
      return storyProbe(`A support cable crosses a frame ${first} m wide and ${second} m high. To the nearest tenth, how long is the cable?`, answer, [answer - 1, answer + 1, first + second], `Use the Pythagorean relationship: c² = ${first ** 2} + ${second ** 2} = ${squaredLength}, so c is about ${answer.toFixed(1)} m.`, number => `${Number(number).toFixed(1)} m`);
    }
    throw new Error(`Missing math generator for ${key}`);
  }

  function mathQuestions(grade, outcome, index, anchors) {
    const questions = [...anchors];
    const prompts = new Set(questions.map(probe => probe.prompt));
    for (let seed = 0; questions.length < 400 && seed < 20_000; seed += 1) {
      const probe = generatedMathProbe(Number(grade), outcome.code, seed);
      if (!prompts.has(probe.prompt)) {
        prompts.add(probe.prompt);
        questions.push(probe);
      }
    }
    if (questions.length !== 400) throw new Error(`Could not generate 400 questions for Grade ${grade} ${outcome.code}`);
    return questions.map((probe, probeIndex) => {
      const id = probeIndex < anchors.length
        ? `ON-G${grade}-math-${outcome.code}-${index}${probeIndex ? `-${probeIndex}` : ""}`
        : `ON-G${grade}-math-${outcome.code}-${index}-g-${probeIndex - anchors.length + 1}`;
      return {
        ...probe,
        id,
        familyId: probe.familyId || `${id}-family`,
        expectationIds: [...outcome.expectationIds],
        difficulty: probe.weight,
        difficultySource: probe.difficultySource || "editorial",
        sourceKind: probe.sourceKind || "curated",
        grade: Number(grade),
        subject: "math",
        outcomeId: outcome.code,
        outcomeTitle: outcome.title
      };
    });
  }

  function generatedStudyProbe(grade, subject, outcome, anchor, variantIndex, anchorIndex) {
    const names = ["Ari", "Bea", "Chen", "Devi", "Eli", "Fatima", "Gus", "Hana", "Inez", "Joon", "Kai", "Lina", "Milo", "Nia", "Omar", "Priya"];
    const name = names[variantIndex % names.length];
    const correct = anchor.choices[anchor.answer];
    const wrong = anchor.choices.filter(choice => choice !== correct);
    const subjectLabel = subject === "social" && Number(grade) >= 7 ? "History & Geography" : SUBJECTS[subject].short;
    const label = `${subjectLabel} G${grade} review`;
    const forms = [
      { prompt: () => `${label}: ${anchor.prompt}` },
      { studyOnly: true, prompt: () => `${label}: ${anchor.prompt} Clue: ${anchor.explanation}` },
      { studyOnly: true, prompt: () => `${label}: Use the clue, then answer: ${anchor.prompt} ${anchor.explanation}` },
      { wrongIndex: 0, prompt: () => `${label}: ${name} picked “${wrong[0]}”. Check that choice, then answer: ${anchor.prompt}` },
      { wrongIndex: 1, prompt: () => `${label}: ${name} picked “${wrong[1]}”. Check that choice, then answer: ${anchor.prompt}` },
      { wrongIndex: 2, prompt: () => `${label}: ${name} picked “${wrong[2]}”. Check that choice, then answer: ${anchor.prompt}` },
      { wrongIndex: 0, prompt: () => `${label}: “${wrong[0]}” was suggested. Check the evidence, then answer: ${anchor.prompt}` },
      { wrongIndex: 1, prompt: () => `${label}: “${wrong[1]}” was suggested. Check the evidence, then answer: ${anchor.prompt}` },
      { wrongIndex: 2, prompt: () => `${label}: “${wrong[2]}” was suggested. Check the evidence, then answer: ${anchor.prompt}` },
      { studyOnly: true, prompt: () => `${label}: Study the fact, then answer: ${anchor.prompt} ${anchor.explanation}` },
      { prompt: () => `${label}: Which choice earns the point? ${anchor.prompt}` },
      { prompt: () => `${label}: ${name} needs help with this question: ${anchor.prompt}` },
      { studyOnly: true, prompt: () => `${label}: ${anchor.prompt} Helpful fact: ${anchor.explanation}` },
      { wrongIndex: 0, prompt: () => `${label}: ${name}'s answer was “${wrong[0]}”. Check the work, then answer: ${anchor.prompt}` },
      { prompt: () => `${label}: One more look — ${anchor.prompt}` },
      { prompt: () => `${label}: Before class, answer carefully: ${anchor.prompt}` }
    ];
    const formIndex = variantIndex % forms.length;
    const form = forms[formIndex];
    const misconceptionFamily = Number.isInteger(form.wrongIndex)
      ? `${anchor.familyId}-misconception-${form.wrongIndex + 1}`
      : anchor.familyId;
    let prompt = form.prompt();
    const wordLimits = { 1: 34, 2: 40, 3: 44, 4: 50, 5: 54, 6: 58, 7: 62, 8: 66 };
    if (prompt.length > 220 || prompt.split(/\s+/).length > wordLimits[grade]) {
      const shortLabels = ["Quick check", "Review question", "Think it through", "Choose carefully", "Try this", "Try again", "Answer time", "Practice question", "Find the fit", "Study check", "Earn the point", "Your turn", "Choose one", "Review time", "Challenge", "Final review"];
      prompt = `${subjectLabel} G${grade} ${shortLabels[variantIndex % shortLabels.length]}: ${anchor.prompt}`;
    }
    return q(prompt, [...anchor.choices], anchor.answer, anchor.explanation, {
      weight: form.studyOnly ? 1 : Number.isInteger(form.wrongIndex) ? Math.min(4, anchorIndex + 2) : Math.min(4, anchorIndex + 1),
      context: form.studyOnly ? "study-scaffold" : "practice-variation",
      assessmentEligible: !form.studyOnly,
      familyId: misconceptionFamily,
      cognitiveDemand: form.studyOnly ? "remember" : Number.isInteger(form.wrongIndex) ? "evaluate" : "understand",
      supportLevel: form.studyOnly ? "guided" : Number.isInteger(form.wrongIndex) ? "prompted" : "none",
      difficultySource: "anchor-derived",
      sourceKind: "practice-variation",
      misconceptionCodes: Number.isInteger(form.wrongIndex) ? [`${outcome.code.toLowerCase()}-distractor-${form.wrongIndex + 1}`] : []
    });
  }

  function nonMathQuestions(grade, subject, outcome, index, anchors, target) {
    const preparedAnchors = anchors.map((anchor, anchorIndex) => ({
      ...anchor,
      familyId: `MQ-ON-G${grade}-${subject.toUpperCase()}-${outcome.code}-anchor-${anchorIndex + 1}`,
      weight: Math.min(4, anchorIndex + 1),
      context: "knowledge-check",
      assessmentEligible: true,
      cognitiveDemand: anchor.cognitiveDemand || "understand",
      supportLevel: "none",
      difficultySource: "editorial",
      sourceKind: "curated"
    }));
    const probes = [...preparedAnchors];
    const prompts = new Set(probes.map(probe => probe.prompt));
    for (let seed = 0; probes.length < target && seed < 1_000; seed += 1) {
      const anchorIndex = seed % preparedAnchors.length;
      const anchor = preparedAnchors[anchorIndex];
      const variant = generatedStudyProbe(grade, subject, outcome, anchor, Math.floor(seed / preparedAnchors.length), anchorIndex);
      if (!prompts.has(variant.prompt)) {
        prompts.add(variant.prompt);
        probes.push(variant);
      }
    }
    if (probes.length !== target) throw new Error(`Could not generate ${target} questions for Grade ${grade} ${subject} ${outcome.code}`);
    return probes.map((probe, probeIndex) => ({
      ...probe,
      id: probeIndex < anchors.length
        ? `ON-G${grade}-${subject}-${outcome.code}-${index}${probeIndex ? `-${probeIndex}` : ""}`
        : `ON-G${grade}-${subject}-${outcome.code}-${index}-v-${probeIndex - anchors.length + 1}`,
      expectationIds: [...outcome.expectationIds],
      difficulty: probe.weight,
      grade: Number(grade),
      subject,
      outcomeId: outcome.code,
      outcomeTitle: outcome.title
    }));
  }

  function allQuestions(grade) {
    const safeGrade = CURRICULUM[grade] ? Number(grade) : 1;
    if (QUESTION_CACHE.has(safeGrade)) return QUESTION_CACHE.get(safeGrade);
    const gradeData = CURRICULUM[safeGrade];
    const questions = Object.entries(gradeData).flatMap(([subject, outcomes]) =>
      outcomes.flatMap((outcome, index) => {
        const anchors = [outcome.probe, ...(EXTRA_PROBES[safeGrade]?.[subject]?.[outcome.code] || [])];
        if (subject === "math") return mathQuestions(safeGrade, outcome, index, anchors);
        return nonMathQuestions(safeGrade, subject, outcome, index, anchors, index < 2 ? 67 : 66);
      })
    );
    const balanced = questions.map((question, index) => {
      const targetAnswer = index % question.choices.length;
      const offset = (question.answer - targetAnswer + question.choices.length) % question.choices.length;
      return {
        ...question,
        choices: question.choices.map((_, choiceIndex) => question.choices[(choiceIndex + offset) % question.choices.length]),
        answer: targetAnswer
      };
    });
    QUESTION_CACHE.set(safeGrade, balanced);
    return balanced;
  }

  function subjectMeta(subject, grade) {
    const meta = SUBJECTS[subject];
    if (subject === "social" && Number(grade) >= 7) {
      return { ...meta, name: "History & Geography", short: "History & Geography" };
    }
    return meta;
  }

  window.MapleQuestData = {
    subjects: SUBJECTS,
    curriculum: CURRICULUM,
    allQuestions,
    subjectMeta,
    contentVersion: CONTENT_VERSION,
    jurisdiction: {
      code: "ON",
      name: "Ontario",
      frameworkNote: "Representative outcomes are mapped to current Ontario Grade 1–8 curriculum documents."
    }
  };
}());
