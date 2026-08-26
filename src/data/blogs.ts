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
  excerpt: string;
  content: BlogSection[];
  nutrition?: NutritionRow[];
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
];
