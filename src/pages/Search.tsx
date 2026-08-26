import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search as SearchIcon,
  SlidersHorizontal,
  X,
  ChevronDown,
  ChevronUp,
  ArrowUpDown,
} from "lucide-react";
import { useState, useMemo, useCallback } from "react";
import { recipes } from "@/data/recipes";
import { RecipeCard } from "@/components/recipes/RecipeCard";
import { motion, AnimatePresence } from "framer-motion";

// ─── Filter types ────────────────────────────────────────────────────────────

type SortOption = "popular" | "newest" | "calories-asc" | "protein-desc" | "time-asc";

interface Filters {
  cookTime: string;     // "", "under15", "15-30", "30-60", "60plus"
  calories: string;     // "", "under200", "200-400", "400-600", "600plus"
  difficulty: string;   // "", "Easy", "Medium", "Hard"
  mealType: string;     // "", "breakfast", "lunch", "dinner", "snacks"
  tags: string[];
}

const EMPTY_FILTERS: Filters = {
  cookTime: "",
  calories: "",
  difficulty: "",
  mealType: "",
  tags: [],
};

// ─── All unique tags from data ────────────────────────────────────────────────

const ALL_TAGS = [
  "High Protein",
  "Vegan",
  "Keto",
  "Gluten Free",
  "Diabetic Friendly",
  "Weight Loss",
  "Low Calorie",
  "High Fiber",
  "Quick",
  "No Cook",
  "Meal Prep",
  "Vegetarian",
  "Fusion",
  "Family Friendly",
  "Omega-3",
];

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: "Most Popular", value: "popular" },
  { label: "Newest", value: "newest" },
  { label: "Calories: Low to High", value: "calories-asc" },
  { label: "Protein: High to Low", value: "protein-desc" },
  { label: "Fastest to Cook", value: "time-asc" },
];

