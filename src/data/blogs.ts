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
    date: "June 15, 2026",
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
];
