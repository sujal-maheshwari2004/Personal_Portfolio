// Customization based on Sujal's preferences

// AI, machine learning, data science, cloud computing
favouriteInterest("AI")

// coffee, tea, water, juice
favouriteDrink("coffee")

// light, dark
favouriteMode("dark")

// round, sharp, soft
favouriteEdgeStyle("soft")

// Function definitions for properties (rest of the code below remains unchanged)

function setProp(prop, value) {
    document.documentElement.style.setProperty(prop, value)
}

function favouriteInterest(topic) {
    if (topic) {
        setProp("--topic", "var(--" + topic + ")");
    }
}

function favouriteMode(mode) {
    if (mode === "light" || !mode) {
        setProp('--background', "var(--light)");
        setProp('--text', "var(--dark)");
    } else if (mode === "dark") {
        setProp('--background', "var(--dark)");
        setProp('--text', "var(--light)");
    }
}

function favouriteDrink(beverage) {
    if (beverage === "coffee") {
        setProp('--light', "#d2b48c") // coffee beige
        setProp('--dark', "#4e342e") // coffee brown
    } else if (beverage === "tea") {
        setProp('--light', "#c5e1a5") // light green
        setProp('--dark', "#33691e") // dark green
    } else {
        setProp('--light', "#f5f5f5") // neutral colors
        setProp('--dark', "#222222")
    }
}