// ─── Collapsible filter section ───────────────────────────────────────────────

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-border pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left mb-3 group"
        data-testid={`filter-section-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <span className="font-semibold text-sm uppercase tracking-wider text-foreground/80 group-hover:text-primary transition-colors">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Pill option button ───────────────────────────────────────────────────────

function PillOption({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
        active
          ? "bg-primary text-white border-primary"
          : "bg-background text-foreground border-border hover:border-primary hover:text-primary"
      }`}
      data-testid={`filter-option-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {label}
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Search() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
  const [sort, setSort] = useState<SortOption>("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  // Live filtering — no submit button needed
  const results = useMemo(() => {
    let out = [...recipes];

    // Text search
    if (query.trim()) {
      const q = query.toLowerCase();
      out = out.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q)) ||
          r.category.toLowerCase().includes(q) ||
          r.mealType.toLowerCase().includes(q) ||
          r.ingredients.some((ing) => ing.name.toLowerCase().includes(q))
      );
    }

    // Cook time
    if (filters.cookTime) {
      out = out.filter((r) => {
        const t = r.cookTimeMinutes;
        if (filters.cookTime === "under15") return t < 15;
        if (filters.cookTime === "15-30") return t >= 15 && t <= 30;
        if (filters.cookTime === "30-60") return t > 30 && t <= 60;
        if (filters.cookTime === "60plus") return t > 60;
        return true;
      });
    }

    // Calories
    if (filters.calories) {
      out = out.filter((r) => {
        const c = r.calories;
        if (filters.calories === "under200") return c < 200;
        if (filters.calories === "200-400") return c >= 200 && c <= 400;
        if (filters.calories === "400-600") return c > 400 && c <= 600;
        if (filters.calories === "600plus") return c > 600;
        return true;
      });
    }

    // Difficulty
    if (filters.difficulty) {
      out = out.filter((r) => r.difficulty === filters.difficulty);
    }

    // Meal type
    if (filters.mealType) {
      out = out.filter((r) => r.mealType === filters.mealType);
    }

    // Tags — recipe must include ALL selected tags
    if (filters.tags.length > 0) {
      out = out.filter((r) =>
        filters.tags.every((tag) =>
          r.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
        )
      );
    }

    // Sort
    if (sort === "popular") out.sort((a, b) => b.ratingCount - a.ratingCount);
    if (sort === "newest") out.sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));
    if (sort === "calories-asc") out.sort((a, b) => a.calories - b.calories);
    if (sort === "protein-desc") out.sort((a, b) => b.protein - a.protein);
    if (sort === "time-asc") out.sort((a, b) => a.cookTimeMinutes - b.cookTimeMinutes);

    return out;
  }, [query, filters, sort]);

  // Count active filters
  const activeFilterCount =
    (filters.cookTime ? 1 : 0) +
    (filters.calories ? 1 : 0) +
    (filters.difficulty ? 1 : 0) +
    (filters.mealType ? 1 : 0) +
    filters.tags.length;

  const clearAll = useCallback(() => {
    setFilters(EMPTY_FILTERS);
    setQuery("");
  }, []);

  const toggleTag = useCallback((tag: string) => {
    setFilters((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  }, []);

  const setFilterField = useCallback(
    <K extends keyof Filters>(key: K, value: Filters[K]) => {
      setFilters((prev) => ({
        ...prev,
        [key]: prev[key] === value ? (Array.isArray(value) ? [] : "") : value,
      }));
    },
    []
  );

  const activeLabel = SORT_OPTIONS.find((o) => o.value === sort)?.label ?? "Sort";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Search Recipes | SpiceFitKitchen</title>
        <meta
          name="description"
          content="Search and filter 500+ healthy South Asian, American, and Fusion recipes by cook time, calories, dietary tags, and more."
        />
      </Helmet>

      {/* ── Search Hero ── */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-orange-50 dark:to-orange-950/20 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3">
            Find Your Perfect Recipe
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Search by dish, ingredient, or dietary preference — then filter by cook time, calories, and more.
          </p>
          <div className="relative max-w-2xl mx-auto">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 pointer-events-none" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Try "dal", "high protein", "under 20 minutes"...'
              className="pl-12 pr-12 h-14 text-base rounded-full shadow-md border-border focus:border-primary"
              data-testid="input-search-query"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                data-testid="button-clear-search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* ── Active filter chips + sort bar ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            {/* Mobile filter toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden rounded-full gap-2"
              data-testid="button-toggle-filters"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilterCount > 0 && (
                <Badge className="h-5 w-5 p-0 flex items-center justify-center text-xs rounded-full">
                  {activeFilterCount}
                </Badge>
              )}
            </Button>

            {/* Active filter chips */}
            {filters.cookTime && (
              <ActiveChip
                label={cookTimeLabel(filters.cookTime)}
                onRemove={() => setFilterField("cookTime", "")}
              />
            )}
            {filters.calories && (
              <ActiveChip
                label={calorieLabel(filters.calories)}
                onRemove={() => setFilterField("calories", "")}
              />
            )}
            {filters.difficulty && (
              <ActiveChip
                label={filters.difficulty}
                onRemove={() => setFilterField("difficulty", "")}
              />
            )}
            {filters.mealType && (
              <ActiveChip
                label={capitalize(filters.mealType)}
                onRemove={() => setFilterField("mealType", "")}
              />
            )}
            {filters.tags.map((tag) => (
              <ActiveChip key={tag} label={tag} onRemove={() => toggleTag(tag)} />
            ))}
            {activeFilterCount > 0 && (
              <button
                onClick={clearAll}
                className="text-sm text-muted-foreground hover:text-destructive transition-colors underline underline-offset-2"
                data-testid="button-clear-all-filters"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="rounded-full gap-2"
              data-testid="button-sort"
            >
              <ArrowUpDown className="w-4 h-4" />
              {activeLabel}
            </Button>
            <AnimatePresence>
              {showSortMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-10 z-50 bg-card border border-border rounded-xl shadow-lg py-2 min-w-[220px]"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSort(opt.value);
                        setShowSortMenu(false);
                      }}
                      className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors ${
                        sort === opt.value ? "text-primary font-semibold" : "text-foreground"
                      }`}
                      data-testid={`sort-option-${opt.value}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex gap-8">
          {/* ── Filter Sidebar ── */}
          <aside
            className={`w-64 flex-shrink-0 ${
              showFilters ? "block" : "hidden"
            } lg:block`}
          >
            <div className="bg-card border border-border rounded-2xl p-5 sticky top-24">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-base flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-primary" />
                  Filters
                  {activeFilterCount > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {activeFilterCount}
                    </Badge>
                  )}
                </h2>
                {activeFilterCount > 0 && (
                  <button
                    onClick={() => setFilters(EMPTY_FILTERS)}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    data-testid="button-reset-filters"
                  >
                    Reset
                  </button>
                )}
              </div>

              <FilterSection title="Cook Time">
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Under 15 min", value: "under15" },
                    { label: "15 – 30 min", value: "15-30" },
                    { label: "30 – 60 min", value: "30-60" },
                    { label: "60+ min", value: "60plus" },
                  ].map((opt) => (
                    <PillOption
                      key={opt.value}
                      label={opt.label}
                      active={filters.cookTime === opt.value}
                      onClick={() => setFilterField("cookTime", opt.value)}
                    />
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Calories">
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Under 200", value: "under200" },
                    { label: "200 – 400", value: "200-400" },
                    { label: "400 – 600", value: "400-600" },
                    { label: "600+", value: "600plus" },
                  ].map((opt) => (
                    <PillOption
                      key={opt.value}
                      label={opt.label}
                      active={filters.calories === opt.value}
                      onClick={() => setFilterField("calories", opt.value)}
                    />
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Difficulty">
                <div className="flex flex-wrap gap-2">
                  {["Easy", "Medium", "Hard"].map((d) => (
                    <PillOption
                      key={d}
                      label={d}
                      active={filters.difficulty === d}
                      onClick={() => setFilterField("difficulty", d)}
                    />
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Meal Type">
                <div className="flex flex-wrap gap-2">
                  {["breakfast", "lunch", "dinner", "snacks"].map((m) => (
                    <PillOption
                      key={m}
                      label={capitalize(m)}
                      active={filters.mealType === m}
                      onClick={() => setFilterField("mealType", m)}
                    />
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Dietary Tags">
                <div className="flex flex-wrap gap-2">
                  {ALL_TAGS.map((tag) => (
                    <PillOption
                      key={tag}
                      label={tag}
                      active={filters.tags.includes(tag)}
                      onClick={() => toggleTag(tag)}
                    />
                  ))}
                </div>
              </FilterSection>
            </div>
          </aside>

          {/* ── Results ── */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-muted-foreground" data-testid="text-result-count">
                {results.length === 0
                  ? "No recipes found"
                  : `${results.length} recipe${results.length === 1 ? "" : "s"} found`}
                {query && ` for "${query}"`}
              </p>
            </div>

            {results.length === 0 ? (
              <EmptyState onClear={clearAll} />
            ) : (
              <motion.div
                key={`${query}-${JSON.stringify(filters)}-${sort}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {results.map((recipe, i) => (
                  <motion.div
                    key={recipe.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                  >
                    <RecipeCard recipe={recipe} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function ActiveChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
      {label}
      <button
        onClick={onRemove}
        className="hover:text-primary/70 transition-colors"
        data-testid={`chip-remove-${label.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <X className="w-3 h-3" />
      </button>
    </span>
  );
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="text-center py-20">
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-5">
        <SearchIcon className="w-9 h-9 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-bold mb-2">No recipes found</h3>
      <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
        Try adjusting your search or filters — or clear everything to browse the full collection.
      </p>
      <Button onClick={onClear} data-testid="button-empty-clear">
        Clear search and filters
      </Button>
    </div>
  );
}

function cookTimeLabel(val: string) {
  if (val === "under15") return "Under 15 min";
  if (val === "15-30") return "15 – 30 min";
  if (val === "30-60") return "30 – 60 min";
  if (val === "60plus") return "60+ min";
  return val;
}

function calorieLabel(val: string) {
  if (val === "under200") return "Under 200 cal";
  if (val === "200-400") return "200 – 400 cal";
  if (val === "400-600") return "400 – 600 cal";
  if (val === "600plus") return "600+ cal";
  return val;
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
