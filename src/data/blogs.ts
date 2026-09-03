export interface Blog {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  recipeCategory: string;
  date: string;
  readTime: string;
  image: string;
  heroImage: string;
  /** Optional pre-designed banner (title already baked in) shown clean at the top, no overlay. */
  bannerImage?: string;
  excerpt: string;
  content: BlogSection[];
  nutrition?: NutritionRow[];
  quickFacts?: QuickFact[];
  sidebarImage?: { src: string; alt: string; caption: string };
}

export interface QuickFact {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface BlogSection {
  type: "intro" | "heading" | "paragraph" | "bullets" | "numbered" | "image" | "variation";
  heading?: string;
  text?: string;
  items?: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
}

export interface NutritionRow {
  nutrient: string;
  amount: string;
}

export const blogs: Blog[] = [
  {
    slug: "high-protein-smoothie-breakfast",
    title: "High Protein Smoothie for Breakfast",
    subtitle: "The Ultimate Guide",
    category: "High Protein",
    recipeCategory: "american",
    date: "August 27, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=1600&auto=format&fit=crop",
    excerpt: "Fuel your mornings with this delicious high protein smoothie. Packed with 28g of protein, it's quick, healthy, and perfect for weight loss or muscle gain.",
    quickFacts: [
      { label: "Prep Time", value: "5 minutes" },
      { label: "Servings", value: "1–2" },
      { label: "Difficulty", value: "Easy" },
      { label: "Protein", value: "~28g", highlight: true },
      { label: "Calories", value: "~380 kcal" },
    ],
    sidebarImage: {
      src: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=600&auto=format&fit=crop",
      alt: "High protein smoothie topped with berries",
      caption: "Top with fresh berries, granola, or coconut flakes for extra texture.",
    },
    nutrition: [
      { nutrient: "Calories", amount: "~380 kcal" },
      { nutrient: "Protein", amount: "~28g" },
      { nutrient: "Carbohydrates", amount: "~42g" },
      { nutrient: "Fat", amount: "~10g" },
      { nutrient: "Fiber", amount: "~6g" },
      { nutrient: "Sugar", amount: "~18g (mostly natural)" },
      { nutrient: "Calcium", amount: "~35% DV" },
      { nutrient: "Iron", amount: "~15% DV" },
    ],
    content: [
      {
        type: "intro",
        text: "Let's be honest — mornings are hectic. Between hitting snooze, getting the kids ready, and trying to make it to work on time, breakfast often gets skipped or swapped for a sad granola bar eaten in the car. But here's the thing: starting your day with a high protein smoothie can completely change how you feel, perform, and even how you eat for the rest of the day. This isn't your average fruit-and-ice blend — it's a filling, nutrient-dense, creamy breakfast that takes about five minutes to make and delivers close to 30 grams of protein per serving.",
      },
      {
        type: "image",
        image: "https://images.unsplash.com/photo-1638176066959-e44f4f5d7a36?w=900&auto=format&fit=crop",
        imageAlt: "High protein breakfast smoothie in a glass with berries",
        imageCaption: "Creamy, thick, and packed with 28g of protein — this smoothie will keep you full until lunch.",
      },
      {
        type: "heading",
        heading: "Why You'll Love This Recipe",
        items: [
          "Takes only 5 minutes from fridge to glass — no cooking, no mess.",
          "Genuinely filling. The combination of protein, healthy fats, and fiber keeps hunger away for hours.",
          "Flexible. Swap ingredients based on what you have on hand or your dietary needs.",
          "Tastes amazing — creamy, slightly sweet, and satisfying. It doesn't taste \"healthy.\"",
          "Works for multiple goals: weight loss, muscle gain, meal prep, or just starting your day right.",
          "No fancy equipment required. A standard blender is all you need.",
        ],
      },
      {
        type: "heading",
        heading: "Health Benefits of a High Protein Breakfast Smoothie",
        items: [
          "Keeps you fuller, longer: Protein takes longer to digest than carbs, so you won't be hunting for snacks by 10 AM.",
          "Supports muscle growth and recovery: Your muscles need protein to repair and grow after activity.",
          "Stabilizes blood sugar: Pairing protein with fiber slows glucose absorption, preventing energy crashes.",
          "Boosts metabolism: Your body burns more calories digesting protein — the thermic effect of food.",
          "Supports weight management: High-protein breakfasts reduce overall calorie intake throughout the day.",
          "Nutrient-rich: Greek yogurt, chia seeds, and spinach pack in calcium, omega-3s, iron, potassium, and antioxidants.",
        ],
      },
      {
        type: "image",
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=900&auto=format&fit=crop",
        imageAlt: "Fresh ingredients including Greek yogurt, berries, banana and chia seeds",
        imageCaption: "Simple, wholesome ingredients — most of which you likely already have at home.",
      },
      {
        type: "heading",
        heading: "Ingredients",
        text: "Makes 1 large serving or 2 smaller servings",
        items: [
          "1 cup plain Greek yogurt (full fat or 2% recommended)",
          "1 medium banana, frozen (adds creaminess and natural sweetness)",
          "1/2 cup unsweetened almond milk (or milk of choice)",
          "1 scoop vanilla whey protein powder (25g protein)",
          "1 tablespoon peanut butter (natural, no added sugar)",
          "1 tablespoon chia seeds",
          "1/4 cup rolled oats (old fashioned, not instant)",
          "1/2 cup frozen mixed berries",
          "1 teaspoon honey (optional, for extra sweetness)",
          "1/2 cup fresh baby spinach (optional but highly recommended)",
          "4–5 ice cubes (skip if banana is frozen)",
        ],
      },
      {
        type: "heading",
        heading: "Optional Ingredient Substitutions",
        items: [
          "Banana: Use 1/2 avocado for a lower sugar option, or 1/4 cup mango for a tropical twist.",
          "Almond milk: Any milk works — oat milk, coconut milk, soy milk, or regular dairy milk.",
          "Whey protein powder: Try plant-based protein powder, collagen peptides, or skip it and add an extra 1/2 cup of Greek yogurt.",
          "Peanut butter: Almond butter, sunflower seed butter, or cashew butter all work wonderfully.",
          "Chia seeds: Ground flaxseeds work as a 1:1 swap with similar omega-3 benefits.",
          "Rolled oats: Use certified gluten-free oats for sensitivity, or skip and add more chia seeds.",
          "Mixed berries: Fresh or frozen strawberries, blueberries, raspberries, or blackberries all work great.",
          "Honey: Swap with maple syrup, dates, or leave it out if the banana is ripe enough.",
        ],
      },
      {
        type: "heading",
        heading: "Kitchen Equipment Needed",
        items: [
          "A blender (high-speed blenders give a creamier result, but a standard one works fine)",
          "Measuring cups and spoons",
          "A tall glass or travel cup",
          "A straw (optional, but makes it more enjoyable)",
        ],
      },
      {
        type: "image",
        image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=900&auto=format&fit=crop",
        imageAlt: "Blender with smoothie ingredients being prepared",
        imageCaption: "A standard blender works great — no need for expensive equipment.",
      },
      {
        type: "numbered",
        heading: "Step-by-Step Instructions",
        items: [
          "Add the liquid first: Pour the almond milk into the blender. This protects the blades and creates a smooth blend.",
          "Add the Greek yogurt: Scoop it in right after the liquid.",
          "Add the oats and chia seeds: Let them sit for 1–2 minutes in the liquid if you want an extra-smooth texture — totally optional.",
          "Add the frozen banana and berries: These make the smoothie thick and cold without needing much ice.",
          "Add the protein powder and peanut butter: Scoop in your protein powder and add the tablespoon of peanut butter.",
          "Toss in the spinach: If using spinach, add it now. It blends in completely — you won't taste it.",
          "Add honey and ice: Drizzle in honey if using and add ice cubes if your fruit wasn't frozen.",
          "Blend: Start on low for 10 seconds, then blast on high for 30–45 seconds until completely smooth and creamy.",
          "Check consistency: If it's too thick, add a splash of almond milk. If it's too thin, toss in more frozen fruit or ice.",
          "Pour and enjoy: Drink it right away for the best texture, or refrigerate and shake before drinking if taking it on the go.",
        ],
      },
      {
        type: "image",
        image: "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?w=900&auto=format&fit=crop",
        imageAlt: "Freshly blended smoothie being poured into a glass",
        imageCaption: "Blend until silky smooth — about 40 seconds on high is all it takes.",
      },
      {
        type: "heading",
        heading: "Expert Tips for Best Results",
        items: [
          "Freeze your banana in advance: Peel ripe bananas, slice them, and freeze in a zip bag. They keep for 2–3 months and make your smoothie thick and naturally sweet.",
          "Layer your blender correctly: Always add liquids first, then soft ingredients, then frozen items on top. This protects the motor and ensures even blending.",
          "Let the oats soak: Adding rolled oats and letting them soak in the milk for a minute or two before blending gives a much smoother, creamier result.",
          "Use full fat or 2% Greek yogurt: It blends into a richer, creamier texture than fat-free, and the fat helps with satiety.",
          "Don't over-blend: 40–60 seconds on high is usually plenty. Over-blending can warm the smoothie and break down its texture.",
          "Taste before serving: Give it a quick taste after blending. Adjust sweetness with honey or banana, or thin it out with more milk.",
        ],
      },
      {
        type: "heading",
        heading: "Common Mistakes to Avoid",
        items: [
          "Using warm or room-temperature ingredients: Warm smoothies are unpleasant. Use frozen fruit and cold liquids every time.",
          "Skipping the liquid: Blending without enough liquid strains the blender and results in a lumpy smoothie. Always start with at least 1/2 cup of liquid.",
          "Overloading sweeteners: The banana and berries add natural sweetness. Taste before adding honey or any extra sugar.",
          "Adding protein powder dry on top of frozen fruit: It doesn't blend evenly. Layer it after the liquid and yogurt.",
          "Making it too far in advance: Smoothies are best fresh. If it separates after sitting, give it a shake, but the texture is never quite the same after a few hours.",
        ],
      },
      {
        type: "heading",
        heading: "Storage Instructions",
        items: [
          "Refrigerator: Pour leftovers into a mason jar, seal tightly, and refrigerate for up to 24 hours. Shake or stir well before drinking.",
          "Freezer: Pour into a freezer-safe container and freeze for up to 1 month, then blend again briefly before serving.",
          "Avoid: Leaving the smoothie at room temperature for more than 2 hours, especially in warm weather.",
        ],
      },
      {
        type: "heading",
        heading: "Meal Prep Tips",
        items: [
          "Pre-portion your dry ingredients (oats, chia seeds, protein powder) into small zip bags or containers — one per day.",
          "Keep frozen bananas and berries stocked in your freezer at all times so you're never without them.",
          "Pre-measure and freeze smoothie packs: combine all fruit, oats, seeds, and spinach in a zip bag and freeze flat. In the morning, dump the bag into the blender, add your yogurt and milk, and blend.",
          "Smoothie packs last up to 3 months in the freezer.",
        ],
      },
      {
        type: "image",
        image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=900&auto=format&fit=crop",
        imageAlt: "Smoothie prep packs with frozen berries and banana",
        imageCaption: "Prep your smoothie packs in advance — freeze them flat and blend in under a minute each morning.",
      },
      {
        type: "heading",
        heading: "Variations",
        items: [
          "Weight-Loss Version: Reduce the banana to 1/2, skip the honey, and use fat-free Greek yogurt. Add extra spinach or kale and increase chia seeds to 2 tablespoons. Approximately 280–300 kcal.",
          "High-Calorie Muscle-Gain Version: Add 2 tablespoons of peanut butter, use 1.5 scoops of protein powder, swap almond milk for whole dairy milk, and throw in 2 tablespoons of rolled oats. Approximately 550–600 kcal and 40+ grams of protein.",
          "Dairy-Free Version: Swap Greek yogurt for a coconut-based or almond-based dairy-free yogurt. Use oat milk or coconut milk. Choose a plant-based protein powder.",
          "Vegan Version: Use plant-based yogurt, plant-based protein powder (pea or hemp), and maple syrup instead of honey. Use oat milk for a creamier base.",
        ],
      },
      {
        type: "image",
        image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=900&auto=format&fit=crop",
        imageAlt: "Three different smoothie variations in glasses",
        imageCaption: "From weight-loss to muscle-gain — customize this smoothie to match your exact goals.",
      },
      {
        type: "heading",
        heading: "Best Foods to Serve With This Smoothie",
        items: [
          "A slice of whole-grain toast with avocado or almond butter",
          "A handful of mixed nuts for extra healthy fats",
          "A hard-boiled egg for additional protein",
          "A small bowl of fresh fruit on the side",
          "A cup of black coffee or green tea for a caffeine boost",
        ],
      },
      {
        type: "image",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&auto=format&fit=crop",
        imageAlt: "Healthy breakfast spread with smoothie, toast and fruit",
        imageCaption: "Pair with whole-grain toast and fresh fruit for a complete, balanced breakfast.",
      },
      {
        type: "heading",
        heading: "Frequently Asked Questions",
      },
      {
        type: "paragraph",
        heading: "Can I make this without protein powder?",
        text: "Absolutely! If you prefer a high-protein smoothie without protein powder, simply double the Greek yogurt (use 1.5–2 cups total) and add 2 tablespoons of peanut butter. You'll still get 20–22 grams of protein from whole food sources. You can also add hemp seeds, which are one of the most protein-dense seeds available.",
      },
      {
        type: "paragraph",
        heading: "Is this smoothie good for weight loss?",
        text: "Yes, especially when made with the weight-loss variation above. The high protein content suppresses appetite and keeps you full, reducing the likelihood of snacking between meals.",
      },
      {
        type: "paragraph",
        heading: "Can I use fresh banana instead of frozen?",
        text: "Yes, but the smoothie will be thinner and less cold. To compensate, add 4–5 ice cubes. The frozen banana is what gives this smoothie its thick, milkshake-like consistency, so we strongly recommend freezing your bananas when they're ripe.",
      },
      {
        type: "paragraph",
        heading: "How much protein is actually in this smoothie?",
        text: "With Greek yogurt (~17g), whey protein powder (~25g), and peanut butter (~4g), you're looking at around 28g of protein per serving before accounting for smaller contributions from oats and chia seeds. If you skip the protein powder, you'll get roughly 20–22g from food sources alone.",
      },
      {
        type: "paragraph",
        heading: "Can kids drink this?",
        text: "Yes! For kids, skip the protein powder and reduce or eliminate the chia seeds (or blend them thoroughly). The rest of the recipe is perfectly kid-friendly and a great way to sneak in nutrients like spinach, which blends in completely invisibly.",
      },
    ],
  },
  {
    slug: "healthy-butter-chicken",
    title: "Healthy Butter Chicken (High-Protein, No Heavy Cream)",
    subtitle: "All the flavor, none of the guilt",
    category: "South Asian",
    recipeCategory: "south-asian",
    date: "August 28, 2026",
    readTime: "9 min read",
    image: "/blog/butter-chicken.jpg",
    heroImage: "/blog/butter-chicken.jpg",
    bannerImage: "/blog/butter-chicken.jpg",
    excerpt: "A healthy butter chicken recipe made high-protein and low-calorie — no heavy cream needed. Creamy, restaurant-style flavor you can actually fit into your week.",
    quickFacts: [
      { label: "Prep Time", value: "15 minutes" },
      { label: "Cook Time", value: "25 minutes" },
      { label: "Servings", value: "4" },
      { label: "Protein", value: "~42g", highlight: true },
      { label: "Calories", value: "~360 kcal" },
    ],
    nutrition: [
      { nutrient: "Calories", amount: "~360 kcal" },
      { nutrient: "Protein", amount: "~42g" },
      { nutrient: "Carbohydrates", amount: "~14g" },
      { nutrient: "Fat", amount: "~15g" },
      { nutrient: "Fiber", amount: "~3g" },
      { nutrient: "Sugar", amount: "~7g" },
      { nutrient: "Sodium", amount: "~520mg" },
    ],
    content: [
      {
        type: "intro",
        text: "The first time I ordered butter chicken at a little Indian spot in the States, I was hooked before I finished the first bite. That warm, tomatoey, buttery sauce — it tasted like a hug. Then I looked up the numbers. A single takeout serving can run well over 700 calories, most of it from heavy cream and a shocking amount of butter. As someone who grew up eating this food and did not want to give it up, I set out to fix that. After a lot of test batches in my own kitchen, this is the healthy butter chicken I make on repeat: high in protein, no heavy cream, and honestly close enough to the restaurant version that my family cannot tell the difference.",
      },
      {
        type: "image",
        image: "/blog/butter-chicken-1.jpg",
        imageAlt: "Creamy healthy butter chicken garnished with cilantro in a dark bowl with naan",
        imageCaption: "Rich, creamy, and deeply spiced — but built on Greek yogurt instead of a cup of cream.",
      },
      {
        type: "heading",
        heading: "Why You'll Make This on Repeat",
        items: [
          "It is genuinely high-protein — around 42g per serving — so it keeps you full for hours.",
          "No heavy cream. The creaminess comes from Greek yogurt and blended cashews, not a carton of cream.",
          "Weeknight-friendly. From fridge to table in about 40 minutes, most of it hands-off.",
          "That deep, restaurant-style flavor most healthy versions miss — because we do not skip the spices or the char.",
          "Naturally gluten-free, and easy to make dairy-light if you need to.",
          "Great for meal prep — it actually tastes better the next day.",
        ],
      },
      {
        type: "heading",
        heading: "The Swaps That Cut the Calories (Not the Flavor)",
        text: "This is where most healthy butter chicken recipes go wrong. They strip out the fat and end up with a sad, watery curry. Here is how we keep it rich instead:",
        items: [
          "Greek yogurt instead of heavy cream: full-fat plain Greek yogurt gives you that tang and body for a fraction of the calories — plus a protein boost. Stir it in off the heat so it does not split.",
          "A spoon of cashew butter (or a handful of soaked cashews, blended): this is my secret for real creaminess without cream.",
          "Just one tablespoon of butter: you still get the buttery aroma the dish is named for, without swimming in it.",
          "Chicken breast or trimmed thighs: breast keeps it leaner and higher in protein; thighs stay juicier. Your call.",
          "A proper spice base: garam masala, cumin, coriander, turmeric, paprika, and a little kasuri methi (dried fenugreek) do the heavy lifting so you never miss the fat.",
        ],
      },
      {
        type: "heading",
        heading: "Ingredients You'll Need",
        text: "Makes 4 servings.",
        items: [
          "1.5 lbs boneless chicken breast or thigh, cut into bite-size pieces",
          "1/2 cup full-fat plain Greek yogurt (for the marinade) + 1/3 cup more (for the sauce)",
          "1 tablespoon lemon juice",
          "1 tablespoon ginger-garlic paste",
          "2 teaspoons garam masala, divided",
          "1 teaspoon ground cumin",
          "1 teaspoon ground coriander",
          "1 teaspoon turmeric",
          "1 teaspoon paprika (or Kashmiri chili for color)",
          "1 can (14 oz) crushed tomatoes, or 4 ripe tomatoes blended",
          "1 tablespoon cashew butter (or 12 cashews soaked and blended)",
          "1 tablespoon butter",
          "1 small onion, finely chopped",
          "1 teaspoon kasuri methi (dried fenugreek leaves), optional but worth it",
          "Salt to taste, and fresh cilantro to finish",
        ],
      },
      {
        type: "numbered",
        heading: "How to Make It, Step by Step",
        items: [
          "Marinate: Toss the chicken with 1/2 cup Greek yogurt, lemon juice, ginger-garlic paste, 1 teaspoon garam masala, and a pinch of salt. Let it sit at least 30 minutes (overnight is even better).",
          "Get a char: Sear the marinated chicken in a hot pan for 3–4 minutes until the edges brown. You are not cooking it through yet — you want color and smoky flavor. Set it aside.",
          "Build the base: In the same pan, melt the butter, add the onion, and cook until soft and golden. Add the cumin, coriander, turmeric, paprika, and remaining garam masala; stir for 30 seconds until fragrant.",
          "Simmer the sauce: Pour in the tomatoes and cashew butter. Simmer 10 minutes until it thickens and deepens in color. For a truly smooth restaurant texture, blend it here, then return it to the pan.",
          "Finish the chicken: Add the seared chicken back in and simmer 8–10 minutes until cooked through and coated.",
          "The creamy finish: Turn off the heat. Stir in the remaining Greek yogurt and crushed kasuri methi. Adding the yogurt off the heat is the trick that stops it from curdling.",
          "Serve: Taste for salt, top with cilantro, and dig in.",
        ],
      },
      {
        type: "image",
        image: "/blog/butter-chicken-2.jpg",
        imageAlt: "A bright bowl of healthy butter chicken served with naan on a wooden board",
        imageCaption: "Spoon it over basmati rice or scoop it up with warm naan — either way, it delivers.",
      },
      {
        type: "heading",
        heading: "My Best Tips for Restaurant-Style Flavor",
        items: [
          "Do not rush the marinade. Even 30 minutes changes everything, and the yogurt tenderizes the chicken beautifully.",
          "Bloom your spices in the butter for half a minute before the tomatoes go in — this wakes them up and is the difference between flat and fragrant.",
          "Blend the sauce for that silky, spoon-coating texture you get at your favorite spot.",
          "Crush the kasuri methi between your palms before adding it. That single ingredient is what makes people say your butter chicken tastes authentic.",
          "Always add Greek yogurt off the heat and stir gently to keep it smooth.",
        ],
      },
      {
        type: "heading",
        heading: "Common Mistakes to Avoid",
        items: [
          "Boiling the yogurt: high heat makes it split and turn grainy. Heat off, stir in, done.",
          "Skipping the sear: raw chicken dropped straight into sauce misses all that browned, smoky depth.",
          "Under-salting: this dish needs enough salt to carry the spices — taste and adjust at the end.",
          "Too much water: if it looks thin, let it simmer uncovered a few more minutes instead of leaving it watery.",
          "Cheap curry powder as a shortcut: individual spices really do taste better here.",
        ],
      },
      {
        type: "heading",
        heading: "What to Serve With Butter Chicken",
        text: "Round it out with something to soak up that sauce and a lighter side:",
        items: [
          "Basmati rice or a warm whole-wheat naan for the full experience.",
          "A comforting bowl of [Dal Tadka](/recipes/r4) if you want to make it a proper feast.",
          "For something lighter and lower-carb, our [Quinoa Khichdi](/recipes/r14) is a great swap.",
          "A crisp cucumber-tomato salad or a spoon of raita to cool things down.",
          "Craving more paneer on the side? These [Paneer Tikka Skewers](/recipes/r12) are a crowd favorite.",
        ],
      },
      {
        type: "heading",
        heading: "Make It a Meal-Prep Win",
        items: [
          "Refrigerator: store in an airtight container for up to 4 days. The flavor deepens overnight.",
          "Freezer: freeze the sauce and chicken (before adding the final yogurt) for up to 2 months.",
          "Reheat gently on the stove over low heat, adding a splash of water, then stir in a little fresh yogurt to bring back the creaminess.",
          "Portion it over rice into containers with a side of veggies for grab-and-go lunches all week.",
        ],
      },
      {
        type: "heading",
        heading: "Frequently Asked Questions",
      },
      {
        type: "paragraph",
        heading: "Is butter chicken actually healthy?",
        text: "Classic restaurant butter chicken usually is not — it leans on heavy cream, lots of butter, and sometimes sugar. This lightened version keeps the flavor but swaps in Greek yogurt and cashews, so you get a high-protein, lower-calorie meal. If you want the exact measured recipe, we have it on our [Lightened Up Butter Chicken](/recipes/r1) page.",
      },
      {
        type: "paragraph",
        heading: "Can I make it dairy-free?",
        text: "Yes. Use a thick unsweetened coconut yogurt in place of the Greek yogurt and a plant-based butter. You will lose a little protein but keep the creaminess. The cashews already do a lot of the heavy lifting.",
      },
      {
        type: "paragraph",
        heading: "Breast or thigh — which is better?",
        text: "Chicken breast is leaner and pushes the protein higher, which is great if weight loss or muscle gain is your goal. Thighs are more forgiving and stay juicy. Both work; I often do half and half.",
      },
      {
        type: "paragraph",
        heading: "How do I make it spicier or milder?",
        text: "For more heat, add a chopped green chili with the onion or a pinch of cayenne. For a kid-friendly, mild version, drop the chili and lean on paprika for color without the burn.",
      },
      {
        type: "heading",
        heading: "More Healthy Recipes to Try",
        text: "If you loved this, here is where to go next:",
        items: [
          "[Chicken Tikka Salad](/recipes/r18) — a fresh, high-protein way to use up leftovers.",
          "Browse all our [high-protein recipes](/category/high-protein) for more meals that keep you full.",
          "Explore the full collection of [South Asian recipes](/category/south-asian), lightened up for everyday eating.",
          "Planning your week? Check out our [meal plans](/meal-plans) to put it all together.",
        ],
      },
    ],
  },
  {
    slug: "air-fryer-tandoori-chicken",
    title: "Air Fryer Tandoori Chicken (Easy, High-Protein, No Tandoor Needed)",
    subtitle: "Smoky, charred, restaurant-style — in about 15 minutes",
    category: "High Protein",
    recipeCategory: "high-protein",
    date: "August 29, 2026",
    readTime: "8 min read",
    image: "/blog/air-fryer-tandoori-chicken.jpg",
    heroImage: "/blog/air-fryer-tandoori-chicken.jpg",
    bannerImage: "/blog/air-fryer-tandoori-chicken.jpg",
    excerpt: "Easy air fryer tandoori chicken that is high-protein, low-calorie, and ready in about 15 minutes — smoky, charred, restaurant flavor with no tandoor and barely any oil.",
    quickFacts: [
      { label: "Prep Time", value: "10 minutes" },
      { label: "Cook Time", value: "15 minutes" },
      { label: "Servings", value: "4" },
      { label: "Protein", value: "~35g", highlight: true },
      { label: "Calories", value: "~250 kcal" },
    ],
    nutrition: [
      { nutrient: "Calories", amount: "~250 kcal" },
      { nutrient: "Protein", amount: "~35g" },
      { nutrient: "Carbohydrates", amount: "~5g" },
      { nutrient: "Fat", amount: "~10g" },
      { nutrient: "Fiber", amount: "~1g" },
      { nutrient: "Sugar", amount: "~3g" },
      { nutrient: "Sodium", amount: "~480mg" },
    ],
    content: [
      {
        type: "intro",
        text: "For years I thought real tandoori chicken was off-limits at home. You need a clay tandoor, right? That roaring 900-degree oven that gives the chicken its signature char and smoke. Then I got an air fryer, mostly for reheating fries, and one lazy Sunday I threw a batch of marinated chicken in it just to see what would happen. Fifteen minutes later I pulled out the juiciest, most charred, deeply spiced tandoori chicken I had ever made — and it beat most restaurant versions I had paid good money for. No oven heating up my apartment, barely any oil, and almost no cleanup. This is the recipe I have made dozens of times since, and it is about as close to effortless as high-protein comfort food gets.",
      },
      {
        type: "image",
        image: "/blog/air-fryer-tandoori-1.jpg",
        imageAlt: "Charred air fryer tandoori chicken pieces garnished with cilantro and lemon",
        imageCaption: "That deep red color and charred edges — straight from the air fryer, no tandoor required.",
      },
      {
        type: "heading",
        heading: "Why You'll Love This Recipe",
        items: [
          "High-protein and lean — around 35g of protein per serving for only about 250 calories.",
          "Ready fast. Ten minutes of prep, fifteen in the air fryer, and dinner is done.",
          "That real charred, smoky flavor — the air fryer's high heat mimics a tandoor surprisingly well.",
          "Barely any oil. The Greek-yogurt marinade does the work, so you are not deep-frying anything.",
          "Naturally gluten-free and low-carb, and it fits almost any healthy eating goal.",
          "Minimal cleanup — no splattered stovetop, no heating the whole oven.",
        ],
      },
      {
        type: "heading",
        heading: "Why the Air Fryer Just Works Here",
        text: "A traditional tandoor cooks with intense, dry, direct heat. An air fryer does something similar on a small scale:",
        items: [
          "It blasts hot air around the chicken, so the outside chars and crisps while the inside stays juicy.",
          "The high, dry heat sets the yogurt marinade into that signature crust — the same effect you get on a tandoor wall.",
          "There is no pool of oil, so the flavor stays clean and the calories stay low.",
          "It preheats in minutes and cooks in a fraction of the time an oven would take.",
        ],
      },
      {
        type: "heading",
        heading: "Ingredients You'll Need",
        text: "Makes 4 servings.",
        items: [
          "1.5 lbs boneless chicken thighs or breast (thighs stay juicier), cut into large chunks or left as fillets",
          "3/4 cup full-fat plain Greek yogurt",
          "1 tablespoon ginger-garlic paste",
          "1 tablespoon lemon juice",
          "1.5 teaspoons Kashmiri chili powder or paprika (for that red color without much heat)",
          "1 teaspoon garam masala",
          "1 teaspoon ground cumin",
          "1 teaspoon ground coriander",
          "1/2 teaspoon turmeric",
          "1/2 teaspoon kasuri methi (dried fenugreek), crushed — optional but authentic",
          "1 teaspoon salt, or to taste",
          "1 teaspoon oil (just to help the char)",
          "Sliced red onion, lemon wedges, and cilantro to serve",
        ],
      },
      {
        type: "numbered",
        heading: "How to Make It, Step by Step",
        items: [
          "Make the marinade: In a bowl, whisk the Greek yogurt with ginger-garlic paste, lemon juice, Kashmiri chili, garam masala, cumin, coriander, turmeric, kasuri methi, salt, and oil.",
          "Marinate: Add the chicken and coat every piece well. Cover and refrigerate for at least 30 minutes — overnight is ideal for the deepest flavor and most tender result.",
          "Preheat: Preheat your air fryer to 400°F (200°C) for about 3 minutes.",
          "Arrange: Place the chicken in a single layer in the basket, leaving a little space between pieces so the air can circulate. Work in batches if needed — do not crowd it.",
          "Air fry: Cook at 400°F for 12–15 minutes, flipping halfway through. Larger pieces or bone-in cuts may need a few extra minutes.",
          "Check it: The chicken is done when it hits 165°F inside and the edges look charred. If you want more color, give it 1–2 extra minutes.",
          "Rest and serve: Let it rest 3–4 minutes, then finish with a squeeze of lemon, sliced onion, and fresh cilantro.",
        ],
      },
      {
        type: "image",
        image: "/blog/air-fryer-tandoori-2.jpg",
        imageAlt: "A plate of tandoori chicken with sliced onions, lemon and mint chutney",
        imageCaption: "Serve it hot with onions, lemon, and a cooling mint chutney — restaurant vibes at home.",
      },
      {
        type: "heading",
        heading: "Tips for the Best Char and Juiciest Chicken",
        items: [
          "Do not skip the long marinate. The yogurt tenderizes the meat and the acid helps the spices penetrate — overnight is genuinely worth it.",
          "Pat off excess marinade before air frying. Too much wet marinade steams instead of chars.",
          "Use Kashmiri chili for that classic red color without heavy spice — regular paprika works too.",
          "Do not overcrowd the basket. Air needs to move around each piece for even charring.",
          "Brush a tiny bit of oil or melted butter on top in the last two minutes for extra gloss and a restaurant finish.",
          "Thighs are the most forgiving cut if you tend to overcook chicken breast.",
        ],
      },
      {
        type: "heading",
        heading: "Common Mistakes to Avoid",
        items: [
          "Skipping the preheat: a cold basket means pale, unevenly cooked chicken.",
          "Crowding the basket: pieces touching each other steam instead of char.",
          "Using fat-free yogurt: it is watery and does not cling; full-fat Greek yogurt gives a thicker, better crust.",
          "Overcooking: chicken keeps cooking as it rests, so pull it right at 165°F.",
          "Not tasting the marinade: adjust salt and chili before the chicken goes in — it is your only seasoning.",
        ],
      },
      {
        type: "heading",
        heading: "What to Serve With Air Fryer Tandoori Chicken",
        text: "Turn it into a full plate:",
        items: [
          "Warm naan or basmati rice, plus a cooling mint-yogurt chutney.",
          "Simmer the leftovers into a sauce — our [Healthy Butter Chicken](/blog/healthy-butter-chicken) is the perfect next step, since charred tandoori chicken is exactly how the best butter chicken starts.",
          "A comforting bowl of [Dal Tadka](/recipes/r4) on the side makes it a feast.",
          "Going meat-free for someone at the table? Add our [Tandoori Cauliflower Steaks](/recipes/r6) — same spices, veggie-friendly.",
          "Toss the extras over greens like our [Chicken Tikka Salad](/recipes/r18) for an easy high-protein lunch.",
        ],
      },
      {
        type: "heading",
        heading: "Make It a Meal-Prep Win",
        items: [
          "Marinate a big batch and keep it in the fridge for up to 2 days before cooking.",
          "Freeze the chicken right in the marinade for up to 2 months — thaw overnight and air fry fresh.",
          "Cooked tandoori chicken keeps 3–4 days in the fridge; reheat in the air fryer for 3 minutes to bring back the crisp.",
          "Portion it with rice and veggies for grab-and-go high-protein lunches all week.",
        ],
      },
      {
        type: "heading",
        heading: "Frequently Asked Questions",
      },
      {
        type: "paragraph",
        heading: "Do I need a tandoor for tandoori chicken?",
        text: "Not at all. A tandoor gives intense dry heat and char, and a hot air fryer recreates that effect closely — which is why this version tastes so authentic without any special equipment.",
      },
      {
        type: "paragraph",
        heading: "Thighs or breast — which is better?",
        text: "Thighs stay juicier and are harder to overcook, so they are the most forgiving. Breast is leaner and pushes the protein even higher if that is your goal. Both work beautifully.",
      },
      {
        type: "paragraph",
        heading: "Why is my tandoori chicken not red?",
        text: "That signature red comes from Kashmiri chili powder (or paprika), not heat. If you want it deeper, add a little more — a natural touch of beet powder works too, but you do not need artificial color.",
      },
      {
        type: "paragraph",
        heading: "Can I make it without an air fryer?",
        text: "Yes. Bake at 450°F for about 20–25 minutes, flipping once, and finish under the broiler for 2–3 minutes to get the char. The air fryer is just faster and easier.",
      },
      {
        type: "heading",
        heading: "More Healthy Recipes to Try",
        text: "Keep the flavor going:",
        items: [
          "[Paneer Tikka Skewers](/recipes/r12) — the vegetarian cousin, and just as good in the air fryer.",
          "Browse all our [high-protein recipes](/category/high-protein) for more meals that keep you full.",
          "Explore our full collection of [South Asian recipes](/category/south-asian), lightened up for everyday eating.",
          "Planning your week? Our [meal plans](/meal-plans) put it all together.",
        ],
      },
    ],
  },
  {
    slug: "healthy-chicken-tikka-masala",
    title: "Healthy Chicken Tikka Masala (High-Protein, Restaurant Flavor)",
    subtitle: "The one everyone orders — made lighter, at home",
    category: "South Asian",
    recipeCategory: "south-asian",
    date: "August 30, 2026",
    readTime: "9 min read",
    image: "/blog/chicken-tikka-masala.jpg",
    heroImage: "/blog/chicken-tikka-masala.jpg",
    bannerImage: "/blog/chicken-tikka-masala.jpg",
    excerpt: "A healthy chicken tikka masala recipe that is high-protein and low-calorie — no heavy cream, no ghee overload. Smoky charred chicken in a rich spiced tomato sauce, ready in under an hour.",
    quickFacts: [
      { label: "Prep Time", value: "15 minutes" },
      { label: "Cook Time", value: "30 minutes" },
      { label: "Servings", value: "4" },
      { label: "Protein", value: "~40g", highlight: true },
      { label: "Calories", value: "~340 kcal" },
    ],
    nutrition: [
      { nutrient: "Calories", amount: "~340 kcal" },
      { nutrient: "Protein", amount: "~40g" },
      { nutrient: "Carbohydrates", amount: "~16g" },
      { nutrient: "Fat", amount: "~12g" },
      { nutrient: "Fiber", amount: "~4g" },
      { nutrient: "Sugar", amount: "~8g" },
      { nutrient: "Sodium", amount: "~540mg" },
    ],
    content: [
      {
        type: "intro",
        text: "Chicken tikka masala is the dish my American friends order every single time we go out for Indian food. I get it — that orange, creamy, faintly smoky sauce is genuinely addictive. But I remember the night one of them looked up the calories on her plate and put her fork down. Somewhere around 900 for a single serving, before the naan and rice. That felt wrong to me, because nothing about tikka masala actually needs to be that heavy. The flavor comes from charred chicken and toasted spices, not from a cup of cream. So I spent a few weekends stripping it back in my own kitchen, and this is what I landed on: roughly 340 calories, about 40 grams of protein, and a sauce so good my friend asked for the recipe before she finished eating.",
      },
      {
        type: "image",
        image: "/blog/chicken-tikka-masala-1.jpg",
        imageAlt: "Healthy chicken tikka masala in a bowl topped with cream swirl and cilantro",
        imageCaption: "Charred chicken in a rich, spiced tomato sauce — the creaminess comes from Greek yogurt, not heavy cream.",
      },
      {
        type: "heading",
        heading: "Wait — Is This the Same as Butter Chicken?",
        text: "This is the question I get most, and the answer is no, though they are cousins. Here is the honest difference:",
        items: [
          "Butter chicken (murgh makhani) is smoother, sweeter, and richer — a silky tomato-butter sauce, usually blended, with a gentler spice profile.",
          "Tikka masala has more texture and more bite. The sauce keeps its onions and peppers, and the spices are bolder and warmer.",
          "The chicken is the shared secret: both start with yogurt-marinated, charred chicken tikka.",
          "If you prefer the smoother, sweeter one, make our [Healthy Butter Chicken](/blog/healthy-butter-chicken) instead — same lightened-up approach, different personality.",
        ],
      },
      {
        type: "heading",
        heading: "Why You'll Love This Recipe",
        items: [
          "About 40g of protein per serving for roughly 340 calories — it genuinely fills you up.",
          "No heavy cream and no pool of ghee. Greek yogurt and a spoon of cashew butter do the work.",
          "That real restaurant flavor, because we char the chicken first instead of just simmering it.",
          "One pan for the sauce, and most of the cook time is hands-off.",
          "Naturally gluten-free, and easy to adapt for dairy-free or vegetarian eaters.",
          "Leftovers are arguably better — the spices settle overnight.",
        ],
      },
      {
        type: "heading",
        heading: "The Swaps That Cut Calories Without Killing Flavor",
        text: "Most healthy tikka masala recipes fail because they remove the fat and add nothing back. Here is how we keep it rich:",
        items: [
          "Greek yogurt instead of heavy cream — same creaminess and tang, plus extra protein. Always stir it in off the heat so it does not split.",
          "A tablespoon of cashew butter for body. This is the trick that makes a light sauce taste luxurious.",
          "Chicken breast or trimmed thighs. Breast pushes protein higher; thighs stay juicier.",
          "One tablespoon of oil or butter, not four. You still get the aroma without the calorie load.",
          "Real toasted spices — garam masala, cumin, coriander, smoked paprika, and kasuri methi — doing the heavy lifting.",
          "Extra onion and bell pepper in the sauce for fiber, texture, and natural sweetness.",
        ],
      },
      {
        type: "heading",
        heading: "Ingredients You'll Need",
        text: "Makes 4 servings.",
        items: [
          "1.5 lbs boneless chicken breast or thigh, cut into 1-inch cubes",
          "3/4 cup full-fat plain Greek yogurt (1/2 cup for the marinade, 1/4 cup for the sauce)",
          "1 tablespoon ginger-garlic paste",
          "1 tablespoon lemon juice",
          "2 teaspoons garam masala, divided",
          "1.5 teaspoons Kashmiri chili powder or smoked paprika",
          "1 teaspoon ground cumin",
          "1 teaspoon ground coriander",
          "1/2 teaspoon turmeric",
          "1 large onion, finely chopped",
          "1 red bell pepper, diced",
          "1 can (14 oz) crushed tomatoes",
          "1 tablespoon cashew butter (or 12 cashews, soaked and blended)",
          "1 tablespoon butter or oil",
          "1 teaspoon kasuri methi (dried fenugreek), crushed",
          "Salt to taste, fresh cilantro to finish",
        ],
      },
      {
        type: "numbered",
        heading: "How to Make It, Step by Step",
        items: [
          "Marinate the tikka: Toss the chicken with 1/2 cup Greek yogurt, ginger-garlic paste, lemon juice, 1 teaspoon garam masala, Kashmiri chili, and salt. Rest at least 30 minutes — overnight is better.",
          "Char the chicken: Sear it in a hot pan (or air fry at 400°F for 10 minutes) until the edges blacken slightly. This char is the whole point — do not skip it. Set aside.",
          "Start the masala: In the same pan, melt the butter and cook the onion until deeply golden, about 6–8 minutes. Patience here pays off.",
          "Add the pepper and spices: Stir in the bell pepper, then the cumin, coriander, turmeric, and remaining garam masala. Toast for 30 seconds until fragrant.",
          "Build the sauce: Add the crushed tomatoes and cashew butter. Simmer 12–15 minutes until it thickens and turns a deep brick red. Unlike butter chicken, do not blend it — the texture is the point.",
          "Bring it together: Return the charred chicken to the pan and simmer 8 minutes so it soaks up the sauce.",
          "The creamy finish: Turn off the heat. Stir in the remaining Greek yogurt and the crushed kasuri methi. Off the heat is essential so the yogurt stays smooth.",
          "Taste and serve: Adjust salt, top with cilantro, and serve hot.",
        ],
      },
      {
        type: "image",
        image: "/blog/chicken-tikka-masala-2.jpg",
        imageAlt: "Chef holding a fresh bowl of healthy chicken tikka masala",
        imageCaption: "Under an hour from start to finish — and it tastes like it came out of a restaurant kitchen.",
      },
      {
        type: "heading",
        heading: "My Best Tips for Restaurant-Style Flavor",
        items: [
          "Char, do not just cook. Whether you use a hot pan, the broiler, or an air fryer, you want visible dark edges on the chicken before it ever touches the sauce.",
          "Brown the onions properly. Six to eight minutes feels long, but pale onions make a flat, thin-tasting masala.",
          "Toast your spices in the fat for 30 seconds. This single step separates fragrant from dusty.",
          "Crush the kasuri methi between your palms before adding it. It smells like a restaurant kitchen and that is exactly the point.",
          "Add the yogurt off the heat, always, and stir gently.",
          "If the sauce tastes sharp, a small pinch of sugar or a splash more yogurt rounds out the tomato acidity.",
        ],
      },
      {
        type: "heading",
        heading: "Common Mistakes to Avoid",
        items: [
          "Blending the sauce: that turns it into butter chicken. Tikka masala should have body and texture.",
          "Boiling the yogurt: high heat makes it grainy and split. Heat off, then stir.",
          "Skipping the marinade: without it the chicken is bland and tougher, and the yogurt is what tenderizes it.",
          "Rushing the tomato simmer: an under-cooked sauce tastes raw and sour. Let it darken.",
          "Using pre-mixed curry powder: individual spices genuinely taste better here.",
        ],
      },
      {
        type: "heading",
        heading: "What to Serve With Chicken Tikka Masala",
        text: "Build the full plate:",
        items: [
          "Basmati rice or warm naan to soak up every bit of sauce.",
          "A side of [Dal Tadka](/recipes/r4) turns it into a proper spread.",
          "Want something lighter alongside? [Quinoa Khichdi](/recipes/r14) keeps it lower-carb.",
          "Cooking for vegetarians too? [Paneer Tikka Skewers](/recipes/r12) use the same marinade beautifully.",
          "A crisp cucumber-onion salad or a spoon of raita to cool the heat.",
        ],
      },
      {
        type: "heading",
        heading: "Make It a Meal-Prep Win",
        items: [
          "Refrigerator: keeps 4 days in an airtight container, and the flavor deepens overnight.",
          "Freezer: freeze the chicken and sauce (before the final yogurt) for up to 2 months.",
          "Reheat gently on low with a splash of water, then stir in a spoon of fresh yogurt to bring the creaminess back.",
          "Prep once, portion over rice with veggies, and you have high-protein lunches for the week.",
          "Short on time on a weeknight? Char the chicken in the air fryer the same way we do in our [Air Fryer Tandoori Chicken](/blog/air-fryer-tandoori-chicken) — it takes 10 minutes and the flavor is excellent.",
        ],
      },
      {
        type: "heading",
        heading: "Frequently Asked Questions",
      },
      {
        type: "paragraph",
        heading: "Is chicken tikka masala healthy?",
        text: "The restaurant version usually is not — heavy cream, generous ghee, and large portions push a single serving past 800 calories. This lightened version keeps the flavor but swaps in Greek yogurt and cashews, landing around 340 calories with about 40g of protein.",
      },
      {
        type: "paragraph",
        heading: "What is the difference between tikka masala and butter chicken?",
        text: "Butter chicken is smoother, sweeter, and blended; tikka masala is chunkier, spicier, and keeps its onions and peppers. Both start with the same charred, yogurt-marinated chicken. If you want the smoother one, try our [Healthy Butter Chicken](/blog/healthy-butter-chicken).",
      },
      {
        type: "paragraph",
        heading: "Can I make it dairy-free?",
        text: "Yes. Use a thick unsweetened coconut yogurt in place of the Greek yogurt and a plant-based butter. The cashew butter already provides most of the creaminess, so the result is still rich.",
      },
      {
        type: "paragraph",
        heading: "How do I make it milder or spicier?",
        text: "For a mild, kid-friendly version, use smoked paprika instead of chili powder and skip any fresh chili. For more heat, add a chopped green chili with the onions or a pinch of cayenne with the spices.",
      },
      {
        type: "heading",
        heading: "More Healthy Recipes to Try",
        text: "If you loved this, here is where to go next:",
        items: [
          "[Chicken Tikka Salad](/recipes/r18) — the perfect way to use up leftover charred chicken.",
          "[Lightened Up Butter Chicken](/recipes/r1) — the creamier cousin, with the full measured recipe.",
          "Browse all our [high-protein recipes](/category/high-protein) for more meals that keep you full.",
          "Explore the full collection of [South Asian recipes](/category/south-asian), lightened up for everyday eating.",
          "Planning ahead? Our [meal plans](/meal-plans) put the whole week together.",
        ],
      },
    ],
  },
  {
    slug: "chana-masala-chickpea-curry",
    title: "Chana Masala (High-Protein Indian Chickpea Curry)",
    subtitle: "One pot, pantry ingredients, 30 minutes",
    category: "High Protein",
    recipeCategory: "high-protein",
    date: "September 1, 2026",
    readTime: "8 min read",
    image: "/blog/chana-masala.jpg",
    heroImage: "/blog/chana-masala.jpg",
    bannerImage: "/blog/chana-masala.jpg",
    excerpt: "An easy chana masala recipe — the Indian chickpea curry that is naturally vegan, high in plant protein and fiber, and made in one pot from pantry staples in about 30 minutes.",
    quickFacts: [
      { label: "Prep Time", value: "10 minutes" },
      { label: "Cook Time", value: "25 minutes" },
      { label: "Servings", value: "4" },
      { label: "Protein", value: "~15g", highlight: true },
      { label: "Calories", value: "~310 kcal" },
    ],
    nutrition: [
      { nutrient: "Calories", amount: "~310 kcal" },
      { nutrient: "Protein", amount: "~15g" },
      { nutrient: "Carbohydrates", amount: "~45g" },
      { nutrient: "Fat", amount: "~8g" },
      { nutrient: "Fiber", amount: "~13g" },
      { nutrient: "Sugar", amount: "~7g" },
      { nutrient: "Sodium", amount: "~480mg" },
    ],
    content: [
      {
        type: "intro",
        text: "This is the recipe I fall back on when the fridge is basically empty and I still want to eat something that tastes like an actual meal. Two cans of chickpeas, an onion, a can of tomatoes, and a handful of spices — that is genuinely it. I learned it the way most people in South Asian homes do, by standing next to someone who never measured anything, and it took me years to work out that the magic is not in any secret ingredient. It is in how long you cook the onions and when you add the spices. Get those two things right and a can of chickpeas turns into something people ask you for the recipe for. It is also, quietly, one of the most nutritious things you can put on a plate: high in fiber, plant protein, and almost no effort.",
      },
      {
        type: "image",
        image: "/blog/chana-masala-1.jpg",
        imageAlt: "A cook finishing a pan of chana masala with fresh cilantro",
        imageCaption: "Pantry staples in, real dinner out. The fresh cilantro at the very end is not garnish — it wakes the whole pot up.",
      },
      {
        type: "heading",
        heading: "Why You'll Love This Recipe",
        items: [
          "Naturally vegan and gluten-free — no substitutions needed, this is just how the dish is made.",
          "Around 15g of plant protein and 13g of fiber per serving, which is a lot of staying power for 310 calories.",
          "Made almost entirely from pantry staples you probably already have.",
          "One pot, about 30 minutes, and most of it is hands-off simmering.",
          "Cheap. Genuinely one of the most affordable real meals you can cook.",
          "It reheats better than almost anything — day-two chana masala is a real thing.",
        ],
      },
      {
        type: "heading",
        heading: "Let's Be Honest About the Protein",
        text: "You will see chickpea recipes online claiming enormous protein numbers. Here is the truthful version:",
        items: [
          "Chickpeas give you roughly 15g of protein per serving here — solid for a plant-based meal, but less than a chicken dish.",
          "If you want it higher, serve it over quinoa (adds ~8g) or with a scoop of plain Greek yogurt on top (adds ~10g).",
          "The fiber is the real headline: 13g per serving is about half a day's worth, and that is what actually keeps you full.",
          "For a genuinely high-protein plant meal, pair it with our [Quinoa Khichdi](/recipes/r14) or a side of [Moong Dal Soup](/recipes/r9).",
        ],
      },
      {
        type: "heading",
        heading: "Ingredients You'll Need",
        text: "Makes 4 servings.",
        items: [
          "2 cans (15 oz each) chickpeas, drained and rinsed — or 3 cups cooked from dried",
          "1 large onion, finely chopped",
          "1 can (14 oz) crushed tomatoes, or 3 fresh tomatoes blended",
          "1 tablespoon ginger-garlic paste",
          "1 tablespoon oil",
          "1 teaspoon cumin seeds",
          "1 teaspoon ground coriander",
          "1 teaspoon garam masala",
          "1/2 teaspoon turmeric",
          "1/2 teaspoon Kashmiri chili powder or paprika",
          "1 teaspoon amchur (dried mango powder) — or 1 tablespoon lemon juice at the end",
          "Salt to taste",
          "Fresh cilantro, sliced red onion and lemon wedges to serve",
        ],
      },
      {
        type: "numbered",
        heading: "How to Make It, Step by Step",
        items: [
          "Bloom the cumin: Heat the oil, add the cumin seeds, and wait until they sizzle and darken slightly — about 30 seconds. This is the flavour base of the whole dish.",
          "Cook the onions properly: Add the onion and cook 8–10 minutes until deeply golden, not just soft. This is the single step most people rush, and it is the difference between flat and rich.",
          "Ginger and garlic: Stir in the ginger-garlic paste and cook 1 minute until the raw smell disappears.",
          "Toast the ground spices: Add coriander, turmeric and chili powder. Stir for 30 seconds — they should smell fragrant, not dusty.",
          "Build the masala: Pour in the tomatoes and salt. Simmer 8–10 minutes until the oil starts to separate at the edges. That separation is your signal the base is ready.",
          "Add the chickpeas: Stir them in with about 1/2 cup water. Simmer 10 minutes so they soak up the sauce.",
          "Thicken it: Mash a few spoonfuls of chickpeas against the side of the pot. This thickens the curry naturally without any cream.",
          "Finish: Turn off the heat, stir in the garam masala and amchur (or lemon juice), and top with cilantro.",
        ],
      },
      {
        type: "image",
        image: "/blog/chana-masala-2.jpg",
        imageAlt: "A bowl of chana masala topped with sliced raw red onion at an Indian street food market",
        imageCaption: "Serve it street-style: sliced raw onion piled on top and a squeeze of lemon. That sharp onion is what cuts through the rich masala.",
      },
      {
        type: "heading",
        heading: "My Best Tips",
        items: [
          "Do not rush the onions. Eight to ten minutes feels long the first time; it is the whole dish.",
          "Wait for the oil to separate from the tomato base before adding the chickpeas. That visual cue means the raw tomato taste is gone.",
          "Mash a few chickpeas — it thickens the curry the traditional way instead of with cream or flour.",
          "Amchur (dried mango powder) is what gives authentic chana masala its tang. If you cannot find it, lemon juice at the end works well.",
          "Add garam masala at the END, off the heat. Cooking it long destroys the aroma you paid for.",
          "Taste for salt and sourness before serving — chickpeas absorb a lot of both.",
        ],
      },
      {
        type: "heading",
        heading: "Common Mistakes to Avoid",
        items: [
          "Pale onions: the most common reason homemade chana masala tastes thin.",
          "Adding chickpeas too early: they turn mushy and never pick up the masala flavour.",
          "Skipping the acid: without amchur or lemon it tastes flat, no matter how many spices you add.",
          "Not rinsing canned chickpeas: the canning liquid makes the curry taste metallic and adds sodium.",
          "Boiling garam masala: add it off the heat, always.",
        ],
      },
      {
        type: "heading",
        heading: "What to Serve With Chana Masala",
        text: "It works with almost anything, but these are my favourites:",
        items: [
          "Basmati rice, jeera rice, or warm roti to scoop it up.",
          "For a lower-carb, higher-protein plate, serve it over [Quinoa Khichdi](/recipes/r14).",
          "A side of [Light Saag Paneer](/recipes/r16) makes a full vegetarian spread.",
          "Sliced red onion with lemon and a spoon of yogurt or raita on the side.",
          "Cooking for a mixed table? Serve it alongside our [Healthy Butter Chicken](/blog/healthy-butter-chicken) so everyone is happy.",
        ],
      },
      {
        type: "heading",
        heading: "Make It a Meal-Prep Win",
        items: [
          "Refrigerator: keeps 5 days in an airtight container, and honestly tastes better on day two.",
          "Freezer: freezes beautifully for up to 3 months. Portion it flat in bags so it thaws fast.",
          "Reheat on the stove with a splash of water — it thickens as it sits.",
          "Batch-cook a double portion on Sunday and you have lunches sorted for the week.",
        ],
      },
      {
        type: "heading",
        heading: "Frequently Asked Questions",
      },
      {
        type: "paragraph",
        heading: "What is the difference between chana masala and chickpea curry?",
        text: "They are essentially the same dish — chana masala is the traditional Indian name (chana means chickpea). Recipes labelled chickpea curry sometimes add coconut milk for a creamier, milder result, while classic chana masala is tomato-based and tangy.",
      },
      {
        type: "paragraph",
        heading: "Is chana masala actually healthy?",
        text: "Yes, genuinely. It is naturally vegan, high in fiber and plant protein, and cooked with about a tablespoon of oil rather than cream or ghee. Restaurant versions can be much heavier, which is why making it at home is worth the 30 minutes.",
      },
      {
        type: "paragraph",
        heading: "Can I use dried chickpeas instead of canned?",
        text: "Absolutely, and the texture is better. Soak 1.5 cups of dried chickpeas overnight, then boil until tender (about 45 minutes, or 15 in a pressure cooker) and use as you would the canned ones.",
      },
      {
        type: "paragraph",
        heading: "How do I make it creamier?",
        text: "Mash more of the chickpeas, or stir in a few tablespoons of plain yogurt or coconut milk off the heat. Both work, though the traditional version is not creamy at all.",
      },
      {
        type: "heading",
        heading: "More Healthy Recipes to Try",
        text: "If you liked this, these are the natural next stops:",
        items: [
          "[Dal Tadka](/recipes/r4) — the other weeknight legume dish every South Asian kitchen relies on.",
          "[Moong Dal Soup](/recipes/r9) — light, high in protein, and ready in minutes.",
          "Browse all our [high-protein recipes](/category/high-protein) for more meals that keep you full.",
          "Explore the full collection of [South Asian recipes](/category/south-asian), lightened up for everyday eating.",
          "Planning your week? Our [meal plans](/meal-plans) tie it all together.",
        ],
      },
    ],
  },
  {
    slug: "high-protein-indian-dinners-under-400-calories",
    title: "12 High-Protein Indian Dinners Under 400 Calories",
    subtitle: "Real numbers, real recipes, no rice math hidden from you",
    category: "High Protein",
    recipeCategory: "high-protein",
    date: "September 1, 2026",
    readTime: "10 min read",
    image: "/blog/high-protein-indian-dinners.jpg",
    heroImage: "/blog/high-protein-indian-dinners.jpg",
    bannerImage: "/blog/high-protein-indian-dinners.jpg",
    excerpt: "Twelve high-protein Indian and Indian-inspired dinners, every one under 400 calories per serving, with the real protein number next to each dish — from 42g butter chicken to a 175-calorie egg white bhurji.",
    quickFacts: [
      { label: "Dinners", value: "12" },
      { label: "Calorie range", value: "175 – 390 kcal" },
      { label: "Protein range", value: "13g – 42g", highlight: true },
      { label: "Vegetarian", value: "7 of 12" },
      { label: "Ready in 30 min or less", value: "4 of 12" },
    ],
    content: [
      {
        type: "intro",
        text: "For about two years my weeknight rotation was three dishes deep and I was bored out of my mind. I had quietly decided that eating Indian food and eating light were two separate projects — that a real curry meant accepting a 700-calorie plate, and that anything under 400 meant plain grilled chicken and steamed broccoli again. That turned out to be wrong, and what proved it was a kitchen scale and a very boring spreadsheet. I weighed the oil. I weighed the cream. And in almost every dish I loved, the calories were not coming from the spices, the vegetables, or even the meat. They were coming from three or four tablespoons of fat and a mountain of white rice nobody was really tasting. These twelve dinners are what came out of that. Every one is Indian or Indian-inspired, every one is under 400 calories a serving, and every one already lives on this site with a full recipe.",
      },
      {
        type: "paragraph",
        heading: "First, an honest word about that 400-calorie number",
        text: "Every calorie figure on this page is for the dish itself — the curry, the skewers, the bowl of dal. It does not include rice or roti. I am saying that up front because a lot of roundups quietly do not, and then you cook one of these, add a cup of basmati, and wonder why the arithmetic never works out. A cup of cooked white rice is roughly 200 calories; a medium roti is about 120. So a 320-calorie curry with a full cup of rice is really a 520-calorie dinner — which is still a perfectly good dinner, it is just not the number in the headline. My own fix was to halve the rice and let the curry do the work. Do the maths that fits your day, not mine.",
      },
      {
        type: "heading",
        heading: "How I Picked These Twelve",
        items: [
          "Under 400 calories per serving as written — no asterisks about using half the sauce.",
          "At least 13g of protein, with the actual number printed next to every dish so you can judge it yourself instead of trusting the word high.",
          "Indian or Indian-inspired. A few are openly fusion — tacos, a salad — but the spice base is the same.",
          "Genuinely dinner-able. One or two are filed under breakfast or snacks on this site, which says more about our category labels than about when anyone actually eats them.",
          "Already published here with a full recipe, so every link goes somewhere real rather than to a photo with no instructions.",
        ],
      },
      {
        type: "image",
        image: "/blog/high-protein-indian-dinners-1.jpg",
        imageAlt: "Overhead spread of Indian dinner dishes — dal, curry, paneer tikka skewers, saag, salad, rice and raita",
        imageCaption: "Nothing on this list asks you to give up the sauce. It just asks you to measure the fat that goes into it.",
      },
      {
        type: "heading",
        heading: "The 12 Dinners, Ranked by Protein",
        text: "Highest protein first. Calories are per serving, dish only.",
      },
      {
        type: "paragraph",
        heading: "1. Healthy Butter Chicken — 360 cal, 42g protein",
        text: "The dish everyone assumes is off the table. It is not. Heavy cream does far less flavour work than the toasted spices and the tomato base, and swapping it for yogurt plus a spoonful of cashew paste gets you 42g of protein for 360 calories — the highest protein number on this entire list. [Read the full guide](/blog/healthy-butter-chicken), or if you only want the steps, the [Lightened Up Butter Chicken recipe page](/recipes/r1) has it in five.",
      },
      {
        type: "paragraph",
        heading: "2. Chicken Tikka Salad — 390 cal, 40g protein",
        text: "Tikka-spiced chicken strips over romaine and cucumber with a yogurt-mint dressing. At 390 calories it is the heaviest thing here, but it is also nearly the highest in protein, which is a trade I will take every time. It packs well, which is why it has become my most-repeated work lunch as much as a dinner. [Get the recipe](/recipes/r18).",
      },
      {
        type: "paragraph",
        heading: "3. Healthy Chicken Tikka Masala — 340 cal, 40g protein",
        text: "Restaurant tikka masala regularly runs past 600 calories a serving, almost all of it cream and ghee. This version keeps the char on the chicken and the depth in the sauce and lands at 340. The step you cannot skip is charring the chicken separately before it meets the sauce — that is where the restaurant flavour actually lives, not in the cream. [Read the full guide](/blog/healthy-chicken-tikka-masala).",
      },
      {
        type: "paragraph",
        heading: "4. Air Fryer Tandoori Chicken — 250 cal, 35g protein",
        text: "If you own an air fryer, this is the best protein-per-calorie dish on the list and the cook time is fifteen minutes. No tandoor, no grill, no overnight marinade. I make a double batch on Sunday and it turns into three different dinners across the week — over salad, in a wrap, or just with dal. [Read the full guide](/blog/air-fryer-tandoori-chicken).",
      },
      {
        type: "paragraph",
        heading: "5. Turkey Keema Tacos — 370 cal, 32g protein",
        text: "Keema made with ground turkey is already one of the leanest things in the Indian repertoire, and putting it in corn tortillas with pico de gallo instead of over rice cuts the carb load without removing anything you would miss. This is the dish my family asks for without knowing it is the healthy one. [Get the recipe](/recipes/r8).",
      },
      {
        type: "paragraph",
        heading: "6. Egg White Masala Bhurji — 175 cal, 22g protein",
        text: "175 calories. Twenty-two grams of protein. Twenty minutes. It is the lightest dinner on this list by some distance, and it is filed under breakfast on this site — which I think says more about our category labels than about when anyone eats bhurji. In most South Asian homes this is a Tuesday dinner with a roti. If you eat late and do not want to go to bed heavy, start here. [Get the recipe](/recipes/r10).",
      },
      {
        type: "paragraph",
        heading: "7. Light Saag Paneer — 340 cal, 19g protein",
        text: "The trick here is not less paneer, it is less cream. The spinach is blanched and blended into a puree that does the thickening on its own, so the whole pan needs about one tablespoon of cream instead of a quarter cup. Nineteen grams of protein from a vegetarian curry is respectable. [Get the recipe](/recipes/r16).",
      },
      {
        type: "paragraph",
        heading: "8. Paneer Tikka Skewers — 300 cal, 18g protein",
        text: "Filed under snacks, eaten as dinner, at least in my house. The bell peppers go on the skewer with the paneer, so a plate of these plus a squeeze of lemon is already a complete meal at around 300 calories. Paneer is one of very few vegetarian proteins that holds its shape under a broiler instead of collapsing. [Get the recipe](/recipes/r12).",
      },
      {
        type: "paragraph",
        heading: "9. Dal Tadka — 280 cal, 16g protein",
        text: "The dish I would defend against anything else on this list. 280 calories, 16g of protein, built almost entirely from things already in the cupboard, and better on day two than day one. Do not skip the tadka — pouring that sizzling cumin, garlic and chilli over the top at the end is not a garnish, it is half the flavour of the dish. Use oil instead of ghee and it is fully vegan. [Get the recipe](/recipes/r4).",
      },
      {
        type: "paragraph",
        heading: "10. Chana Masala — 310 cal, 15g protein",
        text: "Two cans of chickpeas, an onion, a can of tomatoes. The protein is moderate, but the fibre is the real story: 13g a serving, roughly half a day's worth, and that is why it keeps you full far longer than the protein number alone suggests. [Read the full guide](/blog/chana-masala-chickpea-curry).",
      },
      {
        type: "paragraph",
        heading: "11. Quinoa Khichdi — 320 cal, 14g protein",
        text: "Khichdi built on quinoa and moong dal instead of rice, which nudges the protein up and gives you a complete amino acid profile without turning it into a different dish. This is what I cook when I have eaten badly for two days and want something that feels like a reset rather than a punishment. [Get the recipe](/recipes/r14).",
      },
      {
        type: "paragraph",
        heading: "12. Moong Dal Soup — 195 cal, 13g protein",
        text: "The lightest of the curries and soups here, with ginger and turmeric doing most of the work. On its own it is closer to a starter than a dinner — but with a couple of the [paneer tikka skewers](/recipes/r12) alongside, you get a 495-calorie plate carrying 31g of protein, and that is a properly good dinner. [Get the recipe](/recipes/r9).",
      },
      {
        type: "image",
        image: "/blog/high-protein-indian-dinners-2.jpg",
        imageAlt: "A steaming bowl of dal tadka with rotis and a small cucumber salad on a home kitchen table",
        imageCaption: "Dal, roti and a bit of salad. This is what most of these dinners actually look like on a Tuesday night — not a styled restaurant plate.",
      },
      {
        type: "heading",
        heading: "Let's Be Honest About the Vegetarian Ones",
        text: "Seven of the twelve are vegetarian. Three are vegan as written, and dal tadka joins them if you use oil instead of ghee.",
        items: [
          "The plant-based dishes here run 13–16g of protein per serving. That is decent. It is not high. The chicken dishes give you two to three times as much, and no amount of confident blog writing changes that.",
          "The honest fix is a side, not a bigger portion. A cup of plain Greek yogurt adds around 10g and belongs on the plate anyway.",
          "Quinoa instead of rice adds roughly 8g across a serving — that is exactly why the [Quinoa Khichdi](/recipes/r14) ranks where it does rather than lower.",
          "Combining two light dishes beats doubling one heavy one: the moong dal and paneer skewer pairing above is the pattern to copy.",
          "If protein is your main goal and you eat meat, dishes 1 to 5 will get you there far more easily. I would rather say that plainly than inflate the numbers to make a list look balanced.",
        ],
      },
      {
        type: "numbered",
        heading: "Three Rules That Made All of This Possible",
        text: "None of these are recipe tricks. They are the three habits that changed every dish I cook.",
        items: [
          "Measure the oil — once. Not forever, just for a week. Most of us free-pour two or three tablespoons where one would do, and that alone is 200 or more calories added to a dish you would have enjoyed just as much.",
          "Swap cream for yogurt or blended cashews, and add it off the heat. Off the heat is the entire trick. Yogurt splits when it boils, which is why so many people try this swap once, get a grainy sauce, and conclude it does not work.",
          "Halve the rice before you touch the curry. A 320-calorie curry becomes a 520-calorie dinner the moment a full cup of rice lands beside it — and the rice is almost never the part you were craving.",
        ],
      },
      {
        type: "paragraph",
        heading: "Can I meal-prep these?",
        text: "Most of them, yes. The dals, the chana masala and the keema all genuinely improve on day two, and they reheat without turning sad. The salad and anything with charred paneer are better made fresh. If you would rather have the week planned for you than pick from a list, our [weekly meal plans](/meal-plans) do exactly that job.",
      },
      {
        type: "paragraph",
        heading: "Are these actually authentic?",
        text: "Some are, some are not, and I would rather be clear about which. Dal tadka, bhurji and chana masala are made the way they are made. The butter chicken and tikka masala are deliberately lightened versions of restaurant dishes, not home dishes. The tacos and the salad are frankly fusion and make no claim otherwise. All of them taste like themselves; only some of them would pass at my grandmother's table.",
      },
      {
        type: "paragraph",
        heading: "What if I'm cooking for one?",
        text: "Do not halve anything. Cook the full batch of the dals and curries and eat them across three days — they are all better reheated, and cooking one portion of dal takes exactly as long as cooking four. The dishes worth making fresh in a single serving are the bhurji, which takes twenty minutes anyway, and the salad.",
      },
      {
        type: "heading",
        heading: "Where to Go From Here",
        items: [
          "[High-protein recipes](/category/high-protein) — everything on the site tagged for protein, in one place.",
          "[South Asian recipes](/category/south-asian) — the full cuisine collection, lighter versions included.",
          "[Weight loss recipes](/category/weight-loss) — filtered for lower-calorie dishes that still taste like something.",
          "[Dinner recipes](/category/dinner) — if you want to browse by meal time instead of by goal.",
          "[Weekly meal plans](/meal-plans) — for when you would rather not decide at 6pm on a Tuesday.",
        ],
      },
    ],
  },
  {
    slug: "healthy-breakfast-ideas-under-400-calories",
    title: "8 Healthy Breakfast Ideas Under 400 Calories (Ready in 25 Minutes or Less)",
    subtitle: "Real morning food, with the protein numbers printed honestly",
    category: "Healthy Living",
    recipeCategory: "breakfast",
    date: "September 2, 2026",
    readTime: "10 min read",
    image: "/blog/healthy-breakfast-ideas.jpg",
    heroImage: "/blog/healthy-breakfast-ideas.jpg",
    bannerImage: "/blog/healthy-breakfast-ideas.jpg",
    excerpt: "Eight healthy breakfast ideas under 400 calories, from a 175-calorie egg white bhurji to 28g-protein overnight oats — with the real protein number on every one, and an honest note about which are actually filling.",
    quickFacts: [
      { label: "Breakfasts", value: "8" },
      { label: "Calorie range", value: "175 – 380 kcal" },
      { label: "Protein range", value: "8g – 28g", highlight: true },
      { label: "Ready in 15 min or less", value: "6 of 8" },
      { label: "Make the night before", value: "3 of 8" },
    ],
    content: [
      {
        type: "intro",
        text: "I skipped breakfast for most of my twenties and told myself it was intermittent fasting. It was not. It was that I had never found anything I could actually make at 7:10am that was worth eating. So I would leave the house on coffee, eat something regrettable at eleven, and then be starving and irritable by two. What eventually fixed it was not willpower and it was not a smoothie phase. It was accepting that a weekday breakfast has to survive a specific test: can I make it while half awake, does it cost me under about twenty minutes, and will it still be holding me up at noon. These eight pass that test. They run from 175 to 380 calories, six of them are ready in fifteen minutes or less, and all of them already have a full recipe on this site.",
      },
      {
        type: "paragraph",
        heading: "The thing nobody counts at breakfast",
        text: "Before the list, the honest bit. Every calorie number here is the food as written — it does not include what you drink with it. A large latte is 150 to 250 calories. A coffee with two sugars and whole milk is around 100. That is not an argument for drinking black coffee if you hate black coffee; it is just the number that quietly breaks people's breakfast maths, far more often than the food does. The same goes for toppings: a sliced banana is about 105 calories and a generous handful of granola is around 120. Add both to a 240-calorie chia pudding and you have a 465-calorie breakfast. Still fine. Just not the number on the label.",
      },
      {
        type: "heading",
        heading: "How I Picked These Eight",
        items: [
          "Under 400 calories per serving as written.",
          "Twenty-five minutes or less of actual morning work — most are under fifteen.",
          "The protein number is printed on every single one, including the ones where it is low. That is the whole point of the list.",
          "A real mix: four are South Asian or fusion, four are the yogurt-and-oats kind. Weekday breakfast should not require picking a side.",
          "Every one has a full recipe on this site, so nothing here is a photo with a vague idea attached.",
        ],
      },
      {
        type: "image",
        image: "/blog/healthy-breakfast-ideas-1.jpg",
        imageAlt: "Make-ahead breakfasts on a wooden table — chia pudding with mango, a yogurt and granola parfait, overnight oats and a bowl of porridge",
        imageCaption: "Six of these eight are done in under fifteen minutes. Three of them are done before you even go to bed.",
      },
      {
        type: "heading",
        heading: "Made the Night Before",
        text: "Five minutes of work tonight, zero minutes tomorrow. These are the two that changed my mornings the most.",
      },
      {
        type: "paragraph",
        heading: "1. High-Protein Overnight Oats — 370 cal, 28g protein",
        text: "The highest-protein breakfast on this list, and it takes five minutes with a jar and a spoon. Oats, Greek yogurt, almond milk, a scoop of vanilla protein powder and a spoon of almond butter — mixed, covered, and left in the fridge for at least six hours. One honest note: our recipe page lists this as 5 minutes, which is the active time, not the waiting. Make it tonight or it will not be ready tomorrow. Batch five jars on Sunday and the whole week is handled. [Get the recipe](/recipes/r20).",
      },
      {
        type: "paragraph",
        heading: "2. Chia Seed Pudding — 240 cal, 8g protein",
        text: "Chia seeds, almond milk, vanilla, a little maple syrup, then four hours or overnight in the fridge until it sets. Mango and toasted coconut on top in the morning. Same warning as above: the 5 minutes is the mixing, not the setting. At 8g of protein this is on the light side, and the fix is in the recipe's own notes — a scoop of collagen or protein powder stirred in at the start takes it past 20g without changing the texture. [Get the recipe](/recipes/r11).",
      },
      {
        type: "heading",
        heading: "Ten Minutes or Less in the Morning",
        text: "For the mornings you did not plan ahead, which is most of them.",
      },
      {
        type: "paragraph",
        heading: "3. High-Protein Breakfast Smoothie — 380 cal, 28g protein",
        text: "Greek yogurt, frozen banana, protein powder, peanut butter, oats and berries in a blender. It ties the overnight oats for the most protein here and it is the fastest thing on the list from standing start to eating. It is also the highest in calories at 380, mostly from the peanut butter and the oats — which is exactly why it actually keeps you full rather than leaving you hungry at ten. [Read the full guide](/blog/high-protein-smoothie-breakfast).",
      },
      {
        type: "paragraph",
        heading: "4. Greek Yogurt Berry Parfait — 290 cal, 20g protein",
        text: "Yogurt, berries, a little low-sugar granola, a drizzle of honey, layered in a glass. No cooking at all. Twenty grams of protein for 290 calories is a genuinely good ratio, and the granola is the only thing to watch — a heavy hand there can add 150 calories without you noticing. Layer it in a jar the night before and it becomes a grab-and-go. [Get the recipe](/recipes/r7).",
      },
      {
        type: "heading",
        heading: "Worth Standing at the Stove For",
        text: "Fifteen to twenty-five minutes, and these are the ones I look forward to.",
      },
      {
        type: "paragraph",
        heading: "5. Savory Masala Oats — 220 cal, 8g protein",
        text: "If sweet breakfast has never worked for you, this is the answer. Cumin seeds bloomed in a little oil, vegetables softened with turmeric, then oats and water cooked down until absorbed. It tastes like upma, not like porridge. The protein is low at 8g — the recipe's own tip is the right fix: a handful of roasted peanuts on top adds both crunch and about 7g more. [Get the recipe](/recipes/r3).",
      },
      {
        type: "paragraph",
        heading: "6. Avocado Roti Toast — 310 cal, 9g protein",
        text: "Avocado toast, except the bread is a toasted whole wheat roti and the seasoning is chaat masala and pomegranate seeds. I was sceptical and then I made it three days running. It is the best-looking thing on this list by a distance, which matters more on a slow Sunday than a Tuesday. Nine grams of protein is thin, so put a fried egg on it — that is roughly 6g more and it belongs there anyway. [Get the recipe](/recipes/r13).",
      },
      {
        type: "paragraph",
        heading: "7. Egg White Masala Bhurji — 175 cal, 22g protein",
        text: "The best number on this whole page: 175 calories carrying 22g of protein, in twenty minutes. Onion and cumin softened, tomatoes and green chilli cooked down, then six egg whites scrambled through it gently. If you are eating for weight loss and you want one breakfast that does the most work for the fewest calories, this is it. It also shows up on our [12 high-protein Indian dinners](/blog/high-protein-indian-dinners-under-400-calories) list, because in most South Asian homes bhurji is not a breakfast-only dish. [Get the recipe](/recipes/r10).",
      },
      {
        type: "paragraph",
        heading: "8. Oat Idli — 210 cal, 9g protein",
        text: "Idli without the two-day fermentation: powdered oats, semolina and yogurt rested for five minutes, eno stirred in right before steaming, done in fifteen minutes of steaming. This is the most involved thing on the list at twenty-five minutes total, and it is also the one most worth making a double batch of. Eat it with sambar rather than plain — the dal in sambar is where the missing protein comes from. [Get the recipe](/recipes/r17).",
      },
      {
        type: "image",
        image: "/blog/healthy-breakfast-ideas-2.jpg",
        imageAlt: "Masala egg bhurji with onion, tomato and coriander, served with rotis and a cup of chai on a home kitchen table",
        imageCaption: "Bhurji, a roti and chai. Made with egg whites it comes in at 175 calories and 22 grams of protein — nothing else on this list comes close on that ratio.",
      },
      {
        type: "heading",
        heading: "The Protein Problem With Most Healthy Breakfasts",
        text: "Four of these eight are genuinely high in protein. Four are not, and I would rather say which than let the word healthy do the work.",
        items: [
          "The strong four: overnight oats (28g), smoothie (28g), bhurji (22g), parfait (20g). Any of these will hold you until lunch on their own.",
          "The light four: chia pudding (8g), masala oats (8g), avocado roti toast (9g), oat idli (9g). These taste great and they are genuinely nutritious — they are just not going to keep you full for four hours by themselves.",
          "This matters more at breakfast than at any other meal, because a low-protein breakfast is what makes you eat badly at eleven. The morning is where the rest of the day gets decided.",
          "Every one of the light four has a cheap fix already in its recipe notes: peanuts on the oats, an egg on the roti toast, protein powder or collagen in the chia, sambar with the idli. None of them add more than about 100 calories.",
          "If you want the protein without the arithmetic, start with the [high-protein recipes](/category/high-protein) collection and work backwards.",
        ],
      },
      {
        type: "numbered",
        heading: "Three Things That Actually Fixed My Mornings",
        text: "None of these are recipes. They are the reasons the recipes finally stuck.",
        items: [
          "Do the five minutes the night before. Overnight oats, chia pudding and a layered parfait all take about the same effort as brushing your teeth, and they remove the decision entirely. A breakfast you do not have to decide on is a breakfast you actually eat.",
          "Pick two, not eight. I rotated between exactly two breakfasts for months and it worked far better than trying to cook something different every day. Variety is a weekend project; weekdays want a default.",
          "Count the coffee once. Not forever — just work out what your usual morning drink actually costs you, one time. For a lot of people it is more calories than the food, and knowing the number is enough to change what you order.",
        ],
      },
      {
        type: "paragraph",
        heading: "Which one should I start with?",
        text: "If you want to lose weight, the [Egg White Masala Bhurji](/recipes/r10) — no other breakfast here gives you 22g of protein for 175 calories. If your mornings are genuinely chaotic, the [overnight oats](/recipes/r20), because the work happens when you have time. If you have never enjoyed a healthy breakfast, the [Savory Masala Oats](/recipes/r3), because it is savoury and warm and does not taste like a diet.",
      },
      {
        type: "paragraph",
        heading: "Can I meal-prep a week of these?",
        text: "Three of them, properly: overnight oats and chia pudding batch into five jars on a Sunday, and parfaits can be layered the night before. The cooked ones — bhurji, masala oats, avocado roti toast — are morning-of dishes and do not reheat well. Oat idli is the exception in the middle: steam a double batch and it keeps two days, warmed through. If you want a whole week mapped out rather than assembled from a list, our [meal plans](/meal-plans) cover breakfast too.",
      },
      {
        type: "paragraph",
        heading: "Is a 200-calorie breakfast too small?",
        text: "For some people, yes, and I would rather you knew that than quietly under-ate. A 175-calorie bhurji is brilliant if you are managing your intake and eating a real lunch. It is not enough if you train in the morning or you have a physically demanding job. The honest way to use this list is to treat the calorie number as information, not a target — the protein number is the one that predicts whether you will make it to lunch.",
      },
      {
        type: "heading",
        heading: "Where to Go From Here",
        items: [
          "[Breakfast recipes](/category/breakfast) — the full breakfast collection on the site.",
          "[High-protein recipes](/category/high-protein) — everything tagged for protein, across every meal.",
          "[Diabetic-friendly recipes](/category/diabetic-friendly) — lower-glycemic options, several of which are on this list.",
          "[12 High-Protein Indian Dinners Under 400 Calories](/blog/high-protein-indian-dinners-under-400-calories) — the dinner half of this idea.",
          "[Weekly meal plans](/meal-plans) — breakfast through dinner, planned rather than picked.",
        ],
      },
    ],
  },
];

/**
 * The `blogs` array above is kept in the order posts were written (oldest
 * first), which is the easiest order to edit by hand. Every listing in the UI
 * should use this instead, otherwise "Latest from the Blog" shows the oldest
 * posts and hides the newest ones.
 */
export const blogsNewestFirst: Blog[] = blogs
  .map((blog, index) => ({ blog, index }))
  .sort((a, b) => {
    const diff = new Date(b.blog.date).getTime() - new Date(a.blog.date).getTime();
    // Same publish date: the one written later (further down the array) wins.
    return diff !== 0 ? diff : b.index - a.index;
  })
  .map(({ blog }) => blog);
